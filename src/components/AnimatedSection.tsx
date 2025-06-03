
import { ReactNode } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-in' | 'slide-in' | 'scale-in';
  delay?: number;
}

const AnimatedSection = ({ 
  children, 
  className, 
  animation = 'fade-in',
  delay = 0 
}: AnimatedSectionProps) => {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  const animationClasses = {
    'fade-in': 'opacity-0 translate-y-8 transition-all duration-700 ease-out',
    'slide-in': 'opacity-0 -translate-x-8 transition-all duration-700 ease-out',
    'scale-in': 'opacity-0 scale-95 transition-all duration-700 ease-out',
  };

  const activeClasses = {
    'fade-in': 'opacity-100 translate-y-0',
    'slide-in': 'opacity-100 translate-x-0',
    'scale-in': 'opacity-100 scale-100',
  };

  return (
    <div
      ref={ref}
      className={cn(
        animationClasses[animation],
        isIntersecting && activeClasses[animation],
        className
      )}
      style={{
        transitionDelay: isIntersecting ? `${delay}ms` : '0ms',
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
