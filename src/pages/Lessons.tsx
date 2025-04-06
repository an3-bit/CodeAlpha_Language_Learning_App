import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, BookOpen, CheckCircle, Clock, Code, Coffee, Cpu, Codepen } from 'lucide-react';
import NavigationHeader from '../components/NavigationHeader';
import LessonCard from '../components/LessonCard';
import ProgressBar from '../components/ProgressBar';
import LessonView from '../components/LessonView';
import { 
  getLessonModules, 
  getLessonContent, 
  getNextLesson, 
  getPreviousLesson, 
  completeLesson, 
  getUserProgress, 
  ModuleType 
} from '../services/lessonService';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

const Lessons: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [modules, setModules] = useState<ModuleType[]>([]);
  const [activeLessonId, setActiveLessonId] = useState<string | null>(null);
  const [activeModuleId, setActiveModuleId] = useState<string | null>(null);
  const [lessonContent, setLessonContent] = useState<any>(null);
  
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const language = params.get('language');
    setSelectedLanguage(language);
    
    if (!language) {
      const defaultLanguages = ['python', 'java', 'kotlin', 'react'];
      const pythonModules = getLessonModules('python');
      setModules(pythonModules);
    } else {
      const languageModules = getLessonModules(language);
      setModules(languageModules);
    }
  }, [location.search]);
  
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
  
  const handleLessonClick = (lessonId: string, moduleId: string) => {
    setActiveLessonId(lessonId);
    setActiveModuleId(moduleId);
    const content = getLessonContent(lessonId, selectedLanguage || undefined);
    setLessonContent(content);
  };
  
  const handleLessonComplete = (lessonId: string) => {
    completeLesson(lessonId);
    if (selectedLanguage) {
      const updatedModules = getLessonModules(selectedLanguage);
      setModules(updatedModules);
    }
    toast({
      title: "Lesson completed!",
      description: "Great job! You're making progress on your learning journey.",
    });
  };
  
  const handleNextLesson = () => {
    if (selectedLanguage && activeLessonId && activeModuleId) {
      const nextLesson = getNextLesson(selectedLanguage, activeModuleId, activeLessonId);
      if (nextLesson) {
        setActiveLessonId(nextLesson.lessonId);
        setActiveModuleId(nextLesson.moduleId);
        setLessonContent(getLessonContent(nextLesson.lessonId, selectedLanguage));
      } else {
        setActiveLessonId(null);
        setActiveModuleId(null);
        setLessonContent(null);
        toast({
          title: "Course completed!",
          description: "Congratulations! You've completed all lessons for this language.",
        });
      }
    }
  };
  
  const handlePreviousLesson = () => {
    if (selectedLanguage && activeLessonId && activeModuleId) {
      const prevLesson = getPreviousLesson(selectedLanguage, activeModuleId, activeLessonId);
      if (prevLesson) {
        setActiveLessonId(prevLesson.lessonId);
        setActiveModuleId(prevLesson.moduleId);
        setLessonContent(getLessonContent(prevLesson.lessonId, selectedLanguage));
      } else {
        toast({
          title: "First lesson",
          description: "You're at the beginning of the course.",
        });
      }
    }
  };
  
  const handleCloseLessonView = () => {
    setActiveLessonId(null);
    setActiveModuleId(null);
    setLessonContent(null);
  };
  
  const handleContinueLearning = () => {
    for (const module of modules) {
      for (const lesson of module.lessons) {
        if (lesson.status === 'available') {
          handleLessonClick(lesson.id, module.id);
          return;
        }
      }
    }
    toast({
      title: "No available lessons",
      description: "All lessons are either completed or locked.",
    });
  };
  
  const handlePreviousModule = () => {
    if (activeModuleId && selectedLanguage) {
      const currentModuleIndex = modules.findIndex(m => m.id === activeModuleId);
      if (currentModuleIndex > 0) {
        const prevModule = modules[currentModuleIndex - 1];
        const lastLesson = prevModule.lessons[prevModule.lessons.length - 1];
        handleLessonClick(lastLesson.id, prevModule.id);
      } else {
        toast({
          title: "First module",
          description: "You're at the beginning of the course.",
        });
      }
    }
  };
  
  const handleNextModule = () => {
    if (activeModuleId && selectedLanguage) {
      const currentModuleIndex = modules.findIndex(m => m.id === activeModuleId);
      if (currentModuleIndex < modules.length - 1) {
        const nextModule = modules[currentModuleIndex + 1];
        const firstLesson = nextModule.lessons[0];
        if (firstLesson.status !== 'locked') {
          handleLessonClick(firstLesson.id, nextModule.id);
        } else {
          toast({
            title: "Module locked",
            description: "Complete previous lessons to unlock this module.",
          });
        }
      } else {
        toast({
          title: "Last module",
          description: "You've reached the end of the course!",
        });
      }
    }
  };
  
  const languageInfo = getLanguageInfo();
  
  const completedLessons = modules.flatMap(module => 
    module.lessons.filter(lesson => lesson.status === 'completed')
  ).length;
  
  const totalLessons = modules.flatMap(module => module.lessons).length;
  const userProgress = getUserProgress();

  const renderLanguageSelection = () => {
    const languages = [
      { id: 'python', name: 'Python', icon: <Code size={24} />, color: 'blue' },
      { id: 'java', name: 'Java', icon: <Coffee size={24} />, color: 'coral' },
      { id: 'kotlin', name: 'Kotlin', icon: <Cpu size={24} />, color: 'jade' },
      { id: 'react', name: 'React', icon: <Codepen size={24} />, color: 'purple' }
    ];

    return (
      <div className="py-12">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Select a language to start learning
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {languages.map(language => (
            <div 
              key={language.id}
              onClick={() => navigate(`/lessons?language=${language.id}`)}
              className={`p-6 rounded-lg bg-white shadow-md hover:shadow-lg cursor-pointer border-2 border-${language.color}/20 hover:border-${language.color} transition-all`}
            >
              <div className={`p-3 rounded-full bg-${language.color}/10 inline-block mb-4`}>
                {language.icon}
              </div>
              <h3 className="text-lg font-bold">{language.name}</h3>
              <p className="text-sm text-slate-500">Click to view lessons</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <NavigationHeader />
      
      {activeLessonId && lessonContent ? (
        <LessonView 
          lessonId={activeLessonId}
          moduleId={activeModuleId || ''}
          onClose={handleCloseLessonView}
          onComplete={handleLessonComplete}
          onNext={handleNextModule}
          onPrevious={handlePreviousModule}
          content={lessonContent}
        />
      ) : (
        <main className="pt-20 pb-24 animate-fade-in">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {selectedLanguage ? (
              <>
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
                      <Button onClick={handleContinueLearning}>
                        Continue Learning
                      </Button>
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
                            onClick={() => handleLessonClick(lesson.id, module.id)}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              renderLanguageSelection()
            )}
          </div>
        </main>
      )}
      
      <footer className="bg-slate-50 py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-slate-600">
              Need help with your lessons? <a href="#" className="text-blue font-medium">Contact Support</a>
            </p>
          </div>
          
          <div className="flex gap-4">
            <Button 
              variant="outline" 
              onClick={handlePreviousModule}
              disabled={!modules.length}
              className="text-slate-600 hover:text-blue transition-colors"
            >
              Previous Module
            </Button>
            <Button 
              onClick={handleNextModule}
              disabled={!modules.length}
              className="text-blue font-medium hover:text-blue-dark transition-colors"
            >
              Next Module
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Lessons;
