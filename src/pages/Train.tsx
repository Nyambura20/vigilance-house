/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { PlayCircle, Clock, BookOpen, Award, CheckCircle2 } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { useAuth } from '../contexts/AuthContext';
import { TRAINING_COURSES } from '../constants/data';

export default function Train() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role === 'client') {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  if (user?.role === 'client') return null;

  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-brand-blue text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-green/10 blur-3xl rounded-full" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Master Household Excellence</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Elevate your skills and earning potential with our industry-leading certification programs. From housekeeping to advanced culinary arts.
            </p>
            <div className="flex gap-4">
              <Button variant="secondary">Browse All Courses</Button>
              <Button variant="ghost" className="text-white">Learn About Certification</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="container-custom -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRAINING_COURSES.map((course) => (
            <Card key={course.id} className="p-0 overflow-hidden group">
              <div className="h-56 relative overflow-hidden">
                <img 
                  src={course.thumbnail} 
                  alt={course.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <PlayCircle className="w-16 h-16 text-white" />
                </div>
                <div className="absolute top-4 left-4 glass px-3 py-1 rounded-full text-xs font-bold text-brand-blue uppercase tracking-wider">
                  {course.level}
                </div>
              </div>
              <div className="p-8 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-brand-blue leading-tight">{course.title}</h3>
                  <p className="text-slate-500 flex items-center gap-2 text-sm">
                    <Award className="w-4 h-4 text-brand-green" /> Instructor: {course.instructor}
                  </p>
                </div>
                <div className="flex items-center justify-between py-4 border-y border-slate-100 text-sm font-medium text-slate-600">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" /> {course.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4" /> 12 Modules
                  </div>
                </div>
                <Button className="w-full">Enroll Now</Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-brand-blue">Why Train with Vigilance?</h2>
            <div className="space-y-6">
              {[
                { title: 'Global Standards', desc: 'Our curriculum is designed by hospitality experts to meet international service standards.' },
                { title: 'Certification', desc: 'Receive a verifiable digital certificate recognized by top employers in Kenya and abroad.' },
                { title: 'Job Placement', desc: 'Top graduates get priority access to our exclusive "Hire" marketplace.' },
                { title: 'Expert Instruction', desc: 'Learn from seasoned professionals with years of experience in high-end households.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="bg-brand-green/10 p-2 rounded-lg h-fit">
                    <CheckCircle2 className="w-6 h-6 text-brand-green" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-blue text-lg">{item.title}</h4>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="h-14 px-8">Read Success Stories</Button>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop" alt="Training" className="w-full h-full object-cover" />
            </div>
            {/* Stats Overlay */}
            <div className="absolute -bottom-10 -left-10 glass p-8 rounded-[2rem] shadow-2xl border border-white/40">
              <div className="text-center">
                <p className="text-5xl font-bold text-brand-blue">98%</p>
                <p className="text-slate-600 font-medium">Placement Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
