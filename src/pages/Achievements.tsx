
import React from 'react';
import { Trophy, Star, Clock, Check, Award, Medal, Zap, Gift, LucideIcon } from 'lucide-react';
import NavigationHeader from '../components/NavigationHeader';

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  progress: number;
  maxProgress: number;
  unlocked: boolean;
  date?: string;
  color: string;
}

const Achievements: React.FC = () => {
  const achievementGroups = [
    {
      title: "Learning Milestones",
      achievements: [
        {
          id: "first-lesson",
          title: "First Step",
          description: "Complete your first lesson",
          icon: <Star size={24} />,
          progress: 1,
          maxProgress: 1,
          unlocked: true,
          date: "Mar 15, 2023",
          color: "blue"
        },
        {
          id: "ten-lessons",
          title: "Dedicated Learner",
          description: "Complete 10 lessons",
          icon: <Trophy size={24} />,
          progress: 4,
          maxProgress: 10,
          unlocked: false,
          color: "blue"
        },
        {
          id: "fifty-lessons",
          title: "Coding Enthusiast",
          description: "Complete 50 lessons",
          icon: <Medal size={24} />,
          progress: 4,
          maxProgress: 50,
          unlocked: false,
          color: "blue"
        }
      ]
    },
    {
      title: "Language Mastery",
      achievements: [
        {
          id: "python-basics",
          title: "Python Foundations",
          description: "Complete all Python basics lessons",
          icon: <Award size={24} />,
          progress: 2,
          maxProgress: 8,
          unlocked: false,
          color: "coral"
        },
        {
          id: "java-master",
          title: "Java Guru",
          description: "Complete all Java advanced lessons",
          icon: <Trophy size={24} />,
          progress: 0,
          maxProgress: 12,
          unlocked: false,
          color: "coral"
        },
        {
          id: "react-wizard",
          title: "React Wizard",
          description: "Build 3 projects with React",
          icon: <Zap size={24} />,
          progress: 1,
          maxProgress: 3,
          unlocked: false,
          color: "coral"
        }
      ]
    },
    {
      title: "Special Achievements",
      achievements: [
        {
          id: "streak-7",
          title: "Consistency King",
          description: "Maintain a 7-day learning streak",
          icon: <Clock size={24} />,
          progress: 3,
          maxProgress: 7,
          unlocked: false,
          color: "purple"
        },
        {
          id: "perfect-quiz",
          title: "Perfect Score",
          description: "Achieve 100% on any quiz",
          icon: <Check size={24} />,
          progress: 1,
          maxProgress: 1,
          unlocked: true,
          date: "Apr 2, 2023",
          color: "purple"
        },
        {
          id: "community-helper",
          title: "Community Hero",
          description: "Help 5 other learners in the forum",
          icon: <Gift size={24} />,
          progress: 2,
          maxProgress: 5,
          unlocked: false,
          color: "purple"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <NavigationHeader />
      
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4 text-slate-900">Your Achievements</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Track your progress and earn badges as you master new programming skills. 
            Unlock achievements to showcase your coding journey.
          </p>
        </div>
        
        {/* Stats banner */}
        <div className="mb-16 p-6 rounded-2xl bg-white shadow-sm border border-slate-200 animate-fade-in">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center p-4 rounded-xl bg-blue/5">
              <div className="w-12 h-12 bg-blue/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <Trophy className="text-blue" size={24} />
              </div>
              <p className="text-xl font-bold text-blue">2</p>
              <p className="text-slate-600 text-sm">Achievements Unlocked</p>
            </div>
            
            <div className="text-center p-4 rounded-xl bg-coral/5">
              <div className="w-12 h-12 bg-coral/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <Star className="text-coral" size={24} />
              </div>
              <p className="text-xl font-bold text-coral">125</p>
              <p className="text-slate-600 text-sm">Total Points Earned</p>
            </div>
            
            <div className="text-center p-4 rounded-xl bg-purple/5">
              <div className="w-12 h-12 bg-purple/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <Medal className="text-purple" size={24} />
              </div>
              <p className="text-xl font-bold text-purple">7</p>
              <p className="text-slate-600 text-sm">Achievements In Progress</p>
            </div>
          </div>
        </div>
        
        {/* Achievement sections */}
        <div className="space-y-16">
          {achievementGroups.map((group, groupIndex) => (
            <section key={group.title} className="animate-fade-in" style={{ animationDelay: `${groupIndex * 100}ms` }}>
              <h2 className="text-2xl font-bold mb-6 text-slate-900">{group.title}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.achievements.map((achievement, index) => (
                  <div 
                    key={achievement.id}
                    className={`p-6 rounded-xl border ${achievement.unlocked ? `border-${achievement.color}/30 bg-white` : 'border-slate-200 bg-white/50'} shadow-sm transition-all duration-300 hover:shadow`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg ${achievement.unlocked ? `bg-${achievement.color}/10 text-${achievement.color}` : 'bg-slate-100 text-slate-400'}`}>
                        {achievement.icon}
                      </div>
                      
                      <div className="flex-1">
                        <h3 className={`font-semibold mb-1 ${achievement.unlocked ? `text-${achievement.color}` : 'text-slate-700'}`}>
                          {achievement.title}
                        </h3>
                        <p className="text-sm text-slate-600 mb-3">{achievement.description}</p>
                        
                        {achievement.unlocked ? (
                          <div className="flex items-center text-xs text-green-600 font-medium">
                            <Check size={14} className="mr-1" />
                            Unlocked {achievement.date && `on ${achievement.date}`}
                          </div>
                        ) : (
                          <div className="space-y-2">
                            <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                              <div 
                                className={`h-full bg-${achievement.color} rounded-full`} 
                                style={{ width: `${(achievement.progress / achievement.maxProgress) * 100}%` }}
                              ></div>
                            </div>
                            <p className="text-xs text-slate-500">
                              {achievement.progress} / {achievement.maxProgress} completed
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      
      <footer className="bg-white border-t border-slate-200 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-600">
            Keep learning to unlock more achievements and track your progress!
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Achievements;
