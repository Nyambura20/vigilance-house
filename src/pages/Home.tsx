/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Star, Shield, Users, Video, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Logo from '../components/Logo';
import { useAuth } from '../contexts/AuthContext';
import { HOUSEHELP_PROFILES } from '../constants/data';

import electricianImg from '../assets/backgrounds/electrician.jpg';
import househelpImg from '../assets/backgrounds/househelp.jpg';
import plumberImg from '../assets/backgrounds/plumber.jpg';

const SLIDESHOW_IMAGES = [
  electricianImg,
  househelpImg,
  plumberImg
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const { user } = useAuth();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDESHOW_IMAGES.length);
    }, 7000); // 7 seconds per slide
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 md:pt-28 md:pb-32 min-h-[90vh] flex items-center">
        {/* Background Slideshow */}
        <div className="absolute inset-0 -z-10 overflow-hidden bg-brand-blue">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 3, ease: 'easeOut' }}
              className="absolute inset-0"
            >
              <img 
                src={SLIDESHOW_IMAGES[currentSlide]} 
                className="w-full h-full object-cover" 
                alt="Background"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-slate-900/60" />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn} className="space-y-8">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white/90 font-bold text-[10px] uppercase tracking-widest shadow-inner">
                <Logo size={24} />
                <span>Trusted by 5,000+ Kenyan Homes</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-bold text-white leading-[1] tracking-tight">
                Manage your home <br/> with <span className="text-brand-green italic font-medium text-glow italic">precision.</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl">
                Elevate your household standards with certified training, elite recruitment, and enterprise-grade monitoring.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/hire">
                  <Button className="w-full sm:w-auto h-14 px-10 text-lg shadow-xl shadow-brand-green/20">Hire a Professional</Button>
                </Link>
                {user?.role !== 'client' && (
                  <Link to="/train">
                    <Button variant="outline" className="w-full sm:w-auto h-14 px-10 text-lg border-white text-white hover:bg-white hover:text-brand-blue">Start Training</Button>
                  </Link>
                )}
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white/20 overflow-hidden bg-slate-200">
                      <img src={`https://i.pravatar.cc/150?u=${i}`} alt="User" />
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-white/80 font-medium">4.9/5 from 2,000+ happy clients</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              style={{ perspective: 1000 }}
              initial={{ opacity: 0, rotateY: 20 }}
              animate={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1581578731522-7b7547964301?q=80&w=800&auto=format&fit=crop" 
                  alt="Professional Service" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/60 to-transparent" />
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="font-display font-bold text-2xl">Certified Excellence</p>
                  <p className="text-white/80">Every professional is vetted and trained.</p>
                </div>
              </div>
              {/* Floating Element */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-10 -right-10 glass p-6 rounded-3xl shadow-xl z-20 hidden md:block"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-brand-green/20 p-3 rounded-2xl">
                    <Shield className="w-6 h-6 text-brand-green" />
                  </div>
                  <div>
                    <p className="font-bold text-brand-blue">Verified</p>
                    <p className="text-xs text-slate-600">Identity & Criminal Check</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-brand-green font-bold tracking-widest uppercase text-sm">Professional Ecosystem</h2>
            <p className="text-4xl md:text-5xl font-bold text-brand-blue">Total Peace of Mind for Your Home.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: 'Hire Smart', desc: 'Browse profiles and hire verified, high-rated professionals for your home.', path: '/hire' },
              ...(user?.role !== 'client' ? [{ icon: Video, title: 'Train Pros', desc: 'Access world-class courses designed to elevate domestic service standards.', path: '/train' }] : []),
              { icon: Search, title: 'Monitor Safety', desc: 'Real-time updates and management tools to ensure household efficiency.', path: '/monitor' }
            ].map((service, i) => (
              <Card key={i} className="p-10 space-y-6 text-center group">
                <div className="w-20 h-20 mx-auto rounded-[2rem] bg-slate-50 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-500">
                  <service.icon className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-brand-blue">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.desc}</p>
                <Link to={service.path} className="inline-flex items-center gap-2 text-brand-green font-bold group-hover:gap-4 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Profiles */}
      <section className="py-24 bg-slate-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">Top Professionals Available Now</h2>
              <p className="text-slate-600">Our highest-rated graduates are ready to help your family thrive.</p>
            </div>
            <Link to="/hire">
              <Button variant="outline">View All Profiles</Button>
            </Link>
          </div>

          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {HOUSEHELP_PROFILES.map((profile) => (
              <motion.div key={profile.id} variants={fadeIn}>
                <Card className="p-0 overflow-hidden h-full flex flex-col">
                  <div className="relative h-64">
                    <img src={profile.image} alt={profile.name} className="w-full h-full object-cover" />
                    <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full text-xs font-bold text-brand-blue">
                      {profile.price.monthly || profile.price}
                    </div>
                  </div>
                  <div className="p-6 flex-grow space-y-4">
                    <div>
                      <h4 className="font-bold text-xl text-brand-blue">{profile.name}</h4>
                      <p className="text-sm text-brand-green font-medium">{profile.role}</p>
                    </div>
                    <div className="flex items-center gap-1 text-amber-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-slate-700 text-sm font-bold">{profile.rating}</span>
                      <span className="text-slate-500 text-xs font-medium">({profile.reviews} reviews)</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {profile.skills.slice(0, 2).map((skill, i) => (
                        <span key={i} className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-slate-100 text-slate-600 rounded-md">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <Link to={`/hire/${profile.id}`} className="block">
                      <Button variant="outline" className="w-full py-2">View Profile</Button>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container-custom">
          <div className="bg-brand-blue rounded-[3rem] p-12 md:p-24 overflow-hidden relative">
            <div className="absolute top-[-50%] right-[-10%] w-[60%] h-[150%] bg-brand-green/20 blur-[100px] rounded-full rotate-45" />
            
            <div className="relative z-10 max-w-2xl text-white space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold leading-tight">Ready to Transform Your Home Office?</h2>
              <p className="text-xl text-white/80 leading-relaxed">
                Join thousands of families who have found peace, security, and professional standards through Vigilance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" className="h-14 px-10 text-lg">Create Your Account</Button>
                <Button variant="ghost" className="h-14 px-10 text-lg text-white hover:bg-white/10">Contact Sales</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
