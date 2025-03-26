
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from './ProgressBar';

interface LanguageCardProps {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  progress?: number;
  totalLessons: number;
  color: 'blue' | 'coral' | 'jade' | 'gold' | 'purple';
  className?: string;
}

const LanguageCard: React.FC<LanguageCardProps> = ({
  id,
  title,
  icon,
  description,
  progress = 0,
  totalLessons,
  color,
  className = '',
}) => {
  const navigate = useNavigate();
  
  const bgColorStyles = {
    blue: 'bg-blue/5 hover:bg-blue/10',
    coral: 'bg-coral/5 hover:bg-coral/10',
    jade: 'bg-jade/5 hover:bg-jade/10',
    gold: 'bg-gold/5 hover:bg-gold/10',
    purple: 'bg-purple/5 hover:bg-purple/10',
  };
  
  const borderColorStyles = {
    blue: 'border-blue/10',
    coral: 'border-coral/10',
    jade: 'border-jade/10',
    gold: 'border-gold/10',
    purple: 'border-purple/10',
  };
  
  const textColorStyles = {
    blue: 'text-blue-dark',
    coral: 'text-coral-dark',
    jade: 'text-jade-dark',
    gold: 'text-gold-dark',
    purple: 'text-purple-dark',
  };

  const handleClick = () => {
    navigate(`/lessons?language=${id}`);
  };

  return (
    <div 
      className={`relative flex flex-col group p-6 rounded-2xl border ${borderColorStyles[color]} ${bgColorStyles[color]} transition-all duration-300 cursor-pointer hover:shadow-lg hover:-translate-y-1 ${className}`}
      onClick={handleClick}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className={`p-3 rounded-xl ${bgColorStyles[color]} ${textColorStyles[color]}`}>
          {icon}
        </div>
        <h3 className={`text-xl font-semibold ${textColorStyles[color]}`}>{title}</h3>
      </div>
      
      <p className="text-slate-600 mb-6">{description}</p>
      
      <div className="mt-auto">
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium text-slate-600">
            {progress} of {totalLessons} lessons complete
          </span>
        </div>
        <ProgressBar 
          progress={progress} 
          total={totalLessons} 
          color={color}
          showPercentage={false}
        />
      </div>
      
      <div className="absolute top-0 right-0 p-3">
        <div className={`px-2 py-1 text-xs font-semibold rounded-full ${bgColorStyles[color]} ${textColorStyles[color]}`}>
          {progress > 0 ? 'In Progress' : 'Start Learning'}
        </div>
      </div>
    </div>
  );
};

export default LanguageCard;
