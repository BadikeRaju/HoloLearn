import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Menu, 
  X, 
  Bell, 
  Search, 
  User, 
  Settings, 
  LogOut,
  BookOpen,
  Users,
  TrendingUp,
  Award,
  Clock,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Eye,
  Languages,
  Mic,
  Camera,
  Headphones,
  Monitor,
  BarChart3,
  Calendar,
  Target,
  Zap,
  Globe,
  Wifi,
  WifiOff,
  ChevronRight,
  Plus,
  Star,
  Download,
  Upload,
  RefreshCw,
  CheckCircle,
  AlertCircle,
  Info,
  ArrowUp,
  ArrowDown,
  Activity
} from 'lucide-react';

interface DashboardProps {
  userName?: string;
}

function Dashboard({ userName = "Student" }: DashboardProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isOfflineMode, setIsOfflineMode] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeModule, setActiveModule] = useState('overview');
  const [notifications, setNotifications] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      title: "Learning Hours",
      value: "24.5",
      change: "+12%",
      trend: "up",
      icon: Clock,
      color: "blue"
    },
    {
      title: "Modules Completed",
      value: "8",
      change: "+3",
      trend: "up",
      icon: CheckCircle,
      color: "green"
    },
    {
      title: "Languages Learned",
      value: "3",
      change: "+1",
      trend: "up",
      icon: Languages,
      color: "purple"
    },
    {
      title: "Achievement Score",
      value: "92%",
      change: "+5%",
      trend: "up",
      icon: Award,
      color: "orange"
    }
  ];

  const features = [
    {
      id: 'ai-tutor',
      title: 'Offline AI Tutor',
      description: 'Personalized learning with AI guidance',
      icon: Brain,
      status: 'active',
      progress: 85,
      color: 'blue',
      lastUsed: '2 hours ago'
    },
    {
      id: 'sign-language',
      title: 'Sign Language Recognition',
      description: 'Convert sign gestures to speech and text',
      icon: Users,
      status: 'available',
      progress: 0,
      color: 'green',
      lastUsed: 'Never'
    },
    {
      id: 'translation',
      title: 'Multilingual Translation',
      description: 'Real-time translation across 10+ languages',
      icon: Languages,
      status: 'active',
      progress: 60,
      color: 'purple',
      lastUsed: '1 hour ago'
    },
    {
      id: 'ar-learning',
      title: 'AR Holographic Learning',
      description: 'Interactive 3D educational content',
      icon: Eye,
      status: 'available',
      progress: 0,
      color: 'orange',
      lastUsed: 'Never'
    },
    {
      id: 'voice-teaching',
      title: 'Voice + Image Teaching',
      description: 'Audio-visual learning for accessibility',
      icon: Headphones,
      status: 'active',
      progress: 40,
      color: 'pink',
      lastUsed: '3 hours ago'
    },
    {
      id: 'adaptive-curriculum',
      title: 'Adaptive Curriculum',
      description: 'Personalized learning paths',
      icon: Target,
      status: 'active',
      progress: 75,
      color: 'indigo',
      lastUsed: '30 minutes ago'
    }
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'lesson',
      title: 'Completed Mathematics Module 3',
      time: '2 hours ago',
      icon: CheckCircle,
      color: 'green'
    },
    {
      id: 2,
      type: 'translation',
      title: 'Used Hindi to English translation',
      time: '3 hours ago',
      icon: Languages,
      color: 'purple'
    },
    {
      id: 3,
      type: 'achievement',
      title: 'Earned "Quick Learner" badge',
      time: '1 day ago',
      icon: Award,
      color: 'orange'
    },
    {
      id: 4,
      type: 'practice',
      title: 'Voice practice session completed',
      time: '2 days ago',
      icon: Mic,
      color: 'blue'
    }
  ];

  const upcomingLessons = [
    {
      id: 1,
      subject: 'Science',
      topic: 'Solar System',
      time: '10:00 AM',
      duration: '45 min',
      type: 'AR Learning'
    },
    {
      id: 2,
      subject: 'Mathematics',
      topic: 'Algebra Basics',
      time: '2:00 PM',
      duration: '30 min',
      type: 'AI Tutor'
    },
    {
      id: 3,
      subject: 'Language',
      topic: 'Hindi Grammar',
      time: '4:00 PM',
      duration: '25 min',
      type: 'Voice Teaching'
    }
  ];

  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'learning', label: 'Learning Modules', icon: BookOpen },
    { id: 'progress', label: 'Progress Tracking', icon: TrendingUp },
    { id: 'accessibility', label: 'Accessibility Tools', icon: Eye },
    { id: 'languages', label: 'Language Center', icon: Languages },
    { id: 'achievements', label: 'Achievements', icon: Award },
    { id: 'calendar', label: 'Schedule', icon: Calendar },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      green: 'bg-green-500/20 text-green-400 border-green-500/30',
      purple: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      orange: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
      pink: 'bg-pink-500/20 text-pink-400 border-pink-500/30',
      indigo: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-black border-r border-white/10 transform transition-transform duration-300 ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0`}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center space-x-3 p-6 border-b border-white/10">
            <div className="relative">
              <Brain className="w-8 h-8 text-white" />
              <div className="absolute inset-0 bg-white rounded-full opacity-0 hover:opacity-10 transition-opacity duration-300 blur-xl"></div>
            </div>
            <span className="text-xl font-bold tracking-tight">HoloLearn</span>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveModule(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                  activeModule === item.id
                    ? 'bg-white/10 text-white border border-white/20'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Offline Status */}
          <div className="p-4 border-t border-white/10">
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
              <div className="flex items-center space-x-2">
                {isOfflineMode ? (
                  <WifiOff className="w-4 h-4 text-green-400" />
                ) : (
                  <Wifi className="w-4 h-4 text-blue-400" />
                )}
                <span className="text-sm font-medium">
                  {isOfflineMode ? 'Offline Mode' : 'Online'}
                </span>
              </div>
              <button
                onClick={() => setIsOfflineMode(!isOfflineMode)}
                className="text-xs text-gray-400 hover:text-white transition-colors"
              >
                Toggle
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Header */}
        <header className="bg-black border-b border-white/10 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
              >
                {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
              
              <div>
                <h1 className="text-2xl font-bold">Welcome back, {userName}!</h1>
                <p className="text-gray-400 text-sm">
                  {currentTime.toLocaleDateString()} • {currentTime.toLocaleTimeString()}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search modules..."
                  className="pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/20 transition-colors"
                />
              </div>

              {/* Notifications */}
              <button className="relative p-2 rounded-lg hover:bg-white/5 transition-colors">
                <Bell className="w-5 h-5" />
                {notifications > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    {notifications}
                  </span>
                )}
              </button>

              {/* Profile */}
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4" />
                </div>
                <button className="hidden md:block text-sm font-medium hover:text-gray-300 transition-colors">
                  {userName}
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          {activeModule === 'overview' && (
            <div className="space-y-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-lg ${getColorClasses(stat.color)}`}>
                        <stat.icon className="w-6 h-6" />
                      </div>
                      <div className={`flex items-center space-x-1 text-sm ${
                        stat.trend === 'up' ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {stat.trend === 'up' ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
                        <span>{stat.change}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
                    <p className="text-gray-400 text-sm">{stat.title}</p>
                  </div>
                ))}
              </div>

              {/* Feature Modules Grid */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">Learning Modules</h2>
                  <button className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors">
                    <span>View All</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {features.map((feature) => (
                    <div key={feature.id} className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 group">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`p-3 rounded-lg ${getColorClasses(feature.color)}`}>
                          <feature.icon className="w-6 h-6" />
                        </div>
                        <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                          feature.status === 'active' 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-gray-500/20 text-gray-400'
                        }`}>
                          {feature.status}
                        </div>
                      </div>

                      <h3 className="text-lg font-semibold mb-2 group-hover:text-gray-200 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition-colors">
                        {feature.description}
                      </p>

                      {feature.progress > 0 && (
                        <div className="mb-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs text-gray-400">Progress</span>
                            <span className="text-xs text-gray-400">{feature.progress}%</span>
                          </div>
                          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-white rounded-full transition-all duration-500"
                              style={{ width: `${feature.progress}%` }}
                            />
                          </div>
                        </div>
                      )}

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">Last used: {feature.lastUsed}</span>
                        <button className="flex items-center space-x-1 text-sm text-white hover:text-gray-300 transition-colors">
                          <Play className="w-4 h-4" />
                          <span>Start</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Activity & Upcoming Lessons */}
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Recent Activities */}
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold">Recent Activities</h3>
                    <Activity className="w-5 h-5 text-gray-400" />
                  </div>
                  
                  <div className="space-y-4">
                    {recentActivities.map((activity) => (
                      <div key={activity.id} className="flex items-start space-x-4 p-3 rounded-lg hover:bg-white/5 transition-colors">
                        <div className={`p-2 rounded-lg ${getColorClasses(activity.color)}`}>
                          <activity.icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium mb-1">{activity.title}</p>
                          <p className="text-xs text-gray-400">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Upcoming Lessons */}
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold">Upcoming Lessons</h3>
                    <Calendar className="w-5 h-5 text-gray-400" />
                  </div>
                  
                  <div className="space-y-4">
                    {upcomingLessons.map((lesson) => (
                      <div key={lesson.id} className="p-4 border border-white/10 rounded-lg hover:border-white/20 transition-colors">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium">{lesson.subject}</h4>
                          <span className="text-xs bg-white/10 px-2 py-1 rounded-full">{lesson.type}</span>
                        </div>
                        <p className="text-sm text-gray-400 mb-2">{lesson.topic}</p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>{lesson.time}</span>
                          <span>{lesson.duration}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Other module content would go here */}
          {activeModule !== 'overview' && (
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 text-center">
              <div className="mb-4">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {sidebarItems.find(item => item.id === activeModule)?.label}
                </h3>
                <p className="text-gray-400">
                  This module is under development. Coming soon with advanced features!
                </p>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}

export default Dashboard;