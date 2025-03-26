
import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { toast } from '@/hooks/use-toast';

interface LessonViewProps {
  lessonId: string;
  moduleId: string;
  onClose: () => void;
  onComplete: (lessonId: string) => void;
  onNext: () => void;
  onPrevious: () => void;
  content: {
    title: string;
    description: string;
    duration: number;
    sections: Array<{
      type: 'text' | 'code' | 'quiz';
      content: string;
      options?: string[];
      answer?: number;
    }>;
  };
}

const LessonView: React.FC<LessonViewProps> = ({ 
  lessonId, 
  moduleId, 
  onClose, 
  onComplete, 
  onNext, 
  onPrevious,
  content 
}) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [progress, setProgress] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [earnedPoints, setEarnedPoints] = useState(0);
  const [confetti, setConfetti] = useState(false);
  
  useEffect(() => {
    // Calculate progress based on current section
    const newProgress = Math.round((currentSection / content.sections.length) * 100);
    setProgress(newProgress);
  }, [currentSection, content.sections.length]);
  
  const handleNextSection = () => {
    if (currentSection < content.sections.length - 1) {
      setCurrentSection(prev => prev + 1);
    } else {
      // Lesson completed
      onComplete(lessonId);
      toast({
        title: "Lesson completed!",
        description: `You earned ${earnedPoints} points`,
      });
      setConfetti(true);
      setTimeout(() => setConfetti(false), 3000);
    }
  };
  
  const handlePreviousSection = () => {
    if (currentSection > 0) {
      setCurrentSection(prev => prev - 1);
    }
  };
  
  const handleQuizAnswer = (sectionIndex: number, answerIndex: number) => {
    const section = content.sections[sectionIndex];
    setUserAnswers({ ...userAnswers, [sectionIndex]: answerIndex });
    
    if (section.type === 'quiz' && section.answer === answerIndex) {
      // Correct answer
      setEarnedPoints(prev => prev + 10);
      toast({
        title: "Correct!",
        description: "Great job! You earned 10 points",
      });
    }
  };
  
  const renderSection = (section: any, index: number) => {
    switch(section.type) {
      case 'text':
        return (
          <div className="py-4">
            <p className="text-slate-700">{section.content}</p>
          </div>
        );
      case 'code':
        return (
          <div className="py-4">
            <pre className="bg-slate-900 text-white p-4 rounded-lg overflow-x-auto">
              <code>{section.content}</code>
            </pre>
          </div>
        );
      case 'quiz':
        return (
          <div className="py-4">
            <p className="text-slate-700 font-medium mb-4">{section.content}</p>
            <div className="space-y-2">
              {section.options?.map((option, optionIndex) => (
                <button
                  key={optionIndex}
                  className={`w-full text-left p-3 rounded-lg border transition-colors ${
                    userAnswers[index] === optionIndex
                      ? userAnswers[index] === section.answer
                        ? 'bg-jade/10 border-jade text-jade'
                        : 'bg-red/10 border-red text-red'
                      : 'border-slate-200 hover:border-blue/30'
                  }`}
                  onClick={() => handleQuizAnswer(index, optionIndex)}
                  disabled={userAnswers[index] !== undefined}
                >
                  {option}
                  {userAnswers[index] === optionIndex && userAnswers[index] === section.answer && (
                    <CheckCircle className="inline ml-2" size={16} />
                  )}
                </button>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  
  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto pt-16">
      {confetti && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          <div className="absolute w-full h-full flex items-center justify-center">
            <div className="absolute animate-fall-1 text-4xl">🎉</div>
            <div className="absolute animate-fall-2 text-4xl">🏆</div>
            <div className="absolute animate-fall-3 text-4xl">⭐</div>
            <div className="absolute animate-fall-4 text-4xl">🎯</div>
            <div className="absolute animate-fall-5 text-4xl">🎓</div>
          </div>
        </div>
      )}
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Lesson Header */}
        <div className="py-6 border-b">
          <button 
            onClick={onClose}
            className="inline-flex items-center text-slate-600 hover:text-blue mb-6 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Lessons
          </button>
          
          <h1 className="text-2xl font-bold mb-2">{content.title}</h1>
          <p className="text-slate-600 mb-4">{content.description}</p>
          
          <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>{content.duration} mins</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Star size={16} />
              <span>{earnedPoints} points earned</span>
            </div>
          </div>
          
          <Progress value={progress} className="h-2" />
        </div>
        
        {/* Lesson Content */}
        <div className="py-8">
          {content.sections.length > 0 && renderSection(content.sections[currentSection], currentSection)}
        </div>
        
        {/* Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t py-4 px-4">
          <div className="max-w-3xl mx-auto flex justify-between">
            {currentSection > 0 ? (
              <Button variant="outline" onClick={handlePreviousSection}>
                <ArrowLeft size={16} className="mr-2" />
                Previous
              </Button>
            ) : (
              <Button variant="outline" onClick={onPrevious}>
                <ArrowLeft size={16} className="mr-2" />
                Previous Module
              </Button>
            )}
            
            {currentSection < content.sections.length - 1 ? (
              <Button onClick={handleNextSection}>
                Next
                <ArrowRight size={16} className="ml-2" />
              </Button>
            ) : (
              <Button onClick={onNext}>
                Next Module
                <ArrowRight size={16} className="ml-2" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonView;
