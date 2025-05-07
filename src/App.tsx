import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';

// Layout
import Layout from './components/layout/Layout';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ResourcesPage from './pages/ResourcesPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import DetectionPage from './pages/DetectionPage';
import ChatbotPage from './pages/ChatbotPage';
import DashboardPage from './pages/DashboardPage';
import NotFoundPage from './pages/NotFoundPage';

// Protected Route Component
import ProtectedRoute from './components/auth/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="resources" element={<ResourcesPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="signin" element={<SignInPage />} />
            <Route path="signup" element={<SignUpPage />} />
            
            {/* Protected Routes */}
            <Route 
              path="dashboard" 
              element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} 
            />
            <Route 
              path="detection" 
              element={<ProtectedRoute><DetectionPage /></ProtectedRoute>} 
            />
            <Route 
              path="chatbot" 
              element={<ProtectedRoute><ChatbotPage /></ProtectedRoute>} 
            />
            
            {/* 404 Page */}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;