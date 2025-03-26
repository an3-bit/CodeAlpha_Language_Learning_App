
import React from 'react';
import { Play, Clock, CheckCircle } from 'lucide-react';

interface LessonCardProps {
  id: string;
  title: string;
  description: string;
  duration: number; // in minutes
  status: 'locked' | 'available' | 'completed';
  onClick: () => void;
}

const LessonCard: React.FC<LessonCardProps> = ({
  id,
  title,
  description,
  duration,
  status,
  onClick,
}) => {
  const statusStyles = {
    locked: 'opacity-60 cursor-not-allowed bg-slate-100',
    available: 'hover:shadow-md hover:border-blue/30 cursor-pointer bg-white',
    completed: 'border-jade/30 hover:shadow-md hover:border-jade/50 cursor-pointer bg-white',
  };
  
  const statusIcons = {
    locked: <div className="p-3 rounded-full bg-slate-200 text-slate-500"><Clock size={20} /></div>,
    available: (
      <div className="p-3 rounded-full bg-blue/10 text-blue hover:bg-blue/20 transition-colors">
        <Play size={20} className="ml-0.5" />
      </div>
    ),
    completed: (
      <div className="p-3 rounded-full bg-jade/10 text-jade">
        <CheckCircle size={20} />
      </div>
    ),
  };

  const handleClick = () => {
    if (status !== 'locked') {
      onClick();
    }
  };

  return (
    <div 
      className={`flex items-start gap-4 p-5 border rounded-xl transition-all duration-300 ${statusStyles[status]}`}
      onClick={handleClick}
      role="button"
      aria-disabled={status === 'locked'}
    >
      {statusIcons[status]}
      
      <div className="flex-1">
        <h4 className="text-lg font-medium mb-1">{title}</h4>
        <p className="text-slate-600 text-sm mb-3">{description}</p>
        
        <div className="flex items-center gap-2">
          <Clock size={14} className="text-slate-400" />
          <span className="text-xs text-slate-500">
            {duration} min{duration !== 1 ? 's' : ''}
          </span>
          
          {status === 'completed' && (
            <span className="ml-2 px-2 py-0.5 text-xs font-medium rounded-full bg-jade/10 text-jade">
              Completed
            </span>
          )}
          
          {status === 'locked' && (
            <span className="ml-2 px-2 py-0.5 text-xs font-medium rounded-full bg-slate-100 text-slate-500">
              Locked
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default LessonCard;
