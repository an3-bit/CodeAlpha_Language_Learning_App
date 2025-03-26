
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, CheckCircle, Clock, Code, Coffee, Cpu, Codepen } from 'lucide-react';
import NavigationHeader from '../components/NavigationHeader';
import LessonCard from '../components/LessonCard';
import ProgressBar from '../components/ProgressBar';

interface LessonType {
  id: string;
  title: string;
  description: string;
  duration: number;
  status: 'locked' | 'available' | 'completed';
}

interface ModuleType {
  id: string;
  title: string;
  description: string;
  lessons: LessonType[];
}

const Lessons: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [shouldRedirect, setShouldRedirect] = useState(false);
  
  // Parse the language from URL query params
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const language = params.get('language');
    setSelectedLanguage(language);
    
    // Only set redirect flag if there's no language parameter
    if (!language) {
      setShouldRedirect(true);
    }
  }, [location.search]);
  
  // Handle redirect in a separate useEffect
  useEffect(() => {
    if (shouldRedirect) {
      navigate('/');
    }
  }, [shouldRedirect, navigate]);
  
  // Get language specific info
  const getLanguageInfo = () => {
    switch (selectedLanguage) {
      case 'python':
        return {
          title: 'Python',
          color: 'blue' as const,
          description: 'A versatile language perfect for beginners, data science, web development and automation.',
          icon: <Code size={24} />,
          progress: 0,
          totalLessons: 24,
        };
      case 'java':
        return {
          title: 'Java',
          color: 'coral' as const,
          description: 'A powerful object-oriented language used for Android development, enterprise software, and more.',
          icon: <Coffee size={24} />,
          progress: 0,
          totalLessons: 30,
        };
      case 'kotlin':
        return {
          title: 'Kotlin',
          color: 'jade' as const,
          description: 'Modern language fully interoperable with Java, focused on safety and conciseness.',
          icon: <Cpu size={24} />,
          progress: 0,
          totalLessons: 20,
        };
      case 'react':
        return {
          title: 'React',
          color: 'purple' as const,
          description: 'A JavaScript library for building user interfaces with a component-based architecture.',
          icon: <Codepen size={24} />,
          progress: 0,
          totalLessons: 28,
        };
      default:
        return {
          title: 'Select a Language',
          color: 'blue' as const,
          description: 'Choose a programming language to begin your learning journey.',
          icon: <Code size={24} />,
          progress: 0,
          totalLessons: 0,
        };
    }
  };
  
  const languageInfo = getLanguageInfo();
  
  // Mock modules and lessons for demonstration
  const modules: ModuleType[] = [
    {
      id: 'module-1',
      title: 'Getting Started',
      description: 'Learn the basics and set up your development environment',
      lessons: [
        {
          id: 'lesson-1-1',
          title: 'Introduction & Setup',
          description: 'Overview of the language and setting up your development environment',
          duration: 15,
          status: 'available',
        },
        {
          id: 'lesson-1-2',
          title: 'Basic Syntax',
          description: 'Learn the fundamental syntax and structure of the language',
          duration: 20,
          status: 'locked',
        },
        {
          id: 'lesson-1-3',
          title: 'Variables & Data Types',
          description: 'Working with variables and understanding different data types',
          duration: 25,
          status: 'locked',
        },
      ],
    },
    {
      id: 'module-2',
      title: 'Control Flow',
      description: 'Master conditional statements and loops',
      lessons: [
        {
          id: 'lesson-2-1',
          title: 'Conditional Statements',
          description: 'Using if, else if, and else to control program flow',
          duration: 20,
          status: 'locked',
        },
        {
          id: 'lesson-2-2',
          title: 'Loops',
          description: 'Working with for loops, while loops, and iterations',
          duration: 25,
          status: 'locked',
        },
        {
          id: 'lesson-2-3',
          title: 'Switch Statements',
          description: 'Using switch/case for efficient conditional branching',
          duration: 15,
          status: 'locked',
        },
      ],
    },
    {
      id: 'module-3',
      title: 'Functions & Methods',
      description: 'Create reusable code blocks with functions',
      lessons: [
        {
          id: 'lesson-3-1',
          title: 'Function Basics',
          description: 'Creating and calling functions in your code',
          duration: 20,
          status: 'locked',
        },
        {
          id: 'lesson-3-2',
          title: 'Parameters & Return Values',
          description: 'Passing data to functions and returning results',
          duration: 25,
          status: 'locked',
        },
        {
          id: 'lesson-3-3',
          title: 'Scope & Closures',
          description: 'Understanding variable scope and closures in functions',
          duration: 30,
          status: 'locked',
        },
      ],
    },
  ];
  
  // Handle lesson click
  const handleLessonClick = (lessonId: string) => {
    console.log(`Opening lesson: ${lessonId}`);
    // In a real application, we would navigate to the lesson page
    // navigate(`/lesson/${lessonId}`);
  };
  
  // If still loading or waiting for redirect, show a loading state
  if (shouldRedirect) {
    return null;
  }

  const completedLessons = modules.flatMap(module => 
    module.lessons.filter(lesson => lesson.status === 'completed')
  ).length;
  
  const totalLessons = modules.flatMap(module => module.lessons).length;

  return (
    <div className="min-h-screen bg-white">
      <NavigationHeader />
      
      <main className="pt-20 pb-24 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Language Header */}
          <div className="py-8 mb-8 border-b">
            <button 
              onClick={() => navigate('/')}
              className="inline-flex items-center text-slate-600 hover:text-blue mb-6 transition-colors"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Languages
            </button>
            
            <div className="flex items-start gap-6">
              <div className={`p-4 rounded-xl bg-${languageInfo.color}/10 text-${languageInfo.color}`}>
                {languageInfo.icon}
              </div>
              
              <div className="flex-1">
                <h1 className="text-3xl font-bold mb-2">{languageInfo.title}</h1>
                <p className="text-slate-600 mb-4">{languageInfo.description}</p>
                
                <div className="flex items-center gap-6 text-sm text-slate-500">
                  <div className="flex items-center gap-2">
                    <BookOpen size={16} />
                    <span>{totalLessons} Lessons</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>Approx. 15 hours</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <CheckCircle size={16} />
                    <span>{completedLessons} Completed</span>
                  </div>
                </div>
              </div>
              
              <div className="hidden md:block">
                <button className="button-primary">
                  Continue Learning
                </button>
              </div>
            </div>
            
            <div className="mt-6">
              <ProgressBar 
                progress={completedLessons} 
                total={totalLessons} 
                color={languageInfo.color}
                size="lg"
                label="Course Progress"
              />
            </div>
          </div>
          
          {/* Modules & Lessons */}
          <div className="grid grid-cols-1 gap-12">
            {modules.map((module, moduleIndex) => (
              <div key={module.id} className="animate-fade-in" style={{ animationDelay: `${moduleIndex * 100}ms` }}>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2">
                    Module {moduleIndex + 1}: {module.title}
                  </h2>
                  <p className="text-slate-600">{module.description}</p>
                </div>
                
                <div className="grid grid-cols-1 gap-4">
                  {module.lessons.map((lesson, lessonIndex) => (
                    <LessonCard 
                      key={lesson.id}
                      {...lesson}
                      onClick={() => handleLessonClick(lesson.id)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <footer className="bg-slate-50 py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-slate-600">
              Need help with your lessons? <a href="#" className="text-blue font-medium">Contact Support</a>
            </p>
          </div>
          
          <div className="flex gap-4">
            <button className="text-slate-600 hover:text-blue transition-colors">
              Previous Module
            </button>
            <button className="text-blue font-medium hover:text-blue-dark transition-colors">
              Next Module
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Lessons;
