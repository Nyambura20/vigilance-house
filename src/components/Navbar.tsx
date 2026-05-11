/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, LogOut, LayoutDashboard, Bell, Settings, User } from 'lucide-react';
import Button from './ui/Button';
import Logo from './Logo';
import { useAuth } from '../contexts/AuthContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    ...(user && user.role !== 'client' ? [{ name: 'Train', path: '/train' }] : []),
    { name: 'Hire', path: '/hire' },
    { name: 'Monitor', path: '/monitor' },
    { name: 'About', path: '/about' },
  ];

  const isHome = location.pathname === '/';

  // Logged in navbar is much smaller/compact
  const navbarClasses = user 
    ? `fixed w-full z-50 transition-all duration-300 border-b glass py-2.5 shadow-sm border-slate-200/30`
    : `fixed w-full z-50 transition-all duration-300 border-b glass ${scrolled ? 'py-3 shadow-lg border-slate-200/50' : 'py-5 border-slate-200/20'}`;

  return (
    <nav className={navbarClasses}>
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <Logo size={user ? 48 : 64} className="group-hover:scale-105 transition-transform duration-300" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {!user ? (
            <>
              {navLinks.map((link) => {
                const isActionLink = ['Train', 'Hire', 'Monitor'].includes(link.name);
                const isActive = location.pathname === link.path;
                
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`
                      text-sm font-bold transition-all duration-300
                      ${isActionLink 
                        ? `px-5 py-2 rounded-full border-2 
                           ${isActive ? 'border-brand-green text-brand-green bg-brand-green/5 shadow-sm' : 'border-brand-blue/10 text-brand-blue hover:border-brand-green hover:text-brand-green hover:bg-brand-green/5'}
                           hover:scale-105 active:scale-95
                          `
                        : `hover:text-brand-green ${isActive ? 'text-brand-green' : 'text-slate-600'}`
                      }
                    `}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="flex items-center gap-3 ml-4">
                <Link to="/login">
                  <Button variant="ghost">Login</Button>
                </Link>
                <Link to="/signup">
                  <Button variant="primary">Get Started</Button>
                </Link>
              </div>
            </>
          ) : (
            <div className="flex items-center gap-4">
               {/* Search bar could also go here if needed, but instructions say specific icons */}
               <button className="p-2 text-slate-400 hover:text-brand-blue transition-colors relative">
                  <Bell className="w-5 h-5" />
                  <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
               </button>
               <Link to="/dashboard/settings" className="p-2 text-slate-400 hover:text-brand-blue transition-colors">
                  <Settings className="w-5 h-5" />
               </Link>
               <div className="h-6 w-[1px] bg-slate-200 mx-1" />
               <Link to="/dashboard" className="flex items-center gap-3 group">
                  <div className="text-right">
                    <p className="text-xs font-bold text-brand-blue leading-tight">{user.name}</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">Client Dashboard</p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-brand-blue/5 border border-brand-blue/10 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all">
                    <User className="w-5 h-5" />
                  </div>
               </Link>
            </div>
          )}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 transition-colors text-brand-blue" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/20 overflow-hidden"
          >
            <div className="container-custom py-6 flex flex-col gap-3">
              {!user ? (
                <>
                  {navLinks.map((link) => {
                    const isActionLink = ['Train', 'Hire', 'Monitor'].includes(link.name);
                    const isActive = location.pathname === link.path;
                    
                    return (
                      <Link
                        key={link.name}
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`
                          text-lg font-bold px-4 py-3 rounded-xl transition-all duration-300
                          ${isActionLink 
                            ? isActive 
                              ? 'bg-brand-green text-white shadow-lg border-2 border-brand-green' 
                              : 'border-2 border-brand-blue/10 text-brand-blue bg-white/50'
                            : isActive ? 'text-brand-green bg-brand-green/5' : 'text-slate-700 hover:bg-slate-50'
                          }
                        `}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                  <hr className="border-slate-200" />
                  <Link to="/login" onClick={() => setIsOpen(false)} className="text-lg font-medium text-slate-700">Login</Link>
                  <Link to="/signup" onClick={() => setIsOpen(false)}>
                    <Button className="w-full">Sign Up Free</Button>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/dashboard" onClick={() => setIsOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-brand-blue/5 text-brand-blue font-bold">
                    <LayoutDashboard className="w-5 h-5" /> Dashboard
                  </Link>
                  <Link to="/dashboard/profile" onClick={() => setIsOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 text-slate-700 font-bold">
                    <User className="w-5 h-5" /> Profile
                  </Link>
                  <Link to="/dashboard/settings" onClick={() => setIsOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 text-slate-700 font-bold">
                    <Settings className="w-5 h-5" /> Settings
                  </Link>
                  <button 
                    onClick={() => { logout(); setIsOpen(false); navigate('/'); }}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-50 text-red-500 font-bold"
                  >
                    <LogOut className="w-5 h-5" /> Logout
                  </button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
