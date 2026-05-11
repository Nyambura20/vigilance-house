/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Lock, User, ArrowRight, Loader2, CheckCircle, Briefcase, Users, MapPin, Phone, CreditCard, Image as ImageIcon, FileText } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import Logo from '../components/Logo';
import { useAuth } from '../contexts/AuthContext';

type UserType = 'client' | 'worker';

export default function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true);
  const [userType, setUserType] = useState<UserType>('client');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  // Shared fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [otpCode, setOtpCode] = useState('');
  const [preferredLanguage, setPreferredLanguage] = useState('');

  // Client additional fields
  const [kids, setKids] = useState('');
  
  // Worker additional fields
  const [areaOfWork, setAreaOfWork] = useState('');
  const [cv, setCv] = useState<File | null>(null);
  const [portfolio, setPortfolio] = useState('');
  const [certifications, setCertifications] = useState('');

  const { login, signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password || (!isLogin && !name)) {
      setError('Please fill in required fields (Name, Email, Password)');
      return;
    }

    if (!isLogin && !otpCode) {
      setError('Please enter the OTP code sent to your email.');
      return;
    }

    setLoading(true);
    try {
      if (isLogin) {
        await login(email, name || 'User', userType);
      } else {
        await signup(email, name, userType);
      }
      navigate('/dashboard');
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-slate-50 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[50%] bg-brand-green/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[50%] bg-brand-blue/5 blur-[120px] rounded-full" />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100"
      >
        {/* Form Section */}
        <div className="p-8 md:p-12 lg:p-16 space-y-8 overflow-y-auto max-h-[90vh]">
          <div className="space-y-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <Logo size={60} />
            </Link>
            <h1 className="text-3xl font-bold text-brand-blue">
              {isLogin ? 'Welcome Back' : 'Join Vigilance'}
            </h1>
            <p className="text-slate-600">
              {isLogin ? 'Enter your details to access your account.' : 'Join the most trusted platform for specialized home services.'}
            </p>
          </div>

          <div className="flex p-1.5 bg-slate-100 rounded-2xl">
            <button
              onClick={() => setUserType('client')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-black transition-all uppercase tracking-tight ${userType === 'client' ? 'bg-white text-brand-blue shadow-lg' : 'text-slate-500 hover:text-brand-blue'}`}
            >
              <Users className="w-4 h-4" /> Client
            </button>
            <button
              onClick={() => setUserType('worker')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-black transition-all uppercase tracking-tight ${userType === 'worker' ? 'bg-white text-brand-blue shadow-lg' : 'text-slate-500 hover:text-brand-blue'}`}
            >
              <Briefcase className="w-4 h-4" /> Professional
            </button>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {error && (
              <div className="p-3 bg-red-50 text-red-500 text-sm font-medium rounded-xl border border-red-100 italic">
                {error}
              </div>
            )}
            
            {!isLogin && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2 col-span-2 sm:col-span-1">
                  <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                    <input 
                      type="text" 
                      placeholder="Jane Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full h-11 pl-11 pr-4 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-blue/10 focus:border-brand-blue transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2 col-span-2 sm:col-span-1">
                  <label className="text-sm font-bold text-slate-700 ml-1">ID Number</label>
                  <div className="relative">
                    <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                    <input 
                      type="text" 
                      placeholder="National ID / Passport"
                      value={idNumber}
                      onChange={(e) => setIdNumber(e.target.value)}
                      className="w-full h-11 pl-11 pr-4 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-blue/10 focus:border-brand-blue transition-all"
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2 col-span-2 sm:col-span-1">
                <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                  <input 
                    type="email" 
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-11 pl-11 pr-4 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-blue/10 focus:border-brand-blue transition-all"
                  />
                </div>
              </div>
              
              {!isLogin && (
                <div className="space-y-2 col-span-2 sm:col-span-1">
                  <label className="text-sm font-bold text-slate-700 ml-1">Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                    <input 
                      type="text" 
                      placeholder="e.g. Nairobi, Kenya"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full h-11 pl-11 pr-4 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-blue/10 focus:border-brand-blue transition-all"
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between ml-1">
                <label className="text-sm font-bold text-slate-700">Password</label>
                {isLogin && <a href="#" className="text-xs font-bold text-brand-green hover:underline">Forgot password?</a>}
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                <input 
                  type="password" 
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-11 pl-11 pr-4 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-blue/10 focus:border-brand-blue transition-all"
                />
              </div>
            </div>

            {!isLogin && (
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">OTP Code</label>
                  <input 
                    type="text" 
                    placeholder="Enter Code"
                    value={otpCode}
                    onChange={(e) => setOtpCode(e.target.value)}
                    className="w-full h-11 px-4 rounded-xl bg-brand-green/5 border border-brand-green/20 focus:outline-none focus:ring-2 focus:ring-brand-green/10 focus:border-brand-green transition-all font-mono tracking-widest text-center"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Language</label>
                  <input 
                    type="text" 
                    placeholder="English / Swahili"
                    value={preferredLanguage}
                    onChange={(e) => setPreferredLanguage(e.target.value)}
                    className="w-full h-11 px-4 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-blue/10 focus:border-brand-blue transition-all"
                  />
                </div>
              </div>
            )}

            {!isLogin && userType === 'client' && (
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Number of Kids</label>
                <input 
                  type="number" 
                  placeholder="0"
                  value={kids}
                  onChange={(e) => setKids(e.target.value)}
                  className="w-full h-11 px-4 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-blue/10 focus:border-brand-blue transition-all"
                />
              </div>
            )}

            {!isLogin && userType === 'worker' && (
              <div className="space-y-4 pt-2">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Area of Specialization</label>
                  <select 
                    value={areaOfWork}
                    onChange={(e) => setAreaOfWork(e.target.value)}
                    className="w-full h-11 px-4 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-blue/10 focus:border-brand-blue transition-all"
                  >
                    <option value="">Select Category</option>
                    <option value="Nanny">Nanny / Childcare</option>
                    <option value="Housemaid">House Maid</option>
                    <option value="Housekeeper">House Keeper</option>
                    <option value="Cook">Professional Cook</option>
                    <option value="Gardener">Gardener</option>
                    <option value="Janitor">Janitor</option>
                    <option value="Laundry">Laundry Worker</option>
                    <option value="Caregiver">Caregiver / Home Nurse</option>
                    <option value="Delivery">Delivery Guy</option>
                    <option value="Casual">Casual Domestic Helper</option>
                    <option value="Technical">Technical Maintenance (Electrician/Plumber/etc)</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">ID Photos & CV</label>
                    <div className="relative group">
                      <input type="file" className="hidden" id="cv-upload" multiple />
                      <label htmlFor="cv-upload" className="w-full h-12 flex items-center justify-center gap-2 border-2 border-dashed border-slate-200 rounded-xl cursor-pointer hover:border-brand-blue hover:bg-brand-blue/5 transition-all text-xs font-bold uppercase tracking-tight text-slate-500">
                        <FileText className="w-4 h-4" /> CV / ID Docs
                       </label>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Profile Photo</label>
                    <div className="relative group">
                      <input type="file" className="hidden" id="photo-upload" />
                      <label htmlFor="photo-upload" className="w-full h-12 flex items-center justify-center gap-2 border-2 border-dashed border-slate-200 rounded-xl cursor-pointer hover:border-brand-blue hover:bg-brand-blue/5 transition-all text-xs font-bold uppercase tracking-tight text-slate-500">
                        <ImageIcon className="w-4 h-4" /> Upload Img
                      </label>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Portfolio Link / Certifications</label>
                  <input 
                    type="text" 
                    placeholder="URL or list certifications"
                    value={portfolio}
                    onChange={(e) => setPortfolio(e.target.value)}
                    className="w-full h-11 px-4 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-blue/10 focus:border-brand-blue transition-all"
                  />
                </div>
              </div>
            )}

            <Button type="submit" className="w-full h-14 text-lg !mt-8 shadow-xl shadow-brand-blue/20" onClick={() => {}}>
              {loading ? (
                <Loader2 className="w-6 h-6 animate-spin" />
              ) : (
                <>
                  {isLogin ? 'Sign In' : (userType === 'worker' ? 'Start Application' : 'Create Account')}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </>
              )}
            </Button>
          </form>

          {!isLogin && userType === 'worker' && (
            <p className="p-4 bg-brand-green/5 border border-brand-green/20 rounded-2xl text-[10px] text-slate-600 font-medium leading-relaxed">
              * Note: Professional applications are approved manually by our regional branch admin. You will be required to visit the nearest office for ID verification and NITA certification check.
            </p>
          )}

          <p className="text-center text-sm text-slate-500 font-medium">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="text-brand-green font-bold hover:underline"
            >
              {isLogin ? 'Sign up free' : 'Sign in here'}
            </button>
          </p>
        </div>

        {/* Benefits Section */}
        <div className="hidden md:block bg-brand-blue relative p-16 text-white overflow-hidden">
          <div className="absolute top-[-20%] left-[-20%] w-full h-[150%] bg-brand-green/20 blur-[100px] rounded-full rotate-45" />
          
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold leading-tight">Vigilance Platform: {userType === 'client' ? 'Find Trusted Help' : 'Professional Growth'}.</h2>
              <div className="space-y-8 mt-12">
                {[
                  { title: 'Identity Verified', desc: 'Every user is vetted with national IDs and localized background checks.' },
                  { title: 'Training cater by Company', desc: 'Technical workers undergo specialized training before joining the workforce.' },
                  { title: 'Automated Monitoring', desc: 'Stay connected with on-duty status and real-time location updates.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                      <CheckCircle className="w-5 h-5 text-brand-green" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-white/80 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 bg-white/5 backdrop-blur-md rounded-[2rem] border border-white/10">
              <p className="text-white italic mb-4">"Vigilance has completely changed how I manage my villa. The staff are professional, and the 25% commission is fair given the security and training provided."</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-green/20 border border-white/20 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover" alt="Testimonial" />
                </div>
                <div>
                  <p className="font-bold text-sm">Amara Okafor</p>
                  <p className="text-xs text-white/60">Home Owner, Runda</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
