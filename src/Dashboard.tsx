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
  Activity,
  Home,
  FileText,
  Video,
  Image,
  MessageSquare,
  Send,
  Maximize2,
  Minimize2,
  RotateCcw,
  Save,
  Share2,
  Filter,
  SortAsc,
  Edit3,
  Trash2,
  MoreHorizontal,
  ChevronLeft,
  ChevronDown,
  ChevronUp
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
  const [isRecording, setIsRecording] = useState(false);
  const [isTranslating, setIsTranslating] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('hindi');
  const [arMode, setArMode] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [currentLesson, setCurrentLesson] = useState(null);
  const [progressData, setProgressData] = useState({});
  const [achievements, setAchievements] = useState([]);

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

  const languages = [
    { code: 'hindi', name: 'Hindi', native: 'हिन्दी' },
    { code: 'english', name: 'English', native: 'English' },
    { code: 'bengali', name: 'Bengali', native: 'বাংলা' },
    { code: 'tamil', name: 'Tamil', native: 'தமிழ்' },
    { code: 'telugu', name: 'Telugu', native: 'తెలుగు' },
    { code: 'marathi', name: 'Marathi', native: 'मराठी' },
    { code: 'gujarati', name: 'Gujarati', native: 'ગુજરાતી' },
    { code: 'kannada', name: 'Kannada', native: 'ಕನ್ನಡ' },
    { code: 'malayalam', name: 'Malayalam', native: 'മലയാളം' },
    { code: 'punjabi', name: 'Punjabi', native: 'ਪੰਜਾਬੀ' }
  ];

  const subjects = [
    { id: 'math', name: 'Mathematics', icon: Target, lessons: 24, completed: 18 },
    { id: 'science', name: 'Science', icon: Zap, lessons: 32, completed: 20 },
    { id: 'english', name: 'English', icon: BookOpen, lessons: 28, completed: 22 },
    { id: 'history', name: 'History', icon: Clock, lessons: 20, completed: 15 },
    { id: 'geography', name: 'Geography', icon: Globe, lessons: 18, completed: 12 }
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
    { id: 'ai-tutor', label: 'AI Tutor', icon: Brain },
    { id: 'sign-language', label: 'Sign Language', icon: Users },
    { id: 'translation', label: 'Translation', icon: Languages },
    { id: 'ar-learning', label: 'AR Learning', icon: Eye },
    { id: 'voice-teaching', label: 'Voice Teaching', icon: Headphones },
    { id: 'adaptive-curriculum', label: 'Curriculum', icon: Target },
    { id: 'progress', label: 'Progress', icon: TrendingUp },
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

  // Feature Functions
  const startAITutor = () => {
    setActiveModule('ai-tutor');
    console.log('Starting AI Tutor...');
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    console.log(isRecording ? 'Stopping recording...' : 'Starting recording...');
  };

  const startTranslation = () => {
    setIsTranslating(true);
    setTimeout(() => setIsTranslating(false), 3000);
    console.log('Starting translation...');
  };

  const toggleARMode = () => {
    setArMode(!arMode);
    console.log(arMode ? 'Exiting AR mode...' : 'Entering AR mode...');
  };

  const toggleVoice = () => {
    setVoiceEnabled(!voiceEnabled);
    console.log(voiceEnabled ? 'Voice disabled' : 'Voice enabled');
  };

  const startLesson = (lessonId: string) => {
    setCurrentLesson(lessonId);
    console.log(`Starting lesson: ${lessonId}`);
  };

  const saveProgress = () => {
    console.log('Progress saved!');
    // Simulate saving progress
  };

  // Render different modules based on activeModule
  const renderModuleContent = () => {
    switch (activeModule) {
      case 'ai-tutor':
        return (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold">AI Tutor</h2>
              <div className="flex items-center space-x-4">
                <button
                  onClick={toggleVoice}
                  className={`p-3 rounded-lg transition-all duration-300 ${
                    voiceEnabled ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'
                  }`}
                >
                  {voiceEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
                </button>
                <button
                  onClick={() => setIsOfflineMode(!isOfflineMode)}
                  className={`p-3 rounded-lg transition-all duration-300 ${
                    isOfflineMode ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
                  }`}
                >
                  {isOfflineMode ? <WifiOff className="w-5 h-5" /> : <Wifi className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold">Current Session</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm text-green-400">Active</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                      <div>
                        <h4 className="font-medium">Mathematics - Algebra</h4>
                        <p className="text-sm text-gray-400">Solving quadratic equations</p>
                      </div>
                      <button
                        onClick={() => startLesson('math-algebra')}
                        className="flex items-center space-x-2 px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-all duration-300"
                      >
                        <Play className="w-4 h-4" />
                        <span>Continue</span>
                      </button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 bg-white/5 rounded-lg">
                        <div className="flex items-center space-x-3 mb-3">
                          <Target className="w-5 h-5 text-orange-400" />
                          <span className="font-medium">Progress</span>
                        </div>
                        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-orange-400 rounded-full" style={{ width: '75%' }}></div>
                        </div>
                        <p className="text-sm text-gray-400 mt-2">75% Complete</p>
                      </div>

                      <div className="p-4 bg-white/5 rounded-lg">
                        <div className="flex items-center space-x-3 mb-3">
                          <Clock className="w-5 h-5 text-blue-400" />
                          <span className="font-medium">Time Spent</span>
                        </div>
                        <p className="text-2xl font-bold">2h 15m</p>
                        <p className="text-sm text-gray-400">Today</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-6">AI Recommendations</h3>
                  <div className="space-y-4">
                    {[
                      { subject: 'Mathematics', topic: 'Practice more word problems', difficulty: 'Medium' },
                      { subject: 'Science', topic: 'Review periodic table', difficulty: 'Easy' },
                      { subject: 'English', topic: 'Grammar exercises', difficulty: 'Hard' }
                    ].map((rec, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                        <div>
                          <h4 className="font-medium">{rec.subject}</h4>
                          <p className="text-sm text-gray-400">{rec.topic}</p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            rec.difficulty === 'Easy' ? 'bg-green-500/20 text-green-400' :
                            rec.difficulty === 'Medium' ? 'bg-orange-500/20 text-orange-400' :
                            'bg-red-500/20 text-red-400'
                          }`}>
                            {rec.difficulty}
                          </span>
                          <button className="p-2 hover:bg-white/10 rounded-lg transition-all duration-300">
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                  <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <button
                      onClick={() => startLesson('new')}
                      className="w-full flex items-center space-x-3 p-3 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-all duration-300"
                    >
                      <Plus className="w-5 h-5" />
                      <span>Start New Lesson</span>
                    </button>
                    <button
                      onClick={saveProgress}
                      className="w-full flex items-center space-x-3 p-3 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition-all duration-300"
                    >
                      <Save className="w-5 h-5" />
                      <span>Save Progress</span>
                    </button>
                    <button className="w-full flex items-center space-x-3 p-3 bg-purple-500/20 text-purple-400 rounded-lg hover:bg-purple-500/30 transition-all duration-300">
                      <Share2 className="w-5 h-5" />
                      <span>Share Achievement</span>
                    </button>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                  <h3 className="text-lg font-semibold mb-4">Learning Stats</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Accuracy Rate</span>
                      <span className="font-semibold">94%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Streak</span>
                      <span className="font-semibold">12 days</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Level</span>
                      <span className="font-semibold">Intermediate</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'sign-language':
        return (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold">Sign Language Recognition</h2>
              <div className="flex items-center space-x-4">
                <button
                  onClick={toggleRecording}
                  className={`p-3 rounded-lg transition-all duration-300 ${
                    isRecording ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'
                  }`}
                >
                  {isRecording ? <Pause className="w-5 h-5" /> : <Camera className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
                <h3 className="text-xl font-semibold mb-6">Camera Feed</h3>
                <div className="aspect-video bg-white/10 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-center">
                    <Camera className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                    <p className="text-gray-400">
                      {isRecording ? 'Recording sign language...' : 'Click to start camera'}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center space-x-4">
                  <button
                    onClick={toggleRecording}
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                      isRecording 
                        ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30' 
                        : 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
                    }`}
                  >
                    {isRecording ? 'Stop Recording' : 'Start Recording'}
                  </button>
                  <button className="px-6 py-3 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-all duration-300">
                    Calibrate
                  </button>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                  <h3 className="text-lg font-semibold mb-4">Recognition Output</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-white/5 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <MessageSquare className="w-4 h-4 text-blue-400" />
                        <span className="text-sm font-medium">Detected Text</span>
                      </div>
                      <p className="text-lg">Hello, how are you?</p>
                    </div>
                    
                    <div className="p-4 bg-white/5 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Volume2 className="w-4 h-4 text-green-400" />
                        <span className="text-sm font-medium">Speech Output</span>
                      </div>
                      <button className="flex items-center space-x-2 px-4 py-2 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition-all duration-300">
                        <Play className="w-4 h-4" />
                        <span>Play Audio</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                  <h3 className="text-lg font-semibold mb-4">Recognition Stats</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Accuracy</span>
                      <span className="font-semibold text-green-400">98.5%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Response Time</span>
                      <span className="font-semibold">0.3s</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Gestures Learned</span>
                      <span className="font-semibold">247</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                  <h3 className="text-lg font-semibold mb-4">Practice Mode</h3>
                  <div className="space-y-3">
                    <button className="w-full flex items-center space-x-3 p-3 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-all duration-300">
                      <BookOpen className="w-5 h-5" />
                      <span>Learn New Signs</span>
                    </button>
                    <button className="w-full flex items-center space-x-3 p-3 bg-purple-500/20 text-purple-400 rounded-lg hover:bg-purple-500/30 transition-all duration-300">
                      <Target className="w-5 h-5" />
                      <span>Practice Quiz</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'translation':
        return (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold">Multilingual Translation</h2>
              <div className="flex items-center space-x-4">
                <select
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-white/20"
                >
                  {languages.map((lang) => (
                    <option key={lang.code} value={lang.code} className="bg-black">
                      {lang.name} ({lang.native})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
                <h3 className="text-xl font-semibold mb-6">Input</h3>
                <div className="space-y-4">
                  <textarea
                    placeholder="Type or speak your message..."
                    className="w-full h-32 p-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/20 resize-none"
                  />
                  
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={toggleRecording}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                        isRecording ? 'bg-red-500/20 text-red-400' : 'bg-blue-500/20 text-blue-400'
                      }`}
                    >
                      <Mic className="w-4 h-4" />
                      <span>{isRecording ? 'Stop' : 'Voice Input'}</span>
                    </button>
                    
                    <button className="flex items-center space-x-2 px-4 py-2 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition-all duration-300">
                      <Image className="w-4 h-4" />
                      <span>Image Text</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
                <h3 className="text-xl font-semibold mb-6">Translation Output</h3>
                <div className="space-y-4">
                  <div className="h-32 p-4 bg-white/5 border border-white/10 rounded-lg">
                    <p className="text-lg">
                      {isTranslating ? 'Translating...' : 'Translation will appear here'}
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={startTranslation}
                      disabled={isTranslating}
                      className="flex items-center space-x-2 px-6 py-2 bg-purple-500/20 text-purple-400 rounded-lg hover:bg-purple-500/30 transition-all duration-300 disabled:opacity-50"
                    >
                      {isTranslating ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                      <span>{isTranslating ? 'Translating...' : 'Translate'}</span>
                    </button>
                    
                    <button className="flex items-center space-x-2 px-4 py-2 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition-all duration-300">
                      <Volume2 className="w-4 h-4" />
                      <span>Play Audio</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-6">Language Support</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {languages.map((lang) => (
                  <div
                    key={lang.code}
                    className={`p-4 rounded-lg border transition-all duration-300 cursor-pointer ${
                      selectedLanguage === lang.code
                        ? 'bg-purple-500/20 border-purple-500/30 text-purple-400'
                        : 'bg-white/5 border-white/10 hover:border-white/20'
                    }`}
                    onClick={() => setSelectedLanguage(lang.code)}
                  >
                    <h4 className="font-medium">{lang.name}</h4>
                    <p className="text-sm text-gray-400">{lang.native}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'ar-learning':
        return (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold">AR Holographic Learning</h2>
              <div className="flex items-center space-x-4">
                <button
                  onClick={toggleARMode}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    arMode ? 'bg-orange-500/20 text-orange-400' : 'bg-blue-500/20 text-blue-400'
                  }`}
                >
                  {arMode ? 'Exit AR' : 'Enter AR'}
                </button>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
                <h3 className="text-xl font-semibold mb-6">3D Learning Environment</h3>
                <div className="aspect-video bg-white/10 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-center">
                    <Eye className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                    <p className="text-gray-400">
                      {arMode ? 'AR Mode Active - Point camera at surface' : 'Click Enter AR to start'}
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <button className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                    <Globe className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                    <p className="text-sm font-medium">Solar System</p>
                  </button>
                  <button className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                    <Zap className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
                    <p className="text-sm font-medium">Atoms</p>
                  </button>
                  <button className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                    <Target className="w-8 h-8 mx-auto mb-2 text-green-400" />
                    <p className="text-sm font-medium">Geometry</p>
                  </button>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                  <h3 className="text-lg font-semibold mb-4">AR Controls</h3>
                  <div className="space-y-3">
                    <button className="w-full flex items-center space-x-3 p-3 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-all duration-300">
                      <Maximize2 className="w-5 h-5" />
                      <span>Zoom In</span>
                    </button>
                    <button className="w-full flex items-center space-x-3 p-3 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-all duration-300">
                      <Minimize2 className="w-5 h-5" />
                      <span>Zoom Out</span>
                    </button>
                    <button className="w-full flex items-center space-x-3 p-3 bg-purple-500/20 text-purple-400 rounded-lg hover:bg-purple-500/30 transition-all duration-300">
                      <RotateCcw className="w-5 h-5" />
                      <span>Rotate</span>
                    </button>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                  <h3 className="text-lg font-semibold mb-4">Learning Modules</h3>
                  <div className="space-y-3">
                    {subjects.slice(0, 3).map((subject) => (
                      <div key={subject.id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                        <div className="flex items-center space-x-3">
                          <subject.icon className="w-5 h-5 text-blue-400" />
                          <span className="font-medium">{subject.name}</span>
                        </div>
                        <button className="p-1 hover:bg-white/10 rounded">
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'voice-teaching':
        return (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold">Voice + Image Teaching</h2>
              <div className="flex items-center space-x-4">
                <button
                  onClick={toggleVoice}
                  className={`p-3 rounded-lg transition-all duration-300 ${
                    voiceEnabled ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'
                  }`}
                >
                  {voiceEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
                <h3 className="text-xl font-semibold mb-6">Audio Lesson</h3>
                <div className="space-y-6">
                  <div className="p-6 bg-white/5 rounded-lg">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                        <Headphones className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-medium">Mathematics - Fractions</h4>
                        <p className="text-sm text-gray-400">Chapter 3: Adding Fractions</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <button className="p-3 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition-all duration-300">
                        <Play className="w-5 h-5" />
                      </button>
                      <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-green-400 rounded-full" style={{ width: '35%' }}></div>
                      </div>
                      <span className="text-sm text-gray-400">3:45 / 10:30</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium">Audio Controls</h4>
                    <div className="grid grid-cols-3 gap-3">
                      <button className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 text-center">
                        <Volume2 className="w-5 h-5 mx-auto mb-1" />
                        <span className="text-xs">Volume</span>
                      </button>
                      <button className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 text-center">
                        <Zap className="w-5 h-5 mx-auto mb-1" />
                        <span className="text-xs">Speed</span>
                      </button>
                      <button className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 text-center">
                        <Languages className="w-5 h-5 mx-auto mb-1" />
                        <span className="text-xs">Language</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
                <h3 className="text-xl font-semibold mb-6">Visual Aids</h3>
                <div className="space-y-6">
                  <div className="aspect-video bg-white/10 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Image className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                      <p className="text-gray-400">Visual content synchronized with audio</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium">Accessibility Options</h4>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-3">
                        <input type="checkbox" className="rounded" defaultChecked />
                        <span className="text-sm">High Contrast Mode</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input type="checkbox" className="rounded" defaultChecked />
                        <span className="text-sm">Large Text</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Audio Descriptions</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-6">Available Lessons</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {subjects.map((subject) => (
                  <div key={subject.id} className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center space-x-3 mb-3">
                      <subject.icon className="w-6 h-6 text-blue-400" />
                      <h4 className="font-medium">{subject.name}</h4>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                      <span>{subject.lessons} lessons</span>
                      <span>{subject.completed} completed</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mb-3">
                      <div 
                        className="h-full bg-blue-400 rounded-full" 
                        style={{ width: `${(subject.completed / subject.lessons) * 100}%` }}
                      ></div>
                    </div>
                    <button className="w-full py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-all duration-300">
                      Continue Learning
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'adaptive-curriculum':
        return (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold">Adaptive Curriculum</h2>
              <button className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-all duration-300">
                Customize Path
              </button>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-6">Your Learning Path</h3>
                  <div className="space-y-4">
                    {[
                      { subject: 'Mathematics', level: 'Intermediate', progress: 75, status: 'active' },
                      { subject: 'Science', level: 'Beginner', progress: 45, status: 'active' },
                      { subject: 'English', level: 'Advanced', progress: 90, status: 'completed' },
                      { subject: 'History', level: 'Intermediate', progress: 30, status: 'upcoming' }
                    ].map((item, index) => (
                      <div key={index} className="p-4 bg-white/5 rounded-lg">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <h4 className="font-medium">{item.subject}</h4>
                            <p className="text-sm text-gray-400">{item.level} Level</p>
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            item.status === 'active' ? 'bg-blue-500/20 text-blue-400' :
                            item.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                            'bg-gray-500/20 text-gray-400'
                          }`}>
                            {item.status}
                          </span>
                        </div>
                        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mb-3">
                          <div 
                            className="h-full bg-blue-400 rounded-full transition-all duration-500" 
                            style={{ width: `${item.progress}%` }}
                          ></div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-400">{item.progress}% Complete</span>
                          <button className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
                            View Details
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-6">Recommended Next Steps</h3>
                  <div className="space-y-4">
                    {[
                      { title: 'Complete Algebra Basics', subject: 'Mathematics', time: '30 min', difficulty: 'Medium' },
                      { title: 'Learn about Photosynthesis', subject: 'Science', time: '45 min', difficulty: 'Easy' },
                      { title: 'Practice Grammar Rules', subject: 'English', time: '20 min', difficulty: 'Hard' }
                    ].map((rec, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                        <div>
                          <h4 className="font-medium">{rec.title}</h4>
                          <p className="text-sm text-gray-400">{rec.subject} • {rec.time}</p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            rec.difficulty === 'Easy' ? 'bg-green-500/20 text-green-400' :
                            rec.difficulty === 'Medium' ? 'bg-orange-500/20 text-orange-400' :
                            'bg-red-500/20 text-red-400'
                          }`}>
                            {rec.difficulty}
                          </span>
                          <button className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-all duration-300">
                            Start
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                  <h3 className="text-lg font-semibold mb-4">Learning Preferences</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Learning Style</label>
                      <select className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-white/20">
                        <option value="visual" className="bg-black">Visual</option>
                        <option value="auditory" className="bg-black">Auditory</option>
                        <option value="kinesthetic" className="bg-black">Kinesthetic</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Difficulty Level</label>
                      <select className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-white/20">
                        <option value="beginner" className="bg-black">Beginner</option>
                        <option value="intermediate" className="bg-black">Intermediate</option>
                        <option value="advanced" className="bg-black">Advanced</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Daily Goal (minutes)</label>
                      <input 
                        type="range" 
                        min="15" 
                        max="120" 
                        defaultValue="60"
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-gray-400 mt-1">
                        <span>15 min</span>
                        <span>120 min</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                  <h3 className="text-lg font-semibold mb-4">Performance Analytics</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Average Score</span>
                      <span className="font-semibold text-green-400">87%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Learning Streak</span>
                      <span className="font-semibold">15 days</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Time Spent Today</span>
                      <span className="font-semibold">2h 30m</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Weak Areas</span>
                      <span className="font-semibold text-orange-400">2</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'progress':
        return (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold">Progress Tracking</h2>
              <div className="flex items-center space-x-4">
                <button className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-all duration-300">
                  <Filter className="w-4 h-4 mr-2 inline" />
                  Filter
                </button>
                <button className="px-4 py-2 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition-all duration-300">
                  <Download className="w-4 h-4 mr-2 inline" />
                  Export
                </button>
              </div>
            </div>

            <div className="grid lg:grid-cols-4 gap-6 mb-8">
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

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
                <h3 className="text-xl font-semibold mb-6">Subject Progress</h3>
                <div className="space-y-4">
                  {subjects.map((subject) => (
                    <div key={subject.id} className="p-4 bg-white/5 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <subject.icon className="w-5 h-5 text-blue-400" />
                          <span className="font-medium">{subject.name}</span>
                        </div>
                        <span className="text-sm text-gray-400">
                          {subject.completed}/{subject.lessons}
                        </span>
                      </div>
                      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-400 rounded-full transition-all duration-500" 
                          style={{ width: `${(subject.completed / subject.lessons) * 100}%` }}
                        ></div>
                      </div>
                      <p className="text-sm text-gray-400 mt-2">
                        {Math.round((subject.completed / subject.lessons) * 100)}% Complete
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
                <h3 className="text-xl font-semibold mb-6">Weekly Activity</h3>
                <div className="space-y-4">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                    <div key={day} className="flex items-center space-x-4">
                      <span className="w-8 text-sm text-gray-400">{day}</span>
                      <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-green-400 rounded-full" 
                          style={{ width: `${Math.random() * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-400 w-12">
                        {Math.floor(Math.random() * 120)}m
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-6">Recent Activities</h3>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                    <div className={`p-2 rounded-lg ${getColorClasses(activity.color)}`}>
                      <activity.icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium mb-1">{activity.title}</p>
                      <p className="text-sm text-gray-400">{activity.time}</p>
                    </div>
                    <button className="p-2 hover:bg-white/10 rounded-lg transition-all duration-300">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'achievements':
        return (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold">Achievements</h2>
              <button className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-all duration-300">
                <Share2 className="w-4 h-4 mr-2 inline" />
                Share Progress
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'First Steps', description: 'Complete your first lesson', icon: Star, earned: true, date: '2 days ago' },
                { title: 'Quick Learner', description: 'Complete 5 lessons in one day', icon: Zap, earned: true, date: '1 day ago' },
                { title: 'Polyglot', description: 'Learn in 3 different languages', icon: Languages, earned: true, date: '3 hours ago' },
                { title: 'Streak Master', description: 'Maintain a 7-day learning streak', icon: Target, earned: false, progress: 5 },
                { title: 'AR Explorer', description: 'Complete 10 AR lessons', icon: Eye, earned: false, progress: 3 },
                { title: 'Voice Champion', description: 'Use voice features 50 times', icon: Mic, earned: false, progress: 23 }
              ].map((achievement, index) => (
                <div key={index} className={`p-6 rounded-xl border transition-all duration-300 ${
                  achievement.earned 
                    ? 'bg-yellow-500/10 border-yellow-500/30' 
                    : 'bg-white/5 border-white/10 hover:border-white/20'
                }`}>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`p-3 rounded-lg ${
                      achievement.earned 
                        ? 'bg-yellow-500/20 text-yellow-400' 
                        : 'bg-gray-500/20 text-gray-400'
                    }`}>
                      <achievement.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{achievement.title}</h3>
                      <p className="text-sm text-gray-400">{achievement.description}</p>
                    </div>
                  </div>
                  
                  {achievement.earned ? (
                    <div className="flex items-center space-x-2 text-sm text-yellow-400">
                      <CheckCircle className="w-4 h-4" />
                      <span>Earned {achievement.date}</span>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Progress</span>
                        <span className="text-gray-400">{achievement.progress}/10</span>
                      </div>
                      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-400 rounded-full transition-all duration-500" 
                          style={{ width: `${(achievement.progress / 10) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-6">Achievement Statistics</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">3</div>
                  <p className="text-sm text-gray-400">Badges Earned</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">15</div>
                  <p className="text-sm text-gray-400">Day Streak</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">92%</div>
                  <p className="text-sm text-gray-400">Completion Rate</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">247</div>
                  <p className="text-sm text-gray-400">Total Points</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'calendar':
        return (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold">Learning Schedule</h2>
              <button className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-all duration-300">
                <Plus className="w-4 h-4 mr-2 inline" />
                Add Event
              </button>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
                <h3 className="text-xl font-semibold mb-6">This Week</h3>
                <div className="space-y-4">
                  {upcomingLessons.map((lesson) => (
                    <div key={lesson.id} className="p-4 border border-white/10 rounded-lg hover:border-white/20 transition-all duration-300">
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

              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                  <h3 className="text-lg font-semibold mb-4">Today's Goals</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <input type="checkbox" className="rounded" defaultChecked />
                      <span className="text-sm line-through text-gray-400">Complete Math lesson</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Practice Hindi translation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Review Science notes</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                  <h3 className="text-lg font-semibold mb-4">Study Reminders</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <div>
                        <p className="text-sm font-medium">Math Quiz</p>
                        <p className="text-xs text-gray-400">Tomorrow 2:00 PM</p>
                      </div>
                      <button className="text-xs text-blue-400 hover:text-blue-300">
                        Edit
                      </button>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <div>
                        <p className="text-sm font-medium">Science Project</p>
                        <p className="text-xs text-gray-400">Due Friday</p>
                      </div>
                      <button className="text-xs text-blue-400 hover:text-blue-300">
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'settings':
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Settings</h2>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                  <h3 className="text-lg font-semibold mb-4">Account Settings</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Display Name</label>
                      <input 
                        type="text" 
                        defaultValue={userName}
                        className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-white/20"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input 
                        type="email" 
                        defaultValue="student@hololearn.com"
                        className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-white/20"
                      />
                    </div>
                    <button className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-all duration-300">
                      Update Profile
                    </button>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                  <h3 className="text-lg font-semibold mb-4">Learning Preferences</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Primary Language</label>
                      <select className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-white/20">
                        {languages.map((lang) => (
                          <option key={lang.code} value={lang.code} className="bg-black">
                            {lang.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Difficulty Level</label>
                      <select className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-white/20">
                        <option value="beginner" className="bg-black">Beginner</option>
                        <option value="intermediate" className="bg-black">Intermediate</option>
                        <option value="advanced" className="bg-black">Advanced</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                  <h3 className="text-lg font-semibold mb-4">Accessibility</h3>
                  <div className="space-y-4">
                    <label className="flex items-center justify-between">
                      <span className="text-sm">High Contrast Mode</span>
                      <input type="checkbox" className="rounded" />
                    </label>
                    <label className="flex items-center justify-between">
                      <span className="text-sm">Large Text</span>
                      <input type="checkbox" className="rounded" />
                    </label>
                    <label className="flex items-center justify-between">
                      <span className="text-sm">Voice Navigation</span>
                      <input type="checkbox" className="rounded" defaultChecked />
                    </label>
                    <label className="flex items-center justify-between">
                      <span className="text-sm">Screen Reader Support</span>
                      <input type="checkbox" className="rounded" />
                    </label>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                  <h3 className="text-lg font-semibold mb-4">Notifications</h3>
                  <div className="space-y-4">
                    <label className="flex items-center justify-between">
                      <span className="text-sm">Learning Reminders</span>
                      <input type="checkbox" className="rounded" defaultChecked />
                    </label>
                    <label className="flex items-center justify-between">
                      <span className="text-sm">Achievement Alerts</span>
                      <input type="checkbox" className="rounded" defaultChecked />
                    </label>
                    <label className="flex items-center justify-between">
                      <span className="text-sm">Progress Updates</span>
                      <input type="checkbox" className="rounded" />
                    </label>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                  <h3 className="text-lg font-semibold mb-4">Data & Privacy</h3>
                  <div className="space-y-3">
                    <button className="w-full text-left px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                      Download My Data
                    </button>
                    <button className="w-full text-left px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                      Privacy Settings
                    </button>
                    <button className="w-full text-left px-4 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-all duration-300">
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
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
                      <button 
                        onClick={() => setActiveModule(feature.id)}
                        className="flex items-center space-x-1 text-sm text-white hover:text-gray-300 transition-colors"
                      >
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
        );
    }
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
              <button 
                onClick={() => setNotifications(0)}
                className="relative p-2 rounded-lg hover:bg-white/5 transition-colors"
              >
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
          {renderModuleContent()}
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