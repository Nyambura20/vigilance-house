/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'client' | 'admin' | 'worker';
}

interface AuthContextType {
  user: User | null;
  login: (email: string, name: string, role?: 'client' | 'admin' | 'worker') => Promise<void>;
  signup: (email: string, name: string, role?: 'client' | 'admin' | 'worker') => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for stored session
    const storedUser = localStorage.getItem('vigilance_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, name: string = 'User', role: 'client' | 'admin' | 'worker' = 'client') => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Simple heuristic for admin: email contains "admin"
    const finalRole = email.toLowerCase().includes('admin') ? 'admin' : role;
    const newUser: User = { id: Math.random().toString(36).substr(2, 9), email, name, role: finalRole as 'client' | 'admin' | 'worker' };
    setUser(newUser);
    localStorage.setItem('vigilance_user', JSON.stringify(newUser));
    setIsLoading(false);
  };

  const signup = async (email: string, name: string, role: 'client' | 'admin' | 'worker' = 'client') => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    const finalRole = email.toLowerCase().includes('admin') ? 'admin' : role;
    const newUser: User = { id: Math.random().toString(36).substr(2, 9), email, name, role: finalRole as 'client' | 'admin' | 'worker' };
    setUser(newUser);
    localStorage.setItem('vigilance_user', JSON.stringify(newUser));
    setIsLoading(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('vigilance_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
