import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Trophy, Medal, Award, Crown, TrendingUp, Users } from 'lucide-react';
import Layout from '../components/Layout';
import Navigation from '../components/Navigation';
import Card from '../components/Card';

const Leaderboard: React.FC = () => {
  const { isDark } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('overall');

  const categories = [
    { id: 'overall', name: 'Overall', icon: Trophy },
    { id: 'curricular', name: 'Curricular', icon: Award },
    { id: 'co-curricular', name: 'Co-curricular', icon: Medal },
    { id: 'extra-curricular', name: 'Extra-curricular', icon: Users }
  ];

  const leaderboardData = [
    {
      rank: 1,
      name: 'Sarah Johnson',
      course: 'Computer Science',
      year: '4th Year',
      points: 1850,
      achievements: 32,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b93c?w=150&h=150&fit=crop&crop=face',
      change: 0
    },
    {
      rank: 2,
      name: 'Michael Chen',
      course: 'Engineering',
      year: '3rd Year',
      points: 1720,
      achievements: 28,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      change: 1
    },
    {
      rank: 3,
      name: 'John Doe',
      course: 'Computer Science',
      year: '3rd Year',
      points: 1250,
      achievements: 24,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      change: -1
    },
    {
      rank: 4,
      name: 'Emily Rodriguez',
      course: 'Mathematics',
      year: '2nd Year',
      points: 1180,
      achievements: 22,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      change: 2
    },
    {
      rank: 5,
      name: 'David Kim',
      course: 'Physics',
      year: '4th Year',
      points: 1150,
      achievements: 21,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      change: -1
    },
    {
      rank: 6,
      name: 'Lisa Thompson',
      course: 'Chemistry',
      year: '3rd Year',
      points: 1090,
      achievements: 20,
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
      change: 0
    },
    {
      rank: 7,
      name: 'Alex Martinez',
      course: 'Biology',
      year: '2nd Year',
      points: 980,
      achievements: 18,
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
      change: 1
    },
    {
      rank: 8,
      name: 'Jennifer Lee',
      course: 'Economics',
      year: '4th Year',
      points: 920,
      achievements: 17,
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face',
      change: -2
    }
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="h-6 w-6 text-yellow-500" />;
      case 2:
        return <Medal className="h-6 w-6 text-gray-400" />;
      case 3:
        return <Award className="h-6 w-6 text-amber-600" />;
      default:
        return <span className={`text-lg font-bold ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{rank}</span>;
    }
  };

  const getChangeIndicator = (change: number) => {
    if (change > 0) {
      return <div className="flex items-center text-green-600 text-sm">
        <TrendingUp className="h-4 w-4 mr-1" />
        +{change}
      </div>;
    } else if (change < 0) {
      return <div className="flex items-center text-red-600 text-sm">
        <TrendingUp className="h-4 w-4 mr-1 rotate-180" />
        {change}
      </div>;
    }
    return <div className="text-gray-400 text-sm">-</div>;
  };

  return (
    <Layout backgroundImage="https://images.unsplash.com/photo-1517971129774-39b2c6e2a532?w=1920&h=1080&fit=crop&crop=top">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            College Leaderboard
          </h1>
          <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            See how you rank against your peers
          </p>
        </div>

        {/* Category Selector */}
        <Card className="p-6 mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                      : isDark
                      ? 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>
        </Card>

        {/* Top 3 Podium */}
        <Card className="p-8 mb-8">
          <div className="flex justify-center items-end space-x-8">
            {/* Second Place */}
            <div className="text-center">
              <div className="relative">
                <img
                  className="h-20 w-20 rounded-full mx-auto mb-4"
                  src={leaderboardData[1].avatar}
                  alt={leaderboardData[1].name}
                />
                <div className="absolute -top-2 -right-2 bg-gray-400 rounded-full p-2">
                  <Medal className="h-4 w-4 text-white" />
                </div>
              </div>
              <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {leaderboardData[1].name}
              </h3>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {leaderboardData[1].points} points
              </p>
              <div className="mt-2 bg-gray-400 h-20 rounded-t-lg flex items-end justify-center">
                <span className="text-white font-bold mb-2">2</span>
              </div>
            </div>

            {/* First Place */}
            <div className="text-center">
              <div className="relative">
                <img
                  className="h-24 w-24 rounded-full mx-auto mb-4"
                  src={leaderboardData[0].avatar}
                  alt={leaderboardData[0].name}
                />
                <div className="absolute -top-2 -right-2 bg-yellow-500 rounded-full p-2">
                  <Crown className="h-4 w-4 text-white" />
                </div>
              </div>
              <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {leaderboardData[0].name}
              </h3>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {leaderboardData[0].points} points
              </p>
              <div className="mt-2 bg-gradient-to-t from-yellow-500 to-yellow-400 h-32 rounded-t-lg flex items-end justify-center">
                <span className="text-white font-bold mb-2">1</span>
              </div>
            </div>

            {/* Third Place */}
            <div className="text-center">
              <div className="relative">
                <img
                  className="h-20 w-20 rounded-full mx-auto mb-4"
                  src={leaderboardData[2].avatar}
                  alt={leaderboardData[2].name}
                />
                <div className="absolute -top-2 -right-2 bg-amber-600 rounded-full p-2">
                  <Award className="h-4 w-4 text-white" />
                </div>
              </div>
              <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {leaderboardData[2].name}
              </h3>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {leaderboardData[2].points} points
              </p>
              <div className="mt-2 bg-amber-600 h-16 rounded-t-lg flex items-end justify-center">
                <span className="text-white font-bold mb-2">3</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Full Leaderboard */}
        <Card className="overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Full Rankings
            </h2>
          </div>
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {leaderboardData.map((student, index) => (
              <div key={student.rank} className="px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-8 h-8">
                      {getRankIcon(student.rank)}
                    </div>
                    <img
                      className="h-12 w-12 rounded-full"
                      src={student.avatar}
                      alt={student.name}
                    />
                    <div>
                      <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {student.name}
                      </h3>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {student.course} • {student.year}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-8">
                    <div className="text-center">
                      <p className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        Achievements
                      </p>
                      <p className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {student.achievements}
                      </p>
                    </div>
                    <div className="text-center">
                      <p className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        Points
                      </p>
                      <p className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {student.points}
                      </p>
                    </div>
                    <div className="text-center min-w-[60px]">
                      <p className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        Change
                      </p>
                      {getChangeIndicator(student.change)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default Leaderboard;