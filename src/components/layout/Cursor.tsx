import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [hoverText, setHoverText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if it's a touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }
    
    setIsVisible(true);

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const hoverable = target.closest('a, button, .hoverable');
      
      if (hoverable) {
        setIsHovering(true);
        const text = hoverable.getAttribute('data-cursor') || '';
        setHoverText(text);
      } else {
        setIsHovering(false);
        setHoverText('');
      }
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[100] flex items-center justify-center hidden md:flex"
      animate={{
        x: position.x - (isHovering ? (hoverText ? 40 : 24) : 8),
        y: position.y - (isHovering ? (hoverText ? 40 : 24) : 8),
        width: isHovering ? (hoverText ? 80 : 48) : 16,
        height: isHovering ? (hoverText ? 80 : 48) : 16,
      }}
      transition={{ type: 'spring', stiffness: 400, damping: 28, mass: 0.2 }}
    >
      <div className={`rounded-full bg-foreground flex items-center justify-center w-full h-full`}>
        {hoverText && (
          <span className="text-background text-[10px] font-bold tracking-wider">{hoverText}</span>
        )}
      </div>
    </motion.div>
  );
}
