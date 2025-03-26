
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Code, ArrowRight } from 'lucide-react';

const LandingHero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-20 -left-60 w-[600px] h-[600px] rounded-full bg-blue/5 blur-3xl" aria-hidden="true" />
      <div className="absolute top-40 -right-60 w-[600px] h-[600px] rounded-full bg-coral/5 blur-3xl" aria-hidden="true" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 md:pt-40 md:pb-24 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-blue/10 text-blue text-sm font-medium animate-fade-in">
            <Code size={16} className="mr-2" />
            Master coding through interactive learning
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-slate-900 animate-fade-in" style={{ animationDelay: '100ms' }}>
            Learn to <span className="text-gradient">code</span> with <br />confidence and ease
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-8 md:mb-12 animate-fade-in" style={{ animationDelay: '200ms' }}>
            Interactive lessons, personalized feedback, and a supportive community 
            to help you master programming languages at your own pace.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '300ms' }}>
            <button 
              onClick={() => navigate('/lessons')}
              className="button-primary flex items-center justify-center gap-2"
            >
              Start Learning
              <ArrowRight size={18} />
            </button>
            
            <button 
              onClick={() => {/* Scroll to language cards */}}
              className="py-3 px-8 rounded-full font-medium text-slate-700 border border-slate-300 transition-all duration-300 hover:border-slate-400 hover:bg-slate-50 active:scale-[0.98]"
            >
              Explore Languages
            </button>
          </div>
          
          <div className="mt-12 text-sm text-slate-500 animate-fade-in" style={{ animationDelay: '400ms' }}>
            Join over 50,000 learners mastering coding skills
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
