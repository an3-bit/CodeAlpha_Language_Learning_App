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

// Organize lesson contents by language
const lessonContents: Record<string, Record<string, LessonContentType>> = {
  python: {
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
  },
  java: {
    'lesson-1-1': {
      title: 'Introduction to Java',
      description: 'Overview of Java and setting up your development environment',
      duration: 15,
      sections: [
        {
          type: 'text',
          content: 'Welcome to Java! Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let application developers write once, run anywhere (WORA).'
        },
        {
          type: 'text',
          content: 'Java was originally developed by James Gosling at Sun Microsystems (which has since been acquired by Oracle) and released in 1995. Java applications are typically compiled to bytecode that can run on any Java Virtual Machine (JVM) regardless of the underlying computer architecture.'
        },
        {
          type: 'code',
          content: '// Your first Java program\npublic class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n        \n        // This is a comment\n        String name = "Java Learner";\n        System.out.println("Welcome, " + name + "!");\n    }\n}'
        },
        {
          type: 'text',
          content: 'To run Java code, you need to have the Java Development Kit (JDK) installed on your computer. Let\'s go through the installation process and set up a proper development environment.'
        },
        {
          type: 'quiz',
          content: 'What is Java primarily known for?',
          options: [
            'Being a scripting language for web browsers',
            'Its "write once, run anywhere" capability',
            'Being exclusively used for Android development',
            'Its simplicity and lack of object-oriented features'
          ],
          answer: 1
        }
      ]
    },
    'lesson-1-2': {
      title: 'Java Syntax Basics',
      description: 'Learn the fundamental syntax and structure of Java',
      duration: 20,
      sections: [
        {
          type: 'text',
          content: 'Java syntax is inspired by C and C++ but has a simpler object model and fewer low-level facilities. Java uses curly braces to define code blocks and semicolons to end statements.'
        },
        {
          type: 'code',
          content: '// Variables and assignment\nString name = "Java Learner";\nint age = 25;\nboolean isProgrammer = true;\n\n// Code blocks with curly braces\nif (age > 18) {\n    System.out.println("You are an adult.");\n    if (isProgrammer) {\n        System.out.println("You are a programmer too!");\n    }\n} else {\n    System.out.println("You are a minor.");\n}'
        },
        {
          type: 'text',
          content: 'Java is strongly typed, which means you must declare the type of a variable before using it. Java also has primitive data types (like int, boolean, char) and reference types (like String, arrays, and user-defined classes).'
        },
        {
          type: 'quiz',
          content: 'In Java, how are code blocks defined?',
          options: [
            'Using curly braces {}',
            'Using keywords like "begin" and "end"',
            'Using indentation (whitespace)',
            'Using parentheses ()'
          ],
          answer: 0
        }
      ]
    }
  },
  kotlin: {
    'lesson-1-1': {
      title: 'Introduction to Kotlin',
      description: 'Overview of Kotlin and setting up your development environment',
      duration: 15,
      sections: [
        {
          type: 'text',
          content: 'Welcome to Kotlin! Kotlin is a modern, statically typed programming language that runs on the Java Virtual Machine (JVM). It was developed by JetBrains, the company behind popular IDEs like IntelliJ IDEA and Android Studio. Kotlin is fully interoperable with Java and is now Google\'s preferred language for Android app development.'
        },
        {
          type: 'text',
          content: 'Kotlin was first released in 2016 and has quickly gained popularity due to its conciseness, safety features, and seamless interoperability with Java. It combines object-oriented and functional programming features and aims to be more concise and safer than Java while maintaining similar performance.'
        },
        {
          type: 'code',
          content: '// Your first Kotlin program\nfun main() {\n    println("Hello, World!")\n    \n    // This is a comment\n    val name = "Kotlin Learner"\n    println("Welcome, $name!")\n}'
        },
        {
          type: 'text',
          content: 'To run Kotlin code, you need to have the Java Development Kit (JDK) and Kotlin compiler installed on your computer. Let\'s go through the installation process and set up a proper development environment.'
        },
        {
          type: 'quiz',
          content: 'What is Kotlin primarily known for?',
          options: [
            'Being a replacement for JavaScript in web browsers',
            'Its interoperability with Java and use in Android development',
            'Being a purely functional programming language',
            'Its complex syntax and steep learning curve'
          ],
          answer: 1
        }
      ]
    },
    'lesson-1-2': {
      title: 'Kotlin Syntax Basics',
      description: 'Learn the fundamental syntax and structure of Kotlin',
      duration: 20,
      sections: [
        {
          type: 'text',
          content: 'Kotlin syntax is designed to be concise, expressive, and safe. While it uses curly braces to define code blocks like Java, it has many improvements that reduce boilerplate code and prevent common errors.'
        },
        {
          type: 'code',
          content: '// Variables and assignment\nval name = "Kotlin Learner" // Immutable (read-only)\nvar age = 25 // Mutable\nval isProgrammer = true\n\n// Code blocks with curly braces\nif (age > 18) {\n    println("You are an adult.")\n    if (isProgrammer) {\n        println("You are a programmer too!")\n    }\n} else {\n    println("You are a minor.")\n}'
        },
        {
          type: 'text',
          content: 'Kotlin has type inference, which means you often don\'t need to explicitly declare variable types. Kotlin also distinguishes between nullable and non-nullable types, which helps prevent null pointer exceptions at compile time rather than runtime.'
        },
        {
          type: 'quiz',
          content: 'In Kotlin, what is the difference between "val" and "var"?',
          options: [
            'val is for integers, var is for strings',
            'val is for immutable variables, var is for mutable variables',
            'val is for global variables, var is for local variables',
            'There is no difference, they are interchangeable'
          ],
          answer: 1
        }
      ]
    }
  },
  react: {
    'lesson-1-1': {
      title: 'Introduction to React',
      description: 'Overview of React and setting up your development environment',
      duration: 15,
      sections: [
        {
          type: 'text',
          content: 'Welcome to React! React is a JavaScript library for building user interfaces, particularly single-page applications. It\'s used for handling the view layer in web and mobile applications. React allows you to design simple views for each state in your application, and it will efficiently update and render just the right components when your data changes.'
        },
        {
          type: 'text',
          content: 'React was created by Facebook (now Meta) and was first released in 2013. It has become one of the most popular front-end libraries due to its component-based architecture, virtual DOM for efficient rendering, and the rich ecosystem surrounding it.'
        },
        {
          type: 'code',
          content: '// Your first React component\nimport React from \'react\';\n\nfunction HelloWorld() {\n  const name = "React Learner";\n  \n  return (\n    <div>\n      <h1>Hello, World!</h1>\n      <p>Welcome, {name}!</p>\n    </div>\n  );\n}\n\nexport default HelloWorld;'
        },
        {
          type: 'text',
          content: 'To start developing with React, you need to set up your development environment. We\'ll go through the process of creating a new React application using tools like Create React App or Vite.'
        },
        {
          type: 'quiz',
          content: 'What is React primarily known for?',
          options: [
            'Being a full-stack framework with built-in backend capabilities',
            'Its component-based architecture for building user interfaces',
            'Being a programming language that compiles to JavaScript',
            'Its ability to replace HTML and CSS completely'
          ],
          answer: 1
        }
      ]
    },
    'lesson-1-2': {
      title: 'JSX Syntax',
      description: 'Learn the fundamental JSX syntax and structure',
      duration: 20,
      sections: [
        {
          type: 'text',
          content: 'JSX (JavaScript XML) is a syntax extension for JavaScript that looks similar to HTML. It allows you to write HTML-like code in your JavaScript files, making it easier to visualize and build UI components.'
        },
        {
          type: 'code',
          content: '// Basic JSX syntax\nfunction Welcome() {\n  const name = "React Learner";\n  const isLoggedIn = true;\n  \n  return (\n    <div className="welcome-container">\n      <h1>Welcome, {name}!</h1>\n      {isLoggedIn ? (\n        <p>You are logged in.</p>\n      ) : (\n        <button>Log In</button>\n      )}\n    </div>\n  );\n}'
        },
        {
          type: 'text',
          content: 'JSX is not required for using React, but it makes the code more readable and expressive. Behind the scenes, JSX is compiled to regular JavaScript function calls using a tool like Babel.'
        },
        {
          type: 'quiz',
          content: 'In JSX, how do you include JavaScript expressions?',
          options: [
            'Using {{ expression }}',
            'Using {% expression %}',
            'Using { expression }',
            'Using ${ expression }'
          ],
          answer: 2
        }
      ]
    }
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

export const getLessonContent = (lessonId: string, language?: string): LessonContentType => {
  // If language is provided, try to get language-specific content first
  if (language && lessonContents[language] && lessonContents[language][lessonId]) {
    return lessonContents[language][lessonId];
  }
  
  // Try to find content in any language if not found in the specified language
  for (const lang in lessonContents) {
    if (lessonContents[lang][lessonId]) {
      return lessonContents[lang][lessonId];
    }
  }
  
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
