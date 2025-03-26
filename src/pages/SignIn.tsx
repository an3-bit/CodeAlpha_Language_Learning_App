import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, Github, ArrowLeft } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Welcome back!",
        description: "You have successfully signed in to your account.",
      });
      navigate('/');
    }, 1500);
  };

  return (
    <div className="relative min-h-screen flex">
      {/* Background image side */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <div className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: 'url("https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
            filter: 'brightness(0.8)'
          }}>
          <div className="absolute inset-0 bg-gradient-to-r from-blue/40 to-purple/40"></div>
        </div>
        <div className="relative z-10 p-12 flex flex-col justify-between h-full text-white">
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <ArrowLeft size={18} />
            Back to Home
          </Link>
          <div className="mb-auto mt-auto">
            <h2 className="text-3xl font-bold mb-4">Continue Your Learning Journey</h2>
            <p className="text-white/80">Sign in to track your progress, earn achievements, and continue your personalized learning path.</p>
          </div>
        </div>
      </div>
      
      {/* Sign in form side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link to="/" className="lg:hidden inline-flex items-center gap-2 text-slate-600 mb-6">
              <ArrowLeft size={18} />
              Back to Home
            </Link>
            <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
            <p className="text-slate-600">Sign in to your account to continue</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="relative">
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input 
                    id="email"
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue/50 focus:border-blue outline-none"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              
              <div className="relative">
                <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input 
                    id="password"
                    type={showPassword ? "text" : "password"} 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-10 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue/50 focus:border-blue outline-none"
                    placeholder="••••••••"
                    required
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input 
                  id="remember-me" 
                  type="checkbox" 
                  className="h-4 w-4 text-blue border-slate-300 rounded focus:ring-blue"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-700">
                  Remember me
                </label>
              </div>
              
              <a href="#" className="text-sm font-medium text-blue hover:text-blue-dark">
                Forgot password?
              </a>
            </div>
            
            <button 
              type="submit" 
              className={`w-full py-2.5 px-4 flex justify-center items-center rounded-lg font-medium text-white bg-blue hover:bg-blue-dark transition ${isLoading ? 'opacity-80 cursor-not-allowed' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : null}
              {isLoading ? 'Signing in...' : 'Sign in'}
            </button>
            
            <div className="relative flex items-center justify-center">
              <div className="border-t border-slate-200 absolute w-full"></div>
              <span className="relative px-4 bg-white text-sm text-slate-500">or continue with</span>
            </div>
            
            <button 
              type="button" 
              className="w-full flex items-center justify-center gap-2 border border-slate-300 py-2.5 px-4 rounded-lg font-medium text-slate-700 hover:bg-slate-50"
            >
              <Github size={18} />
              GitHub
            </button>
            
            <p className="text-center text-sm text-slate-600">
              Don't have an account?{' '}
              <a href="#" className="font-medium text-blue hover:text-blue-dark">
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
