import { useState, useEffect } from 'react';
import { getAndIncrementVisitorCount } from '../firebase/visitorService';

export function useVisitorCounter() {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    getAndIncrementVisitorCount()
      .then((count) => {
        if (mounted) {
          setVisitorCount(count);
          setLoading(false);
        }
      })
      .catch(() => {
        if (mounted) {
          setVisitorCount(1421);
          setLoading(false);
        }
      });

    return () => {
      mounted = false;
    };
  }, []);

  return { visitorCount, loading };
}
