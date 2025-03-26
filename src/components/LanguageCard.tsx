
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProgressBar from './ProgressBar';

interface LanguageCardProps {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  totalLessons: number;
  progress: number;
  color: 'blue' | 'coral' | 'jade' | 'purple';
  className?: string;
  animationDelay?: string;
  imageSrc?: string;
}

const LanguageCard: React.FC<LanguageCardProps> = ({
  id,
  title,
  icon,
  description,
  totalLessons,
  progress,
  color,
  className = '',
  animationDelay,
  imageSrc,
}) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/lessons?language=${id}`);
  };

  return (
    <div 
      className={`relative group border rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:border-${color}/30 transition-all bg-white ${className}`} 
      style={{ animationDelay }}
      onClick={handleClick}
      role="button"
      tabIndex={0}
    >
      {/* Image Header */}
      {imageSrc && (
        <div className="w-full h-40 overflow-hidden">
          <img 
            src={imageSrc} 
            alt={`${title} programming`} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className={`absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-${color}/30 to-transparent opacity-60`}></div>
        </div>
      )}
      
      <div className="p-6">
        {!imageSrc && (
          <div className={`w-12 h-12 flex items-center justify-center rounded-lg mb-4 bg-${color}/10 text-${color}`}>
            {icon}
          </div>
        )}
        
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-slate-600 text-sm mb-6">{description}</p>
        
        <ProgressBar 
          progress={progress} 
          total={totalLessons} 
          label={`${progress}/${totalLessons} lessons completed`}
          color={color}
          size="sm"
          showPercentage={false}
        />
      </div>
      
      <div className={`absolute bottom-0 right-0 p-4 bg-gradient-to-l from-white via-white to-transparent w-1/2 flex justify-end items-center`}>
        <div className={`w-8 h-8 flex items-center justify-center rounded-full bg-${color}/10 text-${color} group-hover:bg-${color} group-hover:text-white transition-colors`}>
          <ArrowRight size={16} />
        </div>
      </div>
    </div>
  );
};

export default LanguageCard;
