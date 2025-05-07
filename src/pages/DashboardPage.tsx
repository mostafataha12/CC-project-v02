import React from 'react';
import { Link } from 'react-router-dom';
import { LineChart, BarChart, Calendar, MessageCircle, BookOpen, ExternalLink, ArrowRight } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const DashboardPage: React.FC = () => {
  const { currentUser } = useAuth();
  
  // Mock data for dashboard
  const recentActivity = [
    { date: '2023-11-15', action: 'Completed symptom assessment' },
    { date: '2023-11-10', action: 'Uploaded new images for detection' },
    { date: '2023-11-05', action: 'Chatbot session (15 min)' },
    { date: '2023-10-28', action: 'Profile information updated' },
  ];
  
  const upcomingEvents = [
    { date: '2023-12-05', title: 'Annual screening reminder', type: 'reminder' },
    { date: '2023-12-15', title: 'Virtual support group meeting', type: 'event' },
    { date: '2024-01-10', title: 'Doctor appointment', type: 'appointment' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome back, {currentUser?.name || 'User'}
          </h1>
          <p className="text-gray-600 mt-1">
            Track your progress, manage your health information, and access our tools
          </p>
        </div>

        {/* Quick Access Tools */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Link
            to="/detection"
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-blue-600"
          >
            <div className="mb-4 h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
              <LineChart className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Detection Tool
            </h2>
            <p className="text-gray-600 mb-4">
              Upload images for AI-powered analysis and early detection
            </p>
            <div className="flex items-center text-blue-600 font-medium">
              <span>Use tool</span>
              <ArrowRight className="h-4 w-4 ml-1" />
            </div>
          </Link>

          <Link
            to="/chatbot"
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-green-600"
          >
            <div className="mb-4 h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
              <MessageCircle className="h-6 w-6 text-green-600" />
            </div>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Chatbot Assistant
            </h2>
            <p className="text-gray-600 mb-4">
              Get answers to your questions about colon cancer
            </p>
            <div className="flex items-center text-green-600 font-medium">
              <span>Ask questions</span>
              <ArrowRight className="h-4 w-4 ml-1" />
            </div>
          </Link>

          <Link
            to="/resources"
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-purple-600"
          >
            <div className="mb-4 h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
              <BookOpen className="h-6 w-6 text-purple-600" />
            </div>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Resources Library
            </h2>
            <p className="text-gray-600 mb-4">
              Access educational materials about prevention and screening
            </p>
            <div className="flex items-center text-purple-600 font-medium">
              <span>Browse resources</span>
              <ArrowRight className="h-4 w-4 ml-1" />
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-sm p-6 lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
              <button className="text-sm text-blue-600 hover:text-blue-800">View all</button>
            </div>
            <div className="overflow-hidden">
              <div className="flex flex-col divide-y">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="py-4 flex items-start">
                    <div className="mr-4">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 text-blue-600">
                        <span className="text-xs font-medium">
                          {new Date(activity.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                        </span>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-900 font-medium">{activity.action}</p>
                      <p className="text-gray-500 text-sm">
                        {new Date(activity.date).toLocaleDateString(undefined, { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Upcoming */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Events</h2>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-3 flex-shrink-0">
                    <Calendar className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{event.title}</p>
                    <p className="text-gray-500 text-sm">
                      {new Date(event.date).toLocaleDateString(undefined, { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </p>
                    <div className="mt-1">
                      <span 
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          event.type === 'reminder' 
                            ? 'bg-yellow-100 text-yellow-800' 
                            : event.type === 'appointment'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}
                      >
                        {event.type}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-6 w-full text-center px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors">
              Add to Calendar
            </button>
          </div>
        </div>

        {/* Health Tips */}
        <div className="mt-8 bg-gradient-to-r from-blue-900 to-blue-700 rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 md:p-8 text-white">
            <h2 className="text-xl font-bold mb-4">Health Tip of the Day</h2>
            <p className="mb-4">
              Regular physical activity can reduce your risk of colon cancer. Aim for at least 30 minutes of 
              moderate to vigorous activity each day, and limit sedentary behaviors like sitting or lying down.
            </p>
            <a 
              href="https://www.cancer.org/cancer/risk-prevention/diet-physical-activity/get-active.html" 
              target="_blank"
              rel="noopener noreferrer" 
              className="inline-flex items-center text-blue-100 hover:text-white"
            >
              <span>Learn more about exercise and cancer prevention</span>
              <ExternalLink className="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-blue-600">
            <h3 className="text-sm font-medium text-gray-500 mb-1">Detection Scans</h3>
            <p className="text-2xl font-bold text-gray-900">3</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-green-600">
            <h3 className="text-sm font-medium text-gray-500 mb-1">Chat Sessions</h3>
            <p className="text-2xl font-bold text-gray-900">12</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-purple-600">
            <h3 className="text-sm font-medium text-gray-500 mb-1">Resources Saved</h3>
            <p className="text-2xl font-bold text-gray-900">7</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-yellow-600">
            <h3 className="text-sm font-medium text-gray-500 mb-1">Days Since Last Check</h3>
            <p className="text-2xl font-bold text-gray-900">5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;