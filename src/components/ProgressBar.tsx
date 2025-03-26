
import React from 'react';

interface ProgressBarProps {
  progress: number;
  total: number;
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  color?: 'blue' | 'coral' | 'jade' | 'gold' | 'purple';
  showPercentage?: boolean;
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  total,
  label,
  size = 'md',
  color = 'blue',
  showPercentage = true,
  className = '',
}) => {
  const percentage = Math.min(Math.round((progress / total) * 100), 100);
  
  const sizeStyles = {
    sm: 'h-1.5',
    md: 'h-2',
    lg: 'h-3',
  };
  
  const colorStyles = {
    blue: 'bg-blue',
    coral: 'bg-coral',
    jade: 'bg-jade',
    gold: 'bg-gold',
    purple: 'bg-purple',
  };
  
  const bgColorStyles = {
    blue: 'bg-blue/10',
    coral: 'bg-coral/10',
    jade: 'bg-jade/10',
    gold: 'bg-gold/10',
    purple: 'bg-purple/10',
  };

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium text-slate-700">{label}</span>
          {showPercentage && (
            <span className="text-sm font-medium text-slate-700">{percentage}%</span>
          )}
        </div>
      )}
      <div className={`w-full ${sizeStyles[size]} rounded-full ${bgColorStyles[color]} overflow-hidden`}>
        <div 
          className={`${sizeStyles[size]} ${colorStyles[color]} rounded-full transition-all duration-700 ease-in-out`}
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
