
import { useEffect, useState } from 'react';

interface CountingNumberProps {
  end: number;
  duration?: number;
  isVisible: boolean;
  suffix?: string;
}

const CountingNumber = ({ end, duration = 2000, isVisible, suffix = "" }: CountingNumberProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, isVisible]);

  return <span>{count}{suffix}</span>;
};

export default CountingNumber;
