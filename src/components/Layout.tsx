import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface LayoutProps {
  children: React.ReactNode;
  backgroundImage?: string;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  backgroundImage = 'https://images.unsplash.com/photo-1557683316-973673baf926?w=1920&h=1080&fit=crop&crop=top',
  className = ''
}) => {
  const { isDark } = useTheme();
  
  return (
    <div 
      className={`min-h-screen relative ${className}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className={`absolute inset-0 ${isDark ? 'bg-gray-900/80' : 'bg-white/70'}`}></div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Layout;