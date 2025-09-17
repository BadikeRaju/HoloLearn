import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  ArrowLeft,
  Github,
  Chrome,
  Loader2,
  Users,
  Languages
} from 'lucide-react';

function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: ''
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsLoading(false);
  };

  const handleSocialAuth = (provider: string) => {
    console.log(`${provider} authentication clicked`);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Grid Background */}
      <div className="fixed inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(white 1px, transparent 1px),
            linear-gradient(90deg, white 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }}></div>
      </div>

      {/* Mouse Follower */}
      <div 
        className="fixed w-96 h-96 pointer-events-none z-0 opacity-[0.03] transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background: 'radial-gradient(circle, white 0%, transparent 70%)',
        }}
      />

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Back Button */}
      <div className="relative z-50 p-6">
        <Link 
          to="/" 
          className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-all duration-300 group"
        >
          <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex min-h-screen">
        {/* Left Side - Project Information */}
        <div className="hidden lg:flex lg:w-1/2 bg-black relative overflow-hidden h-screen">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            {/* Floating Brain Icons */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute opacity-10"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float ${4 + Math.random() * 4}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              >
                <Brain className="w-8 h-8 text-white" />
              </div>
            ))}
            
            {/* Animated Connection Lines */}
            <div className="absolute inset-0">
              <svg className="w-full h-full" viewBox="0 0 400 400">
                {[...Array(6)].map((_, i) => (
                  <line
                    key={i}
                    x1={Math.random() * 400}
                    y1={Math.random() * 400}
                    x2={Math.random() * 400}
                    y2={Math.random() * 400}
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="1"
                    className="animate-pulse"
                    style={{
                      animationDelay: `${i * 0.5}s`,
                      animationDuration: `${2 + Math.random() * 2}s`
                    }}
                  />
                ))}
              </svg>
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-center items-start text-left px-56 py-12">
            {/* Logo */}
            <div className="mb-8 group">
              <div className="relative">
                <Brain className="w-20 h-20 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
                <div className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"></div>
              </div>
              <h1 className="text-5xl font-bold text-white mt-4 tracking-tight">
                HoloLearn
              </h1>
            </div>

            {/* Animated Features */}
            <div className="space-y-6 w-full max-w-sm">
              <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-6 h-6 text-blue-400" />
                </div>
                <div className="text-left">
                  <h3 className="text-white font-semibold">AI-Powered Learning</h3>
                  <p className="text-gray-300 text-sm">Offline AI tutor for personalized education</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Eye className="w-6 h-6 text-green-400" />
                </div>
                <div className="text-left">
                  <h3 className="text-white font-semibold">AR Holograms</h3>
                  <p className="text-gray-300 text-sm">Interactive 3D learning experiences</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Languages className="w-6 h-6 text-purple-400" />
                </div>
                <div className="text-left">
                  <h3 className="text-white font-semibold">Multilingual</h3>
                  <p className="text-gray-300 text-sm">22+ Indian languages supported</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-orange-400" />
                </div>
                <div className="text-left">
                  <h3 className="text-white font-semibold">Accessible</h3>
                  <p className="text-gray-300 text-sm">Designed for all learning abilities</p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12">
              <div className="inline-flex items-center space-x-2 text-white/80 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Join 250M+ students worldwide</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Authentication Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-8 h-screen">
          <div className="w-full max-w-md relative z-10">
          {/* Logo */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center space-x-3 mb-4 group">
              <div className="relative">
                <Brain className="w-10 h-10 transition-transform duration-300 group-hover:rotate-12" />
                <div className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl"></div>
              </div>
              <span className="text-3xl font-bold tracking-tight">HoloLearn</span>
            </div>
            <p className="text-gray-400 text-base">
              {isSignUp ? 'Create your account' : 'Welcome back'}
            </p>
          </div>

          {/* Auth Form */}
          <div className="bg-white bg-opacity-5 backdrop-blur-sm p-6 rounded-2xl border border-white border-opacity-10 hover:border-opacity-20 transition-all duration-500">
            {/* Toggle Buttons */}
            <div className="flex mb-6 bg-white bg-opacity-5 rounded-lg p-1">
              <button
                onClick={() => setIsSignUp(false)}
                className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all duration-300 ${
                  !isSignUp 
                    ? 'bg-white text-black' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => setIsSignUp(true)}
                className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all duration-300 ${
                  isSignUp 
                    ? 'bg-white text-black' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Sign Up
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {isSignUp && (
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-300">Full Name</label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required={isSignUp}
                      className="w-full px-4 py-2.5 bg-white bg-opacity-5 border border-white border-opacity-20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-opacity-40 focus:bg-opacity-10 transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>
              )}

              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-300">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-2.5 bg-white bg-opacity-5 border border-white border-opacity-20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-opacity-40 focus:bg-opacity-10 transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-300">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-12 py-2.5 bg-white bg-opacity-5 border border-white border-opacity-20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-opacity-40 focus:bg-opacity-10 transition-all duration-300"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {isSignUp && (
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-300">Confirm Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      required={isSignUp}
                      className="w-full pl-12 pr-12 py-2.5 bg-white bg-opacity-5 border border-white border-opacity-20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-opacity-40 focus:bg-opacity-10 transition-all duration-300"
                      placeholder="Confirm your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              )}

              {!isSignUp && (
                <div className="flex items-center justify-between">
                  <label className="flex items-center space-x-2 text-sm text-gray-400">
                    <input type="checkbox" className="rounded border-white border-opacity-20 bg-white bg-opacity-5" />
                    <span>Remember me</span>
                  </label>
                  <button type="button" className="text-sm text-white hover:text-gray-300 transition-colors duration-300">
                    Forgot password?
                  </button>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-white text-black py-2.5 px-6 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-200 hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <span>{isSignUp ? 'Create Account' : 'Sign In'}</span>
                )}
              </button>
            </form>

            {/* Social Authentication */}
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white border-opacity-20"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-black text-gray-400">Or continue with</span>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <button
                  onClick={() => handleSocialAuth('google')}
                  className="w-full inline-flex justify-center py-2.5 px-4 border border-white border-opacity-20 rounded-lg bg-white bg-opacity-5 text-sm font-medium text-white hover:bg-opacity-10 hover:border-opacity-40 transition-all duration-300"
                >
                  <Chrome className="w-5 h-5" />
                  <span className="ml-2">Google</span>
                </button>
                <button
                  onClick={() => handleSocialAuth('github')}
                  className="w-full inline-flex justify-center py-2.5 px-4 border border-white border-opacity-20 rounded-lg bg-white bg-opacity-5 text-sm font-medium text-white hover:bg-opacity-10 hover:border-opacity-40 transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                  <span className="ml-2">GitHub</span>
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400">
                {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
                <button
                  onClick={() => setIsSignUp(!isSignUp)}
                  className="text-white hover:text-gray-300 font-medium transition-colors duration-300"
                >
                  {isSignUp ? 'Sign In' : 'Sign Up'}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Logo - Only visible on small screens */}
      <div className="lg:hidden absolute top-6 left-6 z-50">
        <div className="flex items-center space-x-2 group">
          <div className="relative">
            <Brain className="w-8 h-8 transition-transform duration-300 group-hover:rotate-12" />
            <div className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl"></div>
          </div>
          <span className="text-xl font-bold tracking-tight">HoloLearn</span>
        </div>
      </div>
    </div>

      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}

export default AuthPage;
