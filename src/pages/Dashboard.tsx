import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { Trophy, TrendingUp, Users, Award, Calendar, Target } from 'lucide-react';
import Layout from '../components/Layout';
import Navigation from '../components/Navigation';
import Card from '../components/Card';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const { isDark } = useTheme();

  const stats = [
    { label: 'Total Achievements', value: '24', icon: Trophy, color: 'from-purple-500 to-purple-600' },
    { label: 'This Month', value: '5', icon: TrendingUp, color: 'from-blue-500 to-blue-600' },
    { label: 'Rank', value: '#3', icon: Users, color: 'from-green-500 to-green-600' },
    { label: 'Points', value: '1,250', icon: Award, color: 'from-yellow-500 to-yellow-600' },
  ];

  const recentAchievements = [
    {
      title: 'Winner - Coding Competition',
      category: 'Co-curricular',
      date: '2024-01-15',
      points: 100
    },
    {
      title: 'Research Paper Published',
      category: 'Curricular',
      date: '2024-01-10',
      points: 150
    },
    {
      title: 'Volunteer - Blood Donation Camp',
      category: 'Extra-curricular',
      date: '2024-01-05',
      points: 75
    }
  ];

  const upcomingEvents = [
    { title: 'Technical Symposium', date: '2024-02-01', type: 'Competition' },
    { title: 'Project Review', date: '2024-02-05', type: 'Academic' },
    { title: 'Sports Meet', date: '2024-02-10', type: 'Sports' }
  ];

  return (
    <Layout backgroundImage="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=1920&h=1080&fit=crop&crop=top">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Welcome back, {user?.name}!
          </h1>
          <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Track your achievements and see your progress
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="p-6">
                <div className="flex items-center">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${stat.color}`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <p className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {stat.label}
                    </p>
                    <p className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {stat.value}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Achievements */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Recent Achievements
                </h2>
                <Trophy className="h-5 w-5 text-purple-600" />
              </div>
              <div className="space-y-4">
                {recentAchievements.map((achievement, index) => (
                  <div key={index} className={`p-4 rounded-lg border ${isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'}`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          {achievement.title}
                        </h3>
                        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          {achievement.category} • {achievement.date}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                          +{achievement.points} pts
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Upcoming Events */}
          <div>
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Upcoming Events
                </h2>
                <Calendar className="h-5 w-5 text-purple-600" />
              </div>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className={`p-3 rounded-lg border ${isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'}`}>
                    <h3 className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {event.title}
                    </h3>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {event.type} • {event.date}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <Card className="p-6">
            <h2 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Quick Actions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="flex items-center justify-center p-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105">
                <Trophy className="h-5 w-5 mr-2" />
                Add Achievement
              </button>
              <button className={`flex items-center justify-center p-4 ${isDark ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'} rounded-lg transition-all transform hover:scale-105`}>
                <Target className="h-5 w-5 mr-2" />
                Set Goal
              </button>
              <button className={`flex items-center justify-center p-4 ${isDark ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'} rounded-lg transition-all transform hover:scale-105`}>
                <TrendingUp className="h-5 w-5 mr-2" />
                View Analytics
              </button>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;