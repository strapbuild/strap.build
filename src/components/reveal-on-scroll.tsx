'use client';
import { useEffect, useRef, useState } from 'react';

export const RevealOnScroll = (props: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { children, className } = props;
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        scrollObserver.unobserve(entry.target);
      }
    });

    if (ref.current) {
      scrollObserver.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        scrollObserver.unobserve(ref.current);
      }
    };
  }, []);

  const classes = `transition duration-700 ease-in-out ${className}
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`;

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
};
