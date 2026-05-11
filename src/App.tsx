/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Train from './pages/Train';
import Hire from './pages/Hire';
import Monitor from './pages/Monitor';
import LoginSignup from './pages/LoginSignup';
import AboutContact from './pages/AboutContact';
import NotFound from './pages/NotFound';
import ProfileDetail from './pages/ProfileDetail';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext';
import DashboardLayout from './components/DashboardLayout';
import DashboardOverview from './pages/dashboard/Overview';
import Employees from './pages/dashboard/Employees';
import Payments from './pages/dashboard/Payments';
import Security from './pages/dashboard/Security';
import Profile from './pages/dashboard/Profile';
import News from './pages/dashboard/News';
import Impact from './pages/dashboard/Impact';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/train" element={<Train />} />
            <Route path="/login" element={<LoginSignup />} />
            <Route path="/signup" element={<LoginSignup />} />
            <Route path="/about" element={<AboutContact />} />
            
            {/* Protected Dashboard Routes */}
            <Route element={<ProtectedRoute />}>
              <Route element={<DashboardLayout />}>
                <Route path="/dashboard" element={<DashboardOverview />} />
                <Route path="/dashboard/employees" element={<Employees />} />
                <Route path="/dashboard/payments" element={<Payments />} />
                <Route path="/dashboard/security" element={<Security />} />
                <Route path="/dashboard/news" element={<News />} />
                <Route path="/dashboard/impact" element={<Impact />} />
                <Route path="/dashboard/profile" element={<Profile />} />
                <Route path="/dashboard/settings" element={<div className="p-8">Settings Coming Soon</div>} />
                <Route path="/hire" element={<Hire />} />
                <Route path="/hire/:id" element={<ProfileDetail />} />
                <Route path="/monitor" element={<Monitor />} />
              </Route>
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}
