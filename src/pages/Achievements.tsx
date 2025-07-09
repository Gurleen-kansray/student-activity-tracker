import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Trophy, Plus, Calendar, Tag, Award, Filter, Search } from 'lucide-react';
import Layout from '../components/Layout';
import Navigation from '../components/Navigation';
import Card from '../components/Card';

const Achievements: React.FC = () => {
  const { isDark } = useTheme();
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const achievements = [
    {
      id: 1,
      title: 'First Place - National Coding Competition',
      category: 'co-curricular',
      date: '2024-01-15',
      points: 150,
      description: 'Won first place in the national-level coding competition with over 1000 participants.',
      image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=200&fit=crop&crop=top'
    },
    {
      id: 2,
      title: 'Research Paper Published',
      category: 'curricular',
      date: '2024-01-10',
      points: 200,
      description: 'Published research paper on machine learning applications in healthcare.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=200&fit=crop&crop=top'
    },
    {
      id: 3,
      title: 'Blood Donation Camp Volunteer',
      category: 'extra-curricular',
      date: '2024-01-05',
      points: 75,
      description: 'Volunteered at the college blood donation camp, helping save lives.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=200&fit=crop&crop=center'
    },
    {
      id: 4,
      title: 'Dean\'s List - Fall 2023',
      category: 'curricular',
      date: '2023-12-01',
      points: 100,
      description: 'Achieved Dean\'s List recognition for academic excellence.',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=400&h=200&fit=crop&crop=top'
    },
    {
      id: 5,
      title: 'Hackathon Winner - Tech Fest 2023',
      category: 'co-curricular',
      date: '2023-11-20',
      points: 120,
      description: 'Won the 24-hour hackathon with an innovative mobile application.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=200&fit=crop&crop=top'
    },
    {
      id: 6,
      title: 'Community Service Award',
      category: 'extra-curricular',
      date: '2023-11-15',
      points: 90,
      description: 'Recognized for outstanding community service and social impact.',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=200&fit=crop&crop=center'
    }
  ];

  const filteredAchievements = achievements.filter(achievement => {
    const matchesFilter = filter === 'all' || achievement.category === filter;
    const matchesSearch = achievement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         achievement.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'curricular':
        return 'from-blue-500 to-blue-600';
      case 'co-curricular':
        return 'from-purple-500 to-purple-600';
      case 'extra-curricular':
        return 'from-green-500 to-green-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <Layout backgroundImage="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1920&h=1080&fit=crop&crop=top">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              My Achievements
            </h1>
            <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Showcase your accomplishments and track your progress
            </p>
          </div>
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-all transform hover:scale-105">
            <Plus className="h-5 w-5" />
            <span>Add Achievement</span>
          </button>
        </div>

        {/* Filters and Search */}
        <Card className="p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className={`px-3 py-2 rounded-md border ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
              >
                <option value="all">All Categories</option>
                <option value="curricular">Curricular</option>
                <option value="co-curricular">Co-curricular</option>
                <option value="extra-curricular">Extra-curricular</option>
              </select>
            </div>
            <div className="flex items-center space-x-2 flex-1">
              <Search className="h-5 w-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search achievements..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`flex-1 px-3 py-2 rounded-md border ${isDark ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'}`}
              />
            </div>
          </div>
        </Card>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAchievements.map((achievement) => (
            <Card key={achievement.id} className="overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${getCategoryColor(achievement.category)}`}>
                    {achievement.category.charAt(0).toUpperCase() + achievement.category.slice(1).replace('-', ' ')}
                  </span>
                  <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                    +{achievement.points} pts
                  </span>
                </div>
                <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {achievement.title}
                </h3>
                <p className={`text-sm mb-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {achievement.description}
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{achievement.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Award className="h-4 w-4" />
                    <span>{achievement.points} points</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredAchievements.length === 0 && (
          <div className="text-center py-12">
            <Trophy className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              No achievements found
            </h3>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {searchTerm || filter !== 'all' ? 'Try adjusting your search or filters.' : 'Start adding your achievements to build your portfolio!'}
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Achievements;