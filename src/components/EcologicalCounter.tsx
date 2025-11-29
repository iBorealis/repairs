import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export function EcologicalCounter() {
  const [count, setCount] = useState(127);
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    const fetchCount = async () => {
      const { data, error } = await supabase
        .from('ecological_counter')
        .select('devices_saved')
        .maybeSingle();

      if (data && !error) {
        setCount(data.devices_saved);
      }
    };

    fetchCount();
  }, []);

  useEffect(() => {
    if (displayCount < count) {
      const duration = 2000;
      const increment = count / (duration / 16);

      const timer = setInterval(() => {
        setDisplayCount(prev => {
          const next = prev + increment;
          if (next >= count) {
            clearInterval(timer);
            return count;
          }
          return next;
        });
      }, 16);

      return () => clearInterval(timer);
    }
  }, [count, displayCount]);

  return (
    <div className="inline-flex items-center">
      <span className="font-display text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary-600 via-gaming-500 to-eco-600 bg-clip-text text-transparent">
        {Math.floor(displayCount)}
      </span>
    </div>
  );
}
