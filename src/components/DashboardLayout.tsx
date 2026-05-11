import React, { useState } from 'react';
import { motion } from 'motion/react';
import { LayoutDashboard, Users, BookOpen, Settings, CreditCard, Shield, User, LogOut, Bell, Search, Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Button from './ui/Button';
import Logo from './Logo';

export default function DashboardLayout() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const clientItems = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'My Professionals', path: '/dashboard/employees', icon: Users },
    { name: 'Hire', path: '/hire', icon: Search },
    { name: 'Monitor', path: '/monitor', icon: BookOpen },
    { name: 'Payments', path: '/dashboard/payments', icon: CreditCard },
    { name: 'Security', path: '/dashboard/security', icon: Shield },
    { name: 'Profile', path: '/dashboard/profile', icon: User },
  ];

  const workerItems = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'News', path: '/dashboard/news', icon: BookOpen },
    { name: 'Impact', path: '/dashboard/impact', icon: Users },
    { name: 'Notifications', path: '/dashboard/notifications', icon: Bell },
    { name: 'My Profile', path: '/dashboard/profile', icon: User },
    { name: 'Settings', path: '/dashboard/settings', icon: Settings },
  ];

  const navItems = user?.role === 'worker' ? workerItems : clientItems;

  const [isOnDuty, setIsOnDuty] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col md:flex-row">
      {/* Mobile Header */}
      <div className="lg:hidden bg-white border-b border-slate-200 px-5 py-3 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-2">
          <Logo size={32} />
          <span className="font-bold text-brand-blue">Vigilance</span>
        </div>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 text-slate-500">
          {isSidebarOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 lg:sticky lg:top-0 lg:h-screen transition-transform duration-300 transform
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="h-full flex flex-col p-5">
          <div className="hidden lg:flex items-center gap-3 mb-8">
            <Logo size={40} />
            <span className="font-bold text-xl text-brand-blue tracking-tight">Vigilance</span>
          </div>

          {user?.role === 'worker' && (
            <div className="mb-6 p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Duty Status</span>
                <span className={`w-2 h-2 rounded-full ${isOnDuty ? 'bg-brand-green animate-pulse' : 'bg-slate-300'}`} />
              </div>
              <button 
                onClick={() => setIsOnDuty(!isOnDuty)}
                className={`w-full py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-500 flex items-center justify-center gap-2 ${isOnDuty ? 'bg-brand-green text-white shadow-xl shadow-brand-green/30 active:scale-95' : 'bg-slate-100 text-slate-600 border border-slate-200 hover:border-brand-green hover:text-brand-green hover:bg-white shadow-sm'}`}
              >
                <div className={`w-2 h-2 rounded-full ${isOnDuty ? 'bg-white animate-pulse' : 'bg-slate-300'}`} />
                {isOnDuty ? 'System Active' : 'Go On Duty'}
              </button>
            </div>
          )}

          <nav className="space-y-0.5 flex-grow overflow-y-auto">
            {navItems.map((item) => (
              <Link 
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${isActive(item.path) ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/20' : 'text-slate-500 hover:bg-slate-50 hover:text-brand-blue'}`}
              >
                <item.icon className="w-4 h-4" />
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="mt-6 flex flex-col gap-2">
            <button 
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-bold text-slate-400 hover:text-red-500 hover:bg-red-50 transition-all"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>

          <div className="mt-4 p-4 border border-slate-100 rounded-2xl flex items-center gap-3">
             <div className="w-10 h-10 rounded-xl bg-brand-blue flex items-center justify-center text-white font-bold shrink-0">
               {user?.name?.[0] || 'U'}
             </div>
             <div className="overflow-hidden">
               <p className="text-xs font-bold text-brand-blue truncate">{user?.name || 'User'}</p>
               <p className="text-[10px] text-slate-600 font-medium truncate">{user?.email || 'user@example.com'}</p>
             </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-grow flex flex-col min-w-0">
        {/* Main Content Header */}
        <header className="hidden lg:flex h-16 bg-white border-b border-slate-200 px-8 items-center justify-between sticky top-0 z-30">
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input type="text" placeholder="Search for employees, monitoring, payments..." className="w-full h-10 pl-10 pr-4 bg-slate-50 border border-slate-100 rounded-xl text-xs focus:ring-2 focus:ring-brand-blue/10 outline-none transition-all focus:bg-white" />
          </div>
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-400 hover:bg-slate-50 transition-colors relative">
              <Bell className="w-5 h-5" />
              <div className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
            </button>
            <div className="h-6 w-[1px] bg-slate-200 mx-2" />
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center border border-slate-200">
                <User className="text-slate-400 w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-slate-600">{user?.name}</span>
            </div>
          </div>
        </header>

        <main className="p-6 md:p-10 max-w-[1600px] flex-grow">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </main>

        <footer className="px-10 py-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">
            &copy; 2024 Vigilance AI Oversight • <span className="text-brand-green">System Live</span>
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[9px] font-black text-slate-500 hover:text-brand-blue uppercase tracking-widest transition-colors">Privacy</a>
            <a href="#" className="text-[9px] font-black text-slate-500 hover:text-brand-blue uppercase tracking-widest transition-colors">Compliance</a>
            <a href="#" className="text-[9px] font-black text-slate-500 hover:text-brand-blue uppercase tracking-widest transition-colors">Support</a>
          </div>
        </footer>
      </div>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[45] lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}
