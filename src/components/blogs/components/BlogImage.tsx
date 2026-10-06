import React from 'react';
import './blogStyles.css';

export function BlogImage({
  src,
  alt,
  width = '100%',
}: {
  src: string;
  alt: string;
  width?: string;
}) {
  return (
    <figure className="blog-image-wrapper" style={{ maxWidth: width }}>
      <img src={src} alt={alt} className="blog-image" />
      {alt && <figcaption className="blog-image-caption">{alt}</figcaption>}
    </figure>
  );
}

export function BlogImages({
  images,
}: {
  images: { src: string; alt: string }[];
}) {
  return (
    <div className="blog-images-grid">
      {images.map((img, idx) => (
        <BlogImage key={idx} src={img.src} alt={img.alt} />
      ))}
    </div>
  );
}

export function BlogEmoji({
  src,
  alt,
  size = 'medium',
}: {
  src: string;
  alt: string;
  size?: 'small' | 'medium' | 'large';
}) {
  return <img src={src} alt={alt} className={`blog-emoji emoji-${size}`} />;
}
