import React, { useRef, useEffect, ReactNode } from 'react';
import './ClickSpark.css';

interface Spark {
  x: number;
  y: number;
  angle: number;
  speed: number;
  size: number;
  startTime: number;
  color: string;
}

interface ClickSparkProps {
  sparkColor?: string;
  sparkSize?: number;
  sparkRadius?: number;
  sparkCount?: number;
  duration?: number;
  extraScale?: number;
  children: ReactNode;
}

export default function ClickSpark({
  sparkColor = '#ffffff',
  sparkSize = 7,
  sparkRadius = 22,
  sparkCount = 8,
  duration = 400,
  extraScale = 1,
  children,
}: ClickSparkProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sparksRef = useRef<Spark[]>([]);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Soft, satisfying haptic-style acoustic tap
  const playSoothingClickSound = () => {
    try {
      if (!audioCtxRef.current) {
        const AudioContextClass =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (AudioContextClass) {
          audioCtxRef.current = new AudioContextClass();
        }
      }

      const ctx = audioCtxRef.current;
      if (!ctx) return;

      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      // Gentle lowpass filter removing all harshness
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(750, now);
      filter.Q.setValueAtTime(1.2, now);

      // Deep, soft acoustic pop (300Hz -> 50Hz)
      osc.type = 'sine';
      osc.frequency.setValueAtTime(300, now);
      osc.frequency.exponentialRampToValueAtTime(50, now + 0.02);

      // Whisper-quiet volume
      gain.gain.setValueAtTime(0.02, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.02);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.022);
    } catch {
      // Audio playback fails silently if restricted
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const animate = (timestamp: number) => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      sparksRef.current = sparksRef.current.filter((spark) => {
        const elapsed = timestamp - spark.startTime;
        if (elapsed >= duration) return false;

        const progress = elapsed / duration;
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const distance = easeOut * sparkRadius * extraScale;
        const alpha = Math.max(0, 1 - progress);

        const currentX = spark.x + Math.cos(spark.angle) * distance;
        const currentY = spark.y + Math.sin(spark.angle) * distance;
        const currentSize = spark.size * (1 - progress * 0.7);

        ctx.save();
        ctx.fillStyle = sparkColor;
        ctx.globalAlpha = alpha;
        ctx.shadowColor = 'rgba(255, 255, 255, 0.5)';
        ctx.shadowBlur = 3;

        ctx.beginPath();
        ctx.arc(currentX, currentY, Math.max(0.5, currentSize / 2), 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        return true;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [sparkColor, sparkSize, sparkRadius, sparkCount, duration, extraScale]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    playSoothingClickSound();

    const now = performance.now();
    const x = e.clientX;
    const y = e.clientY;
    const step = (Math.PI * 2) / sparkCount;

    for (let i = 0; i < sparkCount; i++) {
      const angle = i * step + (Math.random() * 0.25 - 0.12);
      sparksRef.current.push({
        x,
        y,
        angle,
        speed: 1,
        size: sparkSize + (Math.random() * 2 - 1),
        startTime: now,
        color: sparkColor,
      });
    }
  };

  return (
    <div className="click-spark-wrapper" onClick={handleClick}>
      <canvas ref={canvasRef} className="click-spark-canvas" />
      {children}
    </div>
  );
}
