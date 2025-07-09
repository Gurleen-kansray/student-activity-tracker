import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { Award, TrendingUp, Users, BarChart3, Moon, Sun } from 'lucide-react';
import Layout from '../components/Layout';

const Landing: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  
  const features = [
    {
      icon: Award,
      title: 'Track Achievements',
      description: 'Monitor and showcase your academic and extracurricular accomplishments'
    },
    {
      icon: TrendingUp,
      title: 'Progress Analytics',
      description: 'Visualize your growth with detailed analytics and insights'
    },
    {
      icon: Users,
      title: 'College Leaderboard',
      description: 'Compare your achievements with peers across the institution'
    },
    {
      icon: BarChart3,
      title: 'Performance Metrics',
      description: 'Categorize achievements into curricular, co-curricular, and extracurricular'
    }
  ];

  return (
    <Layout backgroundImage="https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=1920&h=1080&fit=crop&crop=top">
      <div className="relative">
        {/* Header */}
        <header className="absolute top-0 left-0 right-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-2">
                <Award className="h-8 w-8 text-purple-400" />
                <span className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  AchieveTracker
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={toggleTheme}
                  className={`p-2 rounded-md ${isDark ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'}`}
                >
                  {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </button>
                <Link
                  to="/auth"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Track Your Academic
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                {' '}Journey
              </span>
            </h1>
            <p className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Showcase your achievements, monitor your progress, and compete with peers in a comprehensive student achievement tracking platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/auth"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all transform hover:scale-105 shadow-lg"
              >
                Start Tracking Now
              </Link>
              <Link
                to="/auth"
                className={`${isDark ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-white hover:bg-gray-50 text-gray-900'} px-8 py-4 rounded-lg text-lg font-medium transition-all transform hover:scale-105 shadow-lg border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Why Choose AchieveTracker?
              </h2>
              <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Everything you need to track, analyze, and showcase your academic journey
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={index}
                    className={`${isDark ? 'bg-gray-800/90' : 'bg-white/90'} backdrop-blur-md p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300`}
                  >
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg mb-4">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {feature.title}
                    </h3>
                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className={`${isDark ? 'bg-gray-800/90' : 'bg-white/90'} backdrop-blur-md rounded-2xl p-12 shadow-lg`}>
              <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Ready to Start Your Journey?
              </h2>
              <p className={`text-xl mb-8 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Join thousands of students who are already tracking their achievements and building their portfolios.
              </p>
              <Link
                to="/auth"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all transform hover:scale-105 shadow-lg"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Landing;