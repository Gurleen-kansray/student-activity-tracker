import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hover = true }) => {
  const { isDark } = useTheme();
  
  return (
    <div className={`
      ${isDark ? 'bg-gray-800/90' : 'bg-white/90'} 
      backdrop-blur-md rounded-lg shadow-lg 
      ${hover ? 'hover:shadow-xl transform hover:-translate-y-1' : ''} 
      transition-all duration-300 
      ${className}
    `}>
      {children}
    </div>
  );
};

export default Card;