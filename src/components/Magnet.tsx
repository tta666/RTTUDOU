import { useRef, useState, ReactNode } from 'react';

interface MagnetProps {
  children: ReactNode;
  padding?: number;
  strength?: number;
  className?: string;
}

export default function Magnet({
  children,
  padding = 150,
  strength = 3,
  className = '',
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distX = e.clientX - centerX;
    const distY = e.clientY - centerY;
    const distance = Math.sqrt(distX * distX + distY * distY);
    
    if (distance < padding) {
      setIsActive(true);
      const moveX = distX / strength;
      const moveY = distY / strength;
      ref.current.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
    } else {
      setIsActive(false);
      ref.current.style.transform = 'translate3d(0, 0, 0)';
    }
  };

  const handleMouseLeave = () => {
    setIsActive(false);
    if (ref.current) {
      ref.current.style.transform = 'translate3d(0, 0, 0)';
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        willChange: 'transform',
        transition: isActive
          ? 'transform 0.3s ease-out'
          : 'transform 0.6s ease-in-out',
      }}
    >
      {children}
    </div>
  );
}