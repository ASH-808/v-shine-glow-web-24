
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface MovingTickerProps {
  children: ReactNode;
  speed?: number;
  direction?: 'left' | 'right';
  className?: string;
}

const MovingTicker = ({ 
  children, 
  speed = 50, 
  direction = 'left',
  className = '' 
}: MovingTickerProps) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        className="flex gap-6"
        animate={{
          x: direction === 'left' ? [0, -1000] : [-1000, 0],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
};

export default MovingTicker;
