import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { BarChart3, TrendingUp, Target, Award, Calendar, PieChart } from 'lucide-react';
import Layout from '../components/Layout';
import Navigation from '../components/Navigation';
import Card from '../components/Card';

const Analytics: React.FC = () => {
  const { isDark } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories', count: 24 },
    { id: 'curricular', name: 'Curricular', count: 8 },
    { id: 'co-curricular', name: 'Co-curricular', count: 10 },
    { id: 'extra-curricular', name: 'Extra-curricular', count: 6 }
  ];

  const monthlyData = [
    { month: 'Jan', curricular: 2, coCurricular: 3, extraCurricular: 1 },
    { month: 'Feb', curricular: 1, coCurricular: 4, extraCurricular: 2 },
    { month: 'Mar', curricular: 3, coCurricular: 2, extraCurricular: 1 },
    { month: 'Apr', curricular: 2, coCurricular: 1, extraCurricular: 2 },
  ];

  const stats = [
    { label: 'Total Points', value: '1,250', change: '+12%', color: 'from-purple-500 to-purple-600' },
    { label: 'This Month', value: '180', change: '+25%', color: 'from-blue-500 to-blue-600' },
    { label: 'Average/Month', value: '95', change: '+8%', color: 'from-green-500 to-green-600' },
    { label: 'Rank', value: '#3', change: '+2', color: 'from-yellow-500 to-yellow-600' }
  ];

  return (
    <Layout backgroundImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop&crop=top">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Analytics Dashboard
          </h1>
          <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Track your achievement progress and performance metrics
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {stat.label}
                  </p>
                  <p className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {stat.value}
                  </p>
                  <p className="text-sm text-green-600 font-medium">
                    {stat.change}
                  </p>
                </div>
                <div className={`p-3 rounded-lg bg-gradient-to-r ${stat.color}`}>
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Category Filter */}
          <div className="lg:col-span-1">
            <Card className="p-6">
              <h2 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Achievement Categories
              </h2>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left p-3 rounded-lg transition-all ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                        : isDark
                        ? 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{category.name}</span>
                      <span className="text-sm">{category.count}</span>
                    </div>
                  </button>
                ))}
              </div>
            </Card>

            {/* Monthly Progress */}
            <Card className="p-6 mt-6">
              <h2 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Monthly Progress
              </h2>
              <div className="space-y-4">
                {monthlyData.map((data, index) => (
                  <div key={index} className={`p-3 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {data.month}
                      </span>
                      <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {data.curricular + data.coCurricular + data.extraCurricular} total
                      </span>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-blue-600">Curricular: {data.curricular}</span>
                        <span className="text-purple-600">Co-curricular: {data.coCurricular}</span>
                        <span className="text-green-600">Extra-curricular: {data.extraCurricular}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Main Charts */}
          <div className="lg:col-span-2 space-y-6">
            {/* Performance Chart */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Performance Overview
                </h2>
                <TrendingUp className="h-5 w-5 text-green-600" />
              </div>
              <div className="h-64 flex items-end justify-between space-x-2">
                {monthlyData.map((data, index) => {
                  const total = data.curricular + data.coCurricular + data.extraCurricular;
                  const maxHeight = 200;
                  const height = (total / 10) * maxHeight;
                  
                  return (
                    <div key={index} className="flex-1 flex flex-col items-center">
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-t-lg overflow-hidden" style={{ height: `${maxHeight}px` }}>
                        <div className="w-full bg-gradient-to-t from-purple-600 to-blue-600 rounded-t-lg transition-all duration-300" style={{ height: `${height}px`, marginTop: `${maxHeight - height}px` }} />
                      </div>
                      <span className={`text-sm mt-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {data.month}
                      </span>
                    </div>
                  );
                })}
              </div>
            </Card>

            {/* Category Breakdown */}
            <Card className="p-6">
              <h2 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Category Breakdown
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-blue-50'}`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        Curricular
                      </p>
                      <p className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        8
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-purple-50'}`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        Co-curricular
                      </p>
                      <p className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        10
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-green-50'}`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        Extra-curricular
                      </p>
                      <p className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        6
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                      <PieChart className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Goals and Targets */}
            <Card className="p-6">
              <h2 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Goals & Targets
              </h2>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Monthly Achievement Goal
                    </span>
                    <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      5/8 completed
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full" style={{ width: '62.5%' }} />
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Points Target
                    </span>
                    <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      1,250/1,500 points
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-600 to-blue-600 h-2 rounded-full" style={{ width: '83.3%' }} />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Analytics;