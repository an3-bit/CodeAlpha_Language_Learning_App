
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Code, ArrowRight } from 'lucide-react';

const LandingHero: React.FC = () => {
  const navigate = useNavigate();

  // Function to scroll to language cards section
  const scrollToLanguageCards = () => {
    const languageSection = document.querySelector('#language-cards-section');
    if (languageSection) {
      languageSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" 
        style={{ 
          backgroundImage: 'url("https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")'
        }}
      ></div>
      
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 to-transparent z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 md:pt-40 md:pb-24 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-blue-dark/80 text-white text-sm font-medium animate-fade-in shadow-md">
            <Code size={16} className="mr-2" />
            Master coding through interactive learning
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white drop-shadow-md animate-fade-in" style={{ animationDelay: '100ms' }}>
            Learn to <span className="bg-gradient-to-r from-blue-light to-white bg-clip-text text-transparent">code</span> with <br />confidence and ease
          </h1>
          
          <p className="text-lg md:text-xl text-white font-medium drop-shadow-md mb-8 md:mb-12 animate-fade-in" style={{ animationDelay: '200ms' }}>
            Interactive lessons, personalized feedback, and a supportive community 
            to help you master programming languages at your own pace.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '300ms' }}>
            <button 
              onClick={() => navigate('/lessons')}
              className="bg-blue-dark hover:bg-blue-light text-white font-medium py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 active:scale-[0.98]"
            >
              Start Learning
              <ArrowRight size={18} />
            </button>
            
            <button 
              onClick={scrollToLanguageCards}
              className="py-3 px-8 rounded-full font-medium text-white bg-white/20 backdrop-blur-sm border border-white/30 transition-all duration-300 hover:bg-white/30 active:scale-[0.98] shadow-lg"
            >
              Explore Languages
            </button>
          </div>
          
          <div className="mt-12 text-sm text-white font-medium drop-shadow-md animate-fade-in" style={{ animationDelay: '400ms' }}>
            Join over 50,000 learners mastering coding skills
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
