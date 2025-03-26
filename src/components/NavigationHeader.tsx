
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Code, BookOpen, Award, Settings } from 'lucide-react';

const NavigationHeader: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-xl font-semibold text-blue"
              aria-label="Home"
            >
              <Code size={28} className="text-blue" />
              <span>CodeLingo</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`flex items-center gap-2 py-2 text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'text-blue' 
                  : 'text-slate-600 hover:text-blue'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/lessons" 
              className={`flex items-center gap-2 py-2 text-sm font-medium transition-colors ${
                isActive('/lessons') 
                  ? 'text-blue' 
                  : 'text-slate-600 hover:text-blue'
              }`}
            >
              <BookOpen size={18} />
              Lessons
            </Link>
            <Link 
              to="/achievements" 
              className={`flex items-center gap-2 py-2 text-sm font-medium transition-colors ${
                isActive('/achievements') 
                  ? 'text-blue' 
                  : 'text-slate-600 hover:text-blue'
              }`}
            >
              <Award size={18} />
              Achievements
            </Link>
          </nav>
          
          <div className="flex items-center">
            <button 
              className="p-2 rounded-full text-slate-500 hover:text-blue hover:bg-slate-100 transition-colors"
              aria-label="Settings"
            >
              <Settings size={20} />
            </button>
            <Link 
              to="/login" 
              className="ml-4 px-4 py-2 rounded-full text-sm font-medium text-blue border border-blue/30 hover:bg-blue/5 transition-colors"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavigationHeader;
