import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import AuthPage from './components/AuthPage';
import { 
  Brain, 
  Wifi, 
  Globe, 
  Eye, 
  Mic, 
  Users, 
  ChevronRight, 
  Play,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  Smartphone,
  Languages,
  BookOpen,
  Target,
  Zap,
  Shield,
  Headphones,
  Monitor,
  Star,
  Quote,
  Download,
  Github,
  ExternalLink,
  Code,
  Layers,
  Cpu,
  Database,
  Cloud,
  Lock,
  Accessibility,
  Volume2,
  Camera,
  MessageSquare,
  BarChart3,
  TrendingUp,
  Award,
  Lightbulb,
  Rocket,
  Heart
} from 'lucide-react';

function HomePage() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeDemo, setActiveDemo] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const features = [
    {
      icon: Brain,
      title: "Offline AI Tutor",
      description: "Lightweight models running locally on low-end smartphones without internet connectivity.",
      delay: "0ms"
    },
    {
      icon: Users,
      title: "Sign Language Recognition",
      description: "Helps hearing-impaired students by translating sign gestures into speech and text.",
      delay: "100ms"
    },
    {
      icon: Languages,
      title: "Real-time Multilingual Translation",
      description: "Supports 10+ Indian languages offline for seamless communication.",
      delay: "200ms"
    },
    {
      icon: Eye,
      title: "AR Learning with Holograms",
      description: "Interactive and visual lessons for better engagement and understanding.",
      delay: "300ms"
    },
    {
      icon: Mic,
      title: "Voice + Image Teaching",
      description: "Guided learning specifically designed for visually impaired students.",
      delay: "400ms"
    },
    {
      icon: Target,
      title: "Adaptive Curriculum",
      description: "Personalized learning paths based on student's pace and ability.",
      delay: "500ms"
    }
  ];

  const stats = [
    { number: "250M+", label: "Students lacking quality education", icon: Users },
    { number: "22", label: "Official languages supported", icon: Languages },
    { number: "19,000+", label: "Regional dialects covered", icon: Globe },
    { number: "0", label: "Internet dependency", icon: Wifi }
  ];

  const techHighlights = [
    {
      title: "Edge AI Processing",
      description: "Advanced neural networks optimized for mobile devices",
      icon: Zap,
      progress: 95
    },
    {
      title: "Secure Offline Storage",
      description: "Encrypted local data with privacy-first architecture",
      icon: Shield,
      progress: 100
    },
    {
      title: "Multi-modal Interface",
      description: "Voice, gesture, and visual input recognition",
      icon: Headphones,
      progress: 88
    },
    {
      title: "Adaptive Display",
      description: "Dynamic UI that adjusts to user needs and abilities",
      icon: Monitor,
      progress: 92
    }
  ];

  const demos = [
    {
      title: "Sign Language Recognition",
      description: "Real-time translation of sign language to speech and text",
      gif: "https://images.pexels.com/photos/7092613/pexels-photo-7092613.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Real-time processing", "99% accuracy", "Offline capable"]
    },
    {
      title: "AR Holographic Learning",
      description: "Interactive 3D models and immersive educational content",
      gif: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["3D visualization", "Interactive models", "Engaging content"]
    },
    {
      title: "Multilingual Translation",
      description: "Seamless translation across 22 Indian languages",
      gif: "https://images.pexels.com/photos/7092613/pexels-photo-7092613.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["22 languages", "Instant translation", "Cultural context"]
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Rural Teacher, Rajasthan",
      content: "HoloLearn has transformed how I teach. My students are more engaged and learning faster than ever before.",
      rating: 5
    },
    {
      name: "Dr. Amit Kumar",
      role: "Education Researcher",
      content: "The offline capability and multilingual support make this a game-changer for rural education in India.",
      rating: 5
    },
    {
      name: "Meera Patel",
      role: "Parent",
      content: "My hearing-impaired daughter can now learn independently. The sign language recognition is incredible.",
      rating: 5
    }
  ];

  const architectureComponents = [
    {
      title: "AI Engine",
      description: "Lightweight neural networks optimized for mobile devices",
      icon: Cpu,
      connections: ["Language Processor", "Vision System"]
    },
    {
      title: "Language Processor",
      description: "Real-time multilingual translation and speech recognition",
      icon: Languages,
      connections: ["AI Engine", "User Interface"]
    },
    {
      title: "Vision System",
      description: "AR rendering and sign language recognition",
      icon: Eye,
      connections: ["AI Engine", "User Interface"]
    },
    {
      title: "Local Database",
      description: "Encrypted offline storage for learning content",
      icon: Database,
      connections: ["Security Layer"]
    },
    {
      title: "Security Layer",
      description: "Privacy-first encryption and data protection",
      icon: Lock,
      connections: ["Local Database", "User Interface"]
    },
    {
      title: "User Interface",
      description: "Adaptive interface for accessibility needs",
      icon: Monitor,
      connections: ["Language Processor", "Vision System", "Security Layer"]
    }
  ];

  const handleAuthNavigation = () => {
    navigate('/auth');
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

      {/* Navigation */}
      <nav className="relative z-50 px-6 py-6 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <Brain className="w-8 h-8 transition-transform duration-300 group-hover:rotate-12" />
              <div className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl"></div>
            </div>
            <span className="text-2xl font-bold tracking-tight">HoloLearn</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['Problem', 'Solution', 'Features', 'Demos', 'Architecture'].map((item, index) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="relative py-2 px-1 text-sm font-medium transition-all duration-300 hover:text-white group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </a>
            ))}
            <button className="relative bg-white text-black px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-gray-200 hover:scale-105 hover:shadow-2xl group overflow-hidden">
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300 transform -skew-x-12 translate-x-full group-hover:translate-x-0"></div>
            </button>
            <button 
              onClick={handleAuthNavigation}
              className="relative bg-white text-black px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-gray-200 hover:scale-105 hover:shadow-2xl group overflow-hidden"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300 transform -skew-x-12 translate-x-full group-hover:translate-x-0"></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden relative z-10 p-2 transition-transform duration-300 hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-black backdrop-blur-xl transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          <div className="p-6 space-y-4">
            {['Problem', 'Solution', 'Features', 'Demos', 'Architecture'].map((item, index) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="block py-3 px-4 rounded-lg transition-all duration-300 hover:bg-white hover:bg-opacity-5 hover:translate-x-2"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="w-full bg-white text-black px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-gray-200 mt-4">
              Get Started
            </button>
            <button 
              onClick={handleAuthNavigation}
              className="w-full bg-white text-black px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-gray-200 mt-4"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        {/* Animated Beams from Center */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-pulse transform -translate-x-1/2 -translate-y-1/2 rotate-0"></div>
          <div className="absolute top-1/2 left-1/2 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-15 transform -translate-x-1/2 -translate-y-1/2 rotate-45" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-10 transform -translate-x-1/2 -translate-y-1/2 rotate-90" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-15 transform -translate-x-1/2 -translate-y-1/2 rotate-135" style={{ animationDelay: '3s' }}></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-8 inline-flex items-center px-6 py-3 border border-white border-opacity-20 rounded-full text-sm backdrop-blur-sm hover:border-opacity-40 transition-all duration-300 group">
            <span className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse"></span>
            <span className="group-hover:tracking-wider transition-all duration-300">AI-Powered Education Revolution</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight tracking-tight">
            <span className="inline-block animate-fade-in-up" style={{ animationDelay: '0.2s' }}>Holo</span>
            <span className="inline-block animate-fade-in-up" style={{ animationDelay: '0.4s' }}>Learn</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            Bridging the education gap with AI-driven, inclusive, offline learning
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <button 
              onClick={handleAuthNavigation}
              className="group relative bg-white text-black px-10 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-200 hover:scale-105 hover:shadow-2xl overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Start Learning
                <ArrowRight className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300 transform -skew-x-12 translate-x-full group-hover:translate-x-0"></div>
            </button>
            <button className="group border border-white border-opacity-30 px-10 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-white hover:bg-opacity-5 hover:border-opacity-60 flex items-center">
              <Play className="mr-3 w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section id="problem" className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">The Education Crisis</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Millions of students are left behind by traditional education systems
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {[
                {
                  title: "250 Million Students Underserved",
                  description: "Rural India faces severe teacher shortages, lack of resources, and poor infrastructure."
                },
                {
                  title: "Language Barriers",
                  description: "22 official languages and 19,000+ dialects create communication challenges in education."
                },
                {
                  title: "Accessibility Gap",
                  description: "Differently-abled learners lack specialized tools for hearing and visual impairments."
                },
                {
                  title: "Internet Dependency",
                  description: "Most EdTech platforms require stable internet, unavailable in remote areas."
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-6 group animate-fade-in-left" style={{ animationDelay: `${index * 200}ms` }}>
                  <div className="w-3 h-3 bg-white rounded-full mt-2 flex-shrink-0 transition-all duration-300 group-hover:scale-150 group-hover:shadow-lg"></div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 transition-all duration-300 group-hover:text-gray-200">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed transition-all duration-300 group-hover:text-gray-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="bg-white bg-opacity-5 backdrop-blur-sm p-10 rounded-2xl border border-white border-opacity-10 hover:border-opacity-20 transition-all duration-500 hover:bg-opacity-10">
                <div className="grid grid-cols-2 gap-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center group animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                      <stat.icon className="w-8 h-8 mx-auto mb-4 opacity-60 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110" />
                      <div className="text-3xl font-bold mb-2 transition-all duration-300 group-hover:scale-110">{stat.number}</div>
                      <div className="text-sm text-gray-400 transition-all duration-300 group-hover:text-gray-300">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section id="solution" className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">Meet HoloLearn</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              An AI-powered, offline-capable holographic tutor that makes quality education accessible to everyone
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: Smartphone,
                title: "Works Offline",
                description: "Runs entirely on low-end smartphones without any internet connection required."
              },
              {
                icon: Globe,
                title: "Multilingual",
                description: "Real-time translation across 10+ Indian languages for inclusive learning."
              },
              {
                icon: Eye,
                title: "Accessible",
                description: "Specially designed for hearing and visually impaired students with adaptive interfaces."
              }
            ].map((item, index) => (
              <div key={index} className="group relative animate-fade-in-up h-full" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="bg-white bg-opacity-5 backdrop-blur-sm p-8 rounded-2xl border border-white border-opacity-10 transition-all duration-500 hover:border-opacity-30 hover:bg-opacity-10 hover:scale-105 h-full flex flex-col">
                  <div className="relative mb-6">
                    <item.icon className="w-12 h-12 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" />
                    <div className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 transition-all duration-300 group-hover:text-gray-200">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed transition-all duration-300 group-hover:text-gray-300 flex-grow">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button 
              onClick={handleAuthNavigation}
              className="group bg-white text-black px-10 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-200 hover:scale-105 hover:shadow-2xl inline-flex items-center overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Explore Technology
                <ChevronRight className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300 transform -skew-x-12 translate-x-full group-hover:translate-x-0"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="features" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">Revolutionary Features</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Cutting-edge technology designed for inclusive and personalized learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group relative animate-fade-in-up h-full"
                style={{ animationDelay: feature.delay }}
              >
                <div className="bg-white bg-opacity-5 backdrop-blur-sm p-8 rounded-2xl border border-white border-opacity-10 transition-all duration-500 hover:border-opacity-30 hover:bg-opacity-10 hover:scale-105 h-full flex flex-col">
                  <div className="relative mb-6">
                    <feature.icon className="w-12 h-12 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" />
                    <div className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 transition-all duration-300 group-hover:text-gray-200">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed transition-all duration-300 group-hover:text-gray-300 flex-grow">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demos Section */}
      <section id="demos" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">See It In Action</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Experience HoloLearn's revolutionary features through interactive demonstrations
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-6">
              {demos.map((demo, index) => (
                <div 
                  key={index}
                  className={`p-6 rounded-2xl border transition-all duration-500 cursor-pointer ${
                    activeDemo === index 
                      ? 'bg-white bg-opacity-10 border-white border-opacity-30' 
                      : 'bg-white bg-opacity-5 border-white border-opacity-10 hover:border-opacity-20'
                  }`}
                  onClick={() => setActiveDemo(index)}
                >
                  <h3 className="text-2xl font-bold mb-3">{demo.title}</h3>
                  <p className="text-gray-400 mb-4">{demo.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {demo.features.map((feature, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white bg-opacity-10 rounded-full text-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="bg-white bg-opacity-5 backdrop-blur-sm p-8 rounded-2xl border border-white border-opacity-10">
                <div className="aspect-video bg-white bg-opacity-10 rounded-xl overflow-hidden mb-6">
                  <img 
                    src={demos[activeDemo].gif} 
                    alt={demos[activeDemo].title}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-semibold mb-2">{demos[activeDemo].title}</h4>
                  <p className="text-gray-400">{demos[activeDemo].description}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="group bg-white text-black px-10 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-200 hover:scale-105 hover:shadow-2xl inline-flex items-center overflow-hidden">
              <span className="relative z-10 flex items-center">
                Try Interactive Demo
                <ExternalLink className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* System Architecture */}
      <section id="architecture" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">System Architecture</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Built with modern, scalable architecture for optimal performance and reliability
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {architectureComponents.map((component, index) => (
              <div 
                key={index}
                className="group relative animate-fade-in-up h-full"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-white bg-opacity-5 backdrop-blur-sm p-8 rounded-2xl border border-white border-opacity-10 transition-all duration-500 hover:border-opacity-30 hover:bg-opacity-10 hover:scale-105 h-full flex flex-col">
                  <div className="relative mb-6">
                    <component.icon className="w-12 h-12 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" />
                    <div className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 transition-all duration-300 group-hover:text-gray-200">{component.title}</h3>
                  <p className="text-gray-400 leading-relaxed transition-all duration-300 group-hover:text-gray-300 flex-grow mb-4">{component.description}</p>
                  <div className="space-y-2">
                    <div className="text-sm text-gray-500">Connected to:</div>
                    <div className="flex flex-wrap gap-2">
                      {component.connections.map((connection, idx) => (
                        <span key={idx} className="px-2 py-1 bg-white bg-opacity-10 rounded text-xs">
                          {connection}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white bg-opacity-5 backdrop-blur-sm p-8 rounded-2xl border border-white border-opacity-10">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Technical Specifications</h3>
                <div className="space-y-4">
                  {techHighlights.map((tech, index) => (
                    <div key={index} className="group animate-fade-in-right" style={{ animationDelay: `${index * 200}ms` }}>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <tech.icon className="w-5 h-5 transition-all duration-300 group-hover:scale-110" />
                          <span className="font-medium transition-all duration-300 group-hover:text-gray-200">{tech.title}</span>
                        </div>
                        <span className="text-sm text-gray-400">{tech.progress}%</span>
                      </div>
                      <p className="text-sm text-gray-400 mb-3 transition-all duration-300 group-hover:text-gray-300">{tech.description}</p>
                      <div className="w-full h-2 bg-white bg-opacity-10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-white rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${tech.progress}%`,
                            animationDelay: `${index * 200 + 500}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6">Performance Metrics</h3>
                <div className="space-y-6">
                  {[
                    { label: "Response Time", value: "< 50ms", icon: Zap },
                    { label: "Accuracy Rate", value: "99.2%", icon: Target },
                    { label: "Offline Capability", value: "100%", icon: Wifi },
                    { label: "Language Support", value: "22+", icon: Languages }
                  ].map((metric, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-white bg-opacity-5 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <metric.icon className="w-5 h-5" />
                        <span>{metric.label}</span>
                      </div>
                      <span className="font-bold text-lg">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white border-opacity-10 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6 group">
                <div className="relative">
                  <Brain className="w-8 h-8 transition-transform duration-300 group-hover:rotate-12" />
                  <div className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl"></div>
                </div>
                <span className="text-2xl font-bold tracking-tight">HoloLearn</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Bridging the education gap with AI-driven, inclusive, offline learning. 
                Empowering millions of students worldwide with personalized education.
              </p>
              <div className="flex space-x-4">
                <button className="p-3 bg-white bg-opacity-5 rounded-lg hover:bg-opacity-10 transition-all duration-300">
                  <Github className="w-5 h-5" />
                </button>
                <button className="p-3 bg-white bg-opacity-5 rounded-lg hover:bg-opacity-10 transition-all duration-300">
                  <Download className="w-5 h-5" />
                </button>
                <button className="p-3 bg-white bg-opacity-5 rounded-lg hover:bg-opacity-10 transition-all duration-300">
                  <ExternalLink className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <div className="space-y-3">
                {['Features', 'Demos', 'Pricing', 'Documentation'].map((item) => (
                  <a key={item} href="#" className="block text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1">
                    {item}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <div className="space-y-3">
                {['About', 'Careers', 'Contact', 'Blog'].map((item) => (
                  <a key={item} href="#" className="block text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1">
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white border-opacity-10 flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 transition-all duration-300 hover:text-gray-300 mb-4 md:mb-0">
              &copy; 2025 HoloLearn. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <a key={item} href="#" className="text-gray-400 hover:text-white transition-all duration-300 text-sm">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

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
        
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  );
}

export default App;