
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Code, Feather, Coffee, Codepen, Cpu } from 'lucide-react';
import NavigationHeader from '../components/NavigationHeader';
import LandingHero from '../components/LandingHero';
import LanguageCard from '../components/LanguageCard';

const Index: React.FC = () => {
  const navigate = useNavigate();
  
  const languages = [
    {
      id: 'python',
      title: 'Python',
      icon: <Feather size={24} />,
      description: 'A versatile language perfect for beginners, data science, web development and automation.',
      totalLessons: 24,
      progress: 0,
      color: 'blue' as const,
    },
    {
      id: 'java',
      title: 'Java',
      icon: <Coffee size={24} />,
      description: 'A powerful object-oriented language used for Android development, enterprise software, and more.',
      totalLessons: 30,
      progress: 0,
      color: 'coral' as const,
    },
    {
      id: 'kotlin',
      title: 'Kotlin',
      icon: <Cpu size={24} />,
      description: 'Modern language fully interoperable with Java, focused on safety and conciseness.',
      totalLessons: 20,
      progress: 0,
      color: 'jade' as const,
    },
    {
      id: 'react',
      title: 'React',
      icon: <Codepen size={24} />,
      description: 'A JavaScript library for building user interfaces with a component-based architecture.',
      totalLessons: 28,
      progress: 0,
      color: 'purple' as const,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <NavigationHeader />
      
      <main>
        <LandingHero />
        
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
              Choose Your Learning Path
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Select a programming language to begin your learning journey. 
              Each path features interactive lessons, hands-on exercises, and real-world projects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {languages.map((language, index) => (
              <LanguageCard
                key={language.id}
                {...language}
                className="animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              />
            ))}
          </div>
        </section>
        
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
                Why Learn With CodeLingo?
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Our platform combines effective learning methods with modern technology 
                to create the most efficient coding education experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 animate-fade-in" style={{ animationDelay: '100ms' }}>
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue/10 text-blue mb-4">
                  <Code size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Interactive Learning</h3>
                <p className="text-slate-600">
                  Learn by doing with interactive code editors and immediate feedback on your progress.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 animate-fade-in" style={{ animationDelay: '200ms' }}>
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-coral/10 text-coral mb-4">
                  <Feather size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Structured Path</h3>
                <p className="text-slate-600">
                  Follow a carefully designed curriculum that builds your skills from basics to advanced concepts.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 animate-fade-in" style={{ animationDelay: '300ms' }}>
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-jade/10 text-jade mb-4">
                  <Cpu size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Real-world Projects</h3>
                <p className="text-slate-600">
                  Apply your knowledge by building practical projects that showcase your new coding abilities.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="md:w-1/2 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">
                Start Your Coding Journey Today
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Whether you're a complete beginner or looking to expand your skills, 
                our platform provides the guidance, resources, and community support 
                you need to achieve your coding goals.
              </p>
              <button 
                onClick={() => navigate('/lessons')}
                className="button-primary"
              >
                Get Started For Free
              </button>
            </div>
            
            <div className="md:w-1/2 p-6 rounded-2xl bg-slate-50 shadow-sm border border-slate-200 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="aspect-video rounded-lg bg-white shadow-sm border border-slate-200 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-blue/10 text-blue mb-4 animate-pulse-gentle">
                    <Play size={32} className="ml-1" />
                  </div>
                  <h4 className="font-medium text-lg mb-2">See how it works</h4>
                  <p className="text-slate-500 text-sm">Click to watch an introduction to our learning platform</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-slate-900 text-slate-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center mb-6 md:mb-0">
              <Code size={28} className="text-blue-light mr-2" />
              <span className="text-xl font-semibold text-white">CodeLingo</span>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-slate-300 hover:text-white transition-colors">About</a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">Blog</a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">Careers</a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">Support</a>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-slate-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} CodeLingo. All rights reserved.
            </p>
            
            <div className="flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
