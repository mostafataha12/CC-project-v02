import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  name?: string;
}

interface AuthContextType {
  currentUser: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signInWithFacebook: () => Promise<void>;
  signUp: (email: string, password: string, name?: string) => Promise<void>;
  signOut: () => Promise<void>;
}

// Create context with default values
const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  loading: true,
  signIn: async () => {},
  signInWithGoogle: async () => {},
  signInWithFacebook: async () => {},
  signUp: async () => {},
  signOut: async () => {},
});

// Custom hook to use auth context
export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Mock authentication - in a real app, replace with actual auth
  const mockUser = {
    id: '1234567890',
    email: 'user@example.com',
    name: 'Demo User',
  };

  useEffect(() => {
    // Check if user is stored in localStorage (simulating persistent auth)
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Sign in with email/password
  const signIn = async (email: string, password: string) => {
    try {
      // Mock authentication - replace with actual auth in production
      setCurrentUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
    } catch (error) {
      console.error('Error signing in:', error);
      throw error;
    }
  };

  // Sign in with Google
  const signInWithGoogle = async () => {
    try {
      // Mock Google auth - replace with actual auth in production
      setCurrentUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
    } catch (error) {
      console.error('Error signing in with Google:', error);
      throw error;
    }
  };

  // Sign in with Facebook
  const signInWithFacebook = async () => {
    try {
      // Mock Facebook auth - replace with actual auth in production
      setCurrentUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
    } catch (error) {
      console.error('Error signing in with Facebook:', error);
      throw error;
    }
  };

  // Sign up with email/password
  const signUp = async (email: string, password: string, name?: string) => {
    try {
      // Mock sign up - replace with actual sign up in production
      const newUser = { ...mockUser, email, name: name || mockUser.name };
      setCurrentUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));
    } catch (error) {
      console.error('Error signing up:', error);
      throw error;
    }
  };

  // Sign out
  const signOut = async () => {
    try {
      // Mock sign out - replace with actual sign out in production
      setCurrentUser(null);
      localStorage.removeItem('user');
    } catch (error) {
      console.error('Error signing out:', error);
      throw error;
    }
  };

  const value = {
    currentUser,
    loading,
    signIn,
    signInWithGoogle,
    signInWithFacebook,
    signUp,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};