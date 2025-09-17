import React, { useState } from 'react';
import { Brain, Eye, EyeOff, ArrowLeft, Mail, Lock, User, Github, Chrome } from 'lucide-react';
import { Link } from 'react-router-dom';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      console.log('Form submitted:', formData);
    }, 2000);
  };

  const handleSocialAuth = (provider: string) => {
    console.log(`Authenticating with ${provider}`);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
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

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
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

      {/* Back to Home */}
      <div className="absolute top-6 left-6 z-50">
        <Link 
          to="/" 
          className="flex items-center space-x-3 text-gray-400 hover:text-white transition-all duration-300 group"
        >
          <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Logo */}
      <div className="absolute top-6 right-6 z-50">
        <div className="flex items-center space-x-3 group">
          <div className="relative">
            <Brain className="w-8 h-8 transition-transform duration-300 group-hover:rotate-12" />
            <div className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl"></div>
          </div>
          <span className="text-2xl font-bold tracking-tight">HoloLearn</span>
        </div>
      </div>

      <div className="flex items-center justify-center min-h-screen px-6 relative z-10">
        <div className="w-full max-w-md">
          {/* Auth Card */}
          <div className="bg-white bg-opacity-5 backdrop-blur-xl p-8 rounded-2xl border border-white border-opacity-10 shadow-2xl">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">
                {isLogin ? 'Welcome Back' : 'Join HoloLearn'}
              </h1>
              <p className="text-gray-400">
                {isLogin 
                  ? 'Sign in to continue your learning journey' 
                  : 'Start your AI-powered education experience'
                }
              </p>
            </div>

            {/* Social Auth Buttons */}
            <div className="space-y-3 mb-6">
              <button
                onClick={() => handleSocialAuth('google')}
                className="w-full flex items-center justify-center space-x-3 bg-white bg-opacity-10 hover:bg-opacity-20 border border-white border-opacity-20 hover:border-opacity-30 rounded-lg py-3 px-4 transition-all duration-300 group"
              >
                <Chrome className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                <span>Continue with Google</span>
              </button>
              <button
                onClick={() => handleSocialAuth('github')}
                className="w-full flex items-center justify-center space-x-3 bg-white bg-opacity-10 hover:bg-opacity-20 border border-white border-opacity-20 hover:border-opacity-30 rounded-lg py-3 px-4 transition-all duration-300 group"
              >
                <Github className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                <span>Continue with GitHub</span>
              </button>
            </div>

            {/* Divider */}
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white border-opacity-20"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-black text-gray-400">or continue with email</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg py-3 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-opacity-40 focus:bg-opacity-20 transition-all duration-300"
                    required={!isLogin}
                  />
                </div>
              )}

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg py-3 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-opacity-40 focus:bg-opacity-20 transition-all duration-300"
                  required
                />
              </div>

              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg py-3 pl-12 pr-12 text-white placeholder-gray-400 focus:outline-none focus:border-opacity-40 focus:bg-opacity-20 transition-all duration-300"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              {!isLogin && (
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg py-3 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-opacity-40 focus:bg-opacity-20 transition-all duration-300"
                    required={!isLogin}
                  />
                </div>
              )}

              {isLogin && (
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center space-x-2 text-gray-400">
                    <input type="checkbox" className="rounded border-gray-600 bg-transparent" />
                    <span>Remember me</span>
                  </label>
                  <button type="button" className="text-white hover:text-gray-300 transition-colors duration-300">
                    Forgot password?
                  </button>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-white text-black py-3 px-4 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 relative overflow-hidden group"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                    <span>Processing...</span>
                  </div>
                ) : (
                  <>
                    <span className="relative z-10">
                      {isLogin ? 'Sign In' : 'Create Account'}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300 transform -skew-x-12 translate-x-full group-hover:translate-x-0"></div>
                  </>
                )}
              </button>
            </form>

            {/* Toggle Auth Mode */}
            <div className="text-center mt-6">
              <p className="text-gray-400">
                {isLogin ? "Don't have an account? " : "Already have an account? "}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-white hover:text-gray-300 transition-colors duration-300 font-medium"
                >
                  {isLogin ? 'Sign up' : 'Sign in'}
                </button>
              </p>
            </div>

            {/* Terms */}
            {!isLogin && (
              <p className="text-xs text-gray-500 text-center mt-4">
                By creating an account, you agree to our{' '}
                <button className="text-white hover:text-gray-300 transition-colors duration-300">
                  Terms of Service
                </button>{' '}
                and{' '}
                <button className="text-white hover:text-gray-300 transition-colors duration-300">
                  Privacy Policy
                </button>
              </p>
            )}
          </div>

          {/* Features Preview */}
          <div className="mt-8 text-center">
            <p className="text-gray-400 mb-4">Join thousands of learners already using HoloLearn</p>
            <div className="flex justify-center space-x-8 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full opacity-60"></div>
                <span className="text-gray-400">Offline Learning</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full opacity-60"></div>
                <span className="text-gray-400">22+ Languages</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full opacity-60"></div>
                <span className="text-gray-400">AI-Powered</span>
              </div>
            </div>
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
      `}</style>
    </div>
  );
};

export default AuthPage;