
import { toast } from '@/hooks/use-toast';

export interface LessonType {
  id: string;
  title: string;
  description: string;
  duration: number;
  status: 'locked' | 'available' | 'completed';
}

export interface ModuleType {
  id: string;
  title: string;
  description: string;
  lessons: LessonType[];
}

export interface LessonContentType {
  title: string;
  description: string;
  duration: number;
  sections: Array<{
    type: 'text' | 'code' | 'quiz';
    content: string;
    options?: string[];
    answer?: number;
  }>;
}

// Mock data for different programming languages
const languageModules: Record<string, ModuleType[]> = {
  python: [
    {
      id: 'module-1',
      title: 'Getting Started with Python',
      description: 'Learn the basics and set up your development environment',
      lessons: [
        {
          id: 'lesson-1-1',
          title: 'Introduction to Python',
          description: 'Overview of Python and setting up your development environment',
          duration: 15,
          status: 'available',
        },
        {
          id: 'lesson-1-2',
          title: 'Python Syntax Fundamentals',
          description: 'Learn the fundamental syntax and structure of Python',
          duration: 20,
          status: 'locked',
        },
        {
          id: 'lesson-1-3',
          title: 'Variables & Data Types',
          description: 'Working with variables and understanding different data types in Python',
          duration: 25,
          status: 'locked',
        },
      ],
    },
    {
      id: 'module-2',
      title: 'Control Flow in Python',
      description: 'Master conditional statements and loops',
      lessons: [
        {
          id: 'lesson-2-1',
          title: 'Conditional Statements',
          description: 'Using if, elif, and else to control program flow',
          duration: 20,
          status: 'locked',
        },
        {
          id: 'lesson-2-2',
          title: 'Python Loops',
          description: 'Working with for loops, while loops, and iterations',
          duration: 25,
          status: 'locked',
        },
        {
          id: 'lesson-2-3',
          title: 'Loop Control Statements',
          description: 'Using break, continue, and pass in Python loops',
          duration: 15,
          status: 'locked',
        },
      ],
    },
    {
      id: 'module-3',
      title: 'Functions in Python',
      description: 'Create reusable code blocks with Python functions',
      lessons: [
        {
          id: 'lesson-3-1',
          title: 'Function Basics',
          description: 'Creating and calling functions in Python',
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
          title: 'Lambda Functions',
          description: 'Writing concise, anonymous functions in Python',
          duration: 30,
          status: 'locked',
        },
      ],
    },
  ],
  java: [
    {
      id: 'module-1',
      title: 'Getting Started with Java',
      description: 'Learn the basics and set up your development environment',
      lessons: [
        {
          id: 'lesson-1-1',
          title: 'Introduction to Java',
          description: 'Overview of Java and setting up your development environment',
          duration: 15,
          status: 'available',
        },
        {
          id: 'lesson-1-2',
          title: 'Java Syntax Basics',
          description: 'Learn the fundamental syntax and structure of Java',
          duration: 20,
          status: 'locked',
        },
        {
          id: 'lesson-1-3',
          title: 'Variables & Data Types',
          description: 'Working with variables and understanding different data types in Java',
          duration: 25,
          status: 'locked',
        },
      ],
    },
    {
      id: 'module-2',
      title: 'Control Flow in Java',
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
          title: 'Java Loops',
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
      title: 'Object-Oriented Programming',
      description: 'Learn the core principles of OOP in Java',
      lessons: [
        {
          id: 'lesson-3-1',
          title: 'Classes and Objects',
          description: 'Creating and using classes and objects in Java',
          duration: 20,
          status: 'locked',
        },
        {
          id: 'lesson-3-2',
          title: 'Inheritance',
          description: 'Understanding inheritance in Java',
          duration: 25,
          status: 'locked',
        },
        {
          id: 'lesson-3-3',
          title: 'Polymorphism',
          description: 'Implementing polymorphism in Java',
          duration: 30,
          status: 'locked',
        },
      ],
    },
  ],
  kotlin: [
    {
      id: 'module-1',
      title: 'Getting Started with Kotlin',
      description: 'Learn the basics and set up your development environment',
      lessons: [
        {
          id: 'lesson-1-1',
          title: 'Introduction to Kotlin',
          description: 'Overview of Kotlin and setting up your development environment',
          duration: 15,
          status: 'available',
        },
        {
          id: 'lesson-1-2',
          title: 'Kotlin Syntax Basics',
          description: 'Learn the fundamental syntax and structure of Kotlin',
          duration: 20,
          status: 'locked',
        },
        {
          id: 'lesson-1-3',
          title: 'Variables & Data Types',
          description: 'Working with variables and understanding different data types in Kotlin',
          duration: 25,
          status: 'locked',
        },
      ],
    },
    {
      id: 'module-2',
      title: 'Control Flow in Kotlin',
      description: 'Master conditional statements and loops',
      lessons: [
        {
          id: 'lesson-2-1',
          title: 'Conditional Expressions',
          description: 'Using if/else and when expressions in Kotlin',
          duration: 20,
          status: 'locked',
        },
        {
          id: 'lesson-2-2',
          title: 'Kotlin Loops',
          description: 'Working with for loops, while loops, and ranges',
          duration: 25,
          status: 'locked',
        },
        {
          id: 'lesson-2-3',
          title: 'When Expressions',
          description: 'Advanced usage of when expressions in Kotlin',
          duration: 15,
          status: 'locked',
        },
      ],
    },
    {
      id: 'module-3',
      title: 'Functions in Kotlin',
      description: 'Create reusable code blocks with Kotlin functions',
      lessons: [
        {
          id: 'lesson-3-1',
          title: 'Function Basics',
          description: 'Creating and calling functions in Kotlin',
          duration: 20,
          status: 'locked',
        },
        {
          id: 'lesson-3-2',
          title: 'Higher-Order Functions',
          description: 'Working with functions that take functions as parameters',
          duration: 25,
          status: 'locked',
        },
        {
          id: 'lesson-3-3',
          title: 'Extension Functions',
          description: 'Extending classes with new functionality',
          duration: 30,
          status: 'locked',
        },
      ],
    },
  ],
  react: [
    {
      id: 'module-1',
      title: 'Getting Started with React',
      description: 'Learn the basics and set up your development environment',
      lessons: [
        {
          id: 'lesson-1-1',
          title: 'Introduction to React',
          description: 'Overview of React and setting up your development environment',
          duration: 15,
          status: 'available',
        },
        {
          id: 'lesson-1-2',
          title: 'JSX Syntax',
          description: 'Learn the fundamental JSX syntax and structure',
          duration: 20,
          status: 'locked',
        },
        {
          id: 'lesson-1-3',
          title: 'Components & Props',
          description: 'Working with components and props in React',
          duration: 25,
          status: 'locked',
        },
      ],
    },
    {
      id: 'module-2',
      title: 'State Management',
      description: 'Master state management in React applications',
      lessons: [
        {
          id: 'lesson-2-1',
          title: 'useState Hook',
          description: 'Using the useState hook for local state management',
          duration: 20,
          status: 'locked',
        },
        {
          id: 'lesson-2-2',
          title: 'useEffect Hook',
          description: 'Working with side effects in React components',
          duration: 25,
          status: 'locked',
        },
        {
          id: 'lesson-2-3',
          title: 'Context API',
          description: 'Sharing state between components with Context',
          duration: 15,
          status: 'locked',
        },
      ],
    },
    {
      id: 'module-3',
      title: 'React Hooks',
      description: 'Learn how to use other React hooks',
      lessons: [
        {
          id: 'lesson-3-1',
          title: 'useRef Hook',
          description: 'Using refs to access DOM elements',
          duration: 20,
          status: 'locked',
        },
        {
          id: 'lesson-3-2',
          title: 'useMemo Hook',
          description: 'Optimizing performance with memoization',
          duration: 25,
          status: 'locked',
        },
        {
          id: 'lesson-3-3',
          title: 'Custom Hooks',
          description: 'Creating and using custom hooks',
          duration: 30,
          status: 'locked',
        },
      ],
    },
  ],
};

// AI-generated detailed lesson content
const lessonContents: Record<string, LessonContentType> = {
  'lesson-1-1': {
    title: 'Introduction to Python',
    description: 'Overview of Python and setting up your development environment',
    duration: 15,
    sections: [
      {
        type: 'text',
        content: 'Welcome to Python! Python is a high-level, interpreted programming language known for its readability and versatility. It\'s widely used in data science, web development, automation, and more. In this lesson, we\'ll get you set up with Python and introduce you to the basics.'
      },
      {
        type: 'text',
        content: 'Python was created by Guido van Rossum and first released in 1991. Its design philosophy emphasizes code readability with its notable use of significant whitespace (indentation). Python is dynamically typed and garbage-collected, supporting multiple programming paradigms including procedural, object-oriented, and functional programming.'
      },
      {
        type: 'code',
        content: '# Your first Python program\nprint("Hello, World!")\n\n# This is a comment\nname = "Python Learner"\nprint(f"Welcome, {name}!")'
      },
      {
        type: 'text',
        content: 'To run Python code, you need to have Python installed on your computer. Let\'s go through the installation process and set up a proper development environment.'
      },
      {
        type: 'quiz',
        content: 'What is Python primarily known for?',
        options: [
          'Its complex syntax that enforces proper programming',
          'Its readable syntax and versatility across different domains',
          'Being a compiled language with maximum performance',
          'Being exclusively used for web development'
        ],
        answer: 1
      }
    ]
  },
  // Add content for other lessons similarly
  'lesson-1-2': {
    title: 'Python Syntax Fundamentals',
    description: 'Learn the fundamental syntax and structure of Python',
    duration: 20,
    sections: [
      {
        type: 'text',
        content: 'Python syntax is designed to be readable and straightforward. Unlike many other programming languages, Python uses indentation to define code blocks instead of curly braces or keywords. This enforces a clean and consistent coding style.'
      },
      {
        type: 'code',
        content: '# Variables and assignment\nname = "Python Learner"\nage = 25\nis_programmer = True\n\n# Indentation for code blocks\nif age > 18:\n    print("You are an adult.")\n    if is_programmer:\n        print("You are a programmer too!")\nelse:\n    print("You are a minor.")'
      },
      {
        type: 'text',
        content: 'Python statements typically end with a newline, not a semicolon like in many other languages. You can use a backslash (\\) to continue a statement over multiple lines, or use parentheses, brackets, or braces to create multi-line statements.'
      },
      {
        type: 'quiz',
        content: 'In Python, how are code blocks defined?',
        options: [
          'Using curly braces {}',
          'Using keywords like "begin" and "end"',
          'Using indentation (whitespace)',
          'Using semicolons at the end of each line'
        ],
        answer: 2
      }
    ]
  },
  'lesson-2-1': {
    title: 'Conditional Statements in Python',
    description: 'Using if, elif, and else to control program flow',
    duration: 20,
    sections: [
      {
        type: 'text',
        content: 'Conditional statements in Python allow you to execute different blocks of code depending on whether certain conditions are met. The basic structure uses "if", "elif" (else if), and "else" keywords.'
      },
      {
        type: 'code',
        content: '# Basic if statement\nage = 25\n\nif age >= 18:\n    print("You are an adult.")\nelse:\n    print("You are a minor.")\n\n# Multiple conditions with elif\nscore = 85\n\nif score >= 90:\n    grade = "A"\nelif score >= 80:\n    grade = "B"\nelif score >= 70:\n    grade = "C"\nelif score >= 60:\n    grade = "D"\nelse:\n    grade = "F"\n\nprint(f"Your grade is {grade}")'
      },
      {
        type: 'text',
        content: 'You can also use logical operators like "and", "or", and "not" to combine or negate conditions. These allow you to create more complex conditional expressions.'
      },
      {
        type: 'code',
        content: '# Using logical operators\nis_weekend = True\nis_sunny = False\n\nif is_weekend and is_sunny:\n    print("Let\'s go to the beach!")\nelif is_weekend and not is_sunny:\n    print("Let\'s watch a movie at home.")\nelif not is_weekend and is_sunny:\n    print("Let\'s go for a quick walk after work.")\nelse:\n    print("Let\'s just focus on work today.")'
      },
      {
        type: 'quiz',
        content: 'What will the following code print?\n\nx = 5\ny = 10\nif x > y:\n    print("x is greater")\nelif x == y:\n    print("x and y are equal")\nelse:\n    print("y is greater")',
        options: [
          'x is greater',
          'x and y are equal',
          'y is greater',
          'Nothing, it will cause an error'
        ],
        answer: 2
      }
    ]
  }
};

let userProgress = {
  completedLessons: [] as string[],
  currentLesson: '',
  points: 0
};

export const getLessonModules = (language: string): ModuleType[] => {
  return languageModules[language] || [];
};

export const getLessonContent = (lessonId: string): LessonContentType => {
  const content = lessonContents[lessonId];
  if (!content) {
    // Generate a placeholder content if specific content is not available
    return {
      title: "Lesson Content",
      description: "This lesson content is being generated...",
      duration: 15,
      sections: [
        {
          type: 'text',
          content: 'This is a placeholder for lesson content that will be filled with detailed information in the future. Each lesson will include explanations, code examples, and interactive quizzes to help you learn and practice.'
        },
        {
          type: 'code',
          content: '// Example code will be shown here\nconsole.log("Learning is fun!");'
        },
        {
          type: 'quiz',
          content: 'Sample quiz question?',
          options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
          answer: 1
        }
      ]
    };
  }
  return content;
};

export const getNextLesson = (language: string, currentModuleId: string, currentLessonId: string): { lessonId: string; moduleId: string } | null => {
  const modules = getLessonModules(language);
  let foundCurrent = false;
  let nextLesson = null;
  
  for (const module of modules) {
    for (let i = 0; i < module.lessons.length; i++) {
      const lesson = module.lessons[i];
      
      // If we already found the current lesson and we're on the next one
      if (foundCurrent) {
        nextLesson = { lessonId: lesson.id, moduleId: module.id };
        return nextLesson;
      }
      
      // If this is the current lesson
      if (lesson.id === currentLessonId && module.id === currentModuleId) {
        foundCurrent = true;
        
        // If there's another lesson in this module
        if (i < module.lessons.length - 1) {
          nextLesson = { lessonId: module.lessons[i + 1].id, moduleId: module.id };
          return nextLesson;
        }
      }
    }
    
    // If we found the current lesson but there are no more lessons in this module,
    // look for the next module
    if (foundCurrent && modules.indexOf(module) < modules.length - 1) {
      const nextModule = modules[modules.indexOf(module) + 1];
      if (nextModule.lessons.length > 0) {
        nextLesson = { lessonId: nextModule.lessons[0].id, moduleId: nextModule.id };
        return nextLesson;
      }
    }
  }
  
  return nextLesson;
};

export const getPreviousLesson = (language: string, currentModuleId: string, currentLessonId: string): { lessonId: string; moduleId: string } | null => {
  const modules = getLessonModules(language);
  let previousLesson = null;
  
  for (let moduleIndex = 0; moduleIndex < modules.length; moduleIndex++) {
    const module = modules[moduleIndex];
    
    for (let lessonIndex = 0; lessonIndex < module.lessons.length; lessonIndex++) {
      const lesson = module.lessons[lessonIndex];
      
      // If this is the current lesson
      if (lesson.id === currentLessonId && module.id === currentModuleId) {
        // If there's a previous lesson in this module
        if (lessonIndex > 0) {
          previousLesson = { 
            lessonId: module.lessons[lessonIndex - 1].id, 
            moduleId: module.id 
          };
        } 
        // If we're at the first lesson of a module and there's a previous module
        else if (moduleIndex > 0) {
          const prevModule = modules[moduleIndex - 1];
          const lastLessonInPrevModule = prevModule.lessons[prevModule.lessons.length - 1];
          previousLesson = { 
            lessonId: lastLessonInPrevModule.id, 
            moduleId: prevModule.id 
          };
        }
        
        return previousLesson;
      }
    }
  }
  
  return previousLesson;
};

export const completeLesson = (lessonId: string) => {
  if (!userProgress.completedLessons.includes(lessonId)) {
    userProgress.completedLessons.push(lessonId);
    userProgress.points += 50;
    
    // Update lesson status in modules
    Object.keys(languageModules).forEach(language => {
      languageModules[language].forEach(module => {
        module.lessons.forEach(lesson => {
          // Mark this lesson as completed
          if (lesson.id === lessonId) {
            lesson.status = 'completed';
          }
          
          // Unlock the next lesson if it exists
          const lessonIndex = module.lessons.findIndex(l => l.id === lessonId);
          if (lessonIndex !== -1 && lessonIndex + 1 < module.lessons.length) {
            module.lessons[lessonIndex + 1].status = 'available';
          }
        });
      });
    });
    
    toast({
      title: "Progress saved!",
      description: `You earned 50 points for completing this lesson.`,
    });
  }
  
  return userProgress;
};

export const getUserProgress = () => {
  return userProgress;
};
