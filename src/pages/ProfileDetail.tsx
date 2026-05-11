/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Star, 
  MapPin, 
  ShieldCheck, 
  Calendar, 
  ArrowLeft, 
  MessageSquare, 
  Award, 
  Clock, 
  CheckCircle2,
  Phone
} from 'lucide-react';
import { HOUSEHELP_PROFILES } from '../constants/data';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import NotFound from './NotFound';

export default function ProfileDetail() {
  const { id } = useParams();
  const profile = HOUSEHELP_PROFILES.find(p => p.id === id);

  if (!profile) {
    return <NotFound />;
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Page Header - Overlapping with Hero-like feel */}
      <section className="bg-white border-b border-slate-100 pb-12">
        <div className="container-custom">
          <div className="pt-8 mb-8">
            <Link to="/hire" className="inline-flex items-center gap-2 text-slate-600 hover:text-brand-blue font-bold text-xs uppercase tracking-wider group transition-all">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Directory Search
            </Link>
          </div>
          
          <div className="flex flex-col lg:flex-row justify-between items-end gap-10">
            <div className="flex items-center gap-8">
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="w-40 h-40 rounded-[2.5rem] overflow-hidden border-8 border-slate-50 shadow-2xl shrink-0"
              >
                <img src={profile.image} alt={profile.name} className="w-full h-full object-cover" />
              </motion.div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <h1 className="text-5xl font-bold text-brand-blue tracking-tight">{profile.name}</h1>
                  <div className="bg-brand-green/10 text-brand-green px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider flex items-center gap-2 border border-brand-green/20">
                    <ShieldCheck className="w-3.5 h-3.5" /> Certified Professional
                  </div>
                </div>
                <p className="text-2xl font-bold text-slate-600">{profile.role}</p>
                <div className="flex items-center gap-6 text-slate-700">
                  <div className="flex items-center gap-2 font-bold text-sm">
                    <MapPin className="w-4 h-4 text-brand-green" /> {profile.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-0.5 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(profile.rating) ? 'fill-current' : 'text-slate-200'}`} />
                      ))}
                    </div>
                    <span className="font-bold text-brand-blue text-sm">{profile.rating}</span>
                    <span className="text-slate-600 text-xs font-medium">({profile.reviews} verified reviews)</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 w-full lg:w-auto pb-2">
              <div className="bg-slate-100 p-2 rounded-2xl flex flex-col md:flex-row gap-4 items-center border border-slate-200">
                <div className="flex-grow grid grid-cols-3 gap-6 px-4">
                  <div className="text-center">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-wider mb-1">Daily</p>
                    <p className="text-lg font-bold text-brand-blue">{profile.price.daily}</p>
                  </div>
                  <div className="text-center border-x border-slate-200 px-4">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-wider mb-1">Weekly</p>
                    <p className="text-lg font-bold text-brand-blue">{profile.price.weekly}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-wider mb-1">Monthly</p>
                    <p className="text-lg font-bold text-brand-blue">{profile.price.monthly}</p>
                  </div>
                </div>
                <Button className="h-14 px-10 rounded-xl shadow-xl shadow-brand-blue/30 bg-brand-blue font-black text-[15px] text-white hover:bg-brand-blue/90 border-none transition-all uppercase tracking-tight whitespace-nowrap">
                   Hire Professional
                </Button>
              </div>
              <p className="text-[10px] text-slate-500 font-bold italic ml-2">* Note: Prices include all insurance. Company takes 25% commission on all earnings.</p>
              <div className="flex gap-4">
                <Button variant="outline" className="flex-1 h-14 rounded-2xl border-slate-200 text-slate-700 font-bold hover:bg-slate-50 shadow-sm text-sm uppercase">
                  <MessageSquare className="w-5 h-5" /> Enquire
                </Button>
                {profile.contact && (
                  <div className="flex-1 flex items-center justify-center gap-3 h-14 bg-brand-green/10 border border-brand-green/20 rounded-2xl text-brand-green font-bold shadow-sm">
                    <Phone className="w-4 h-4" /> {profile.contact}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            <section className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="h-0.5 w-12 bg-brand-green" />
                <h2 className="text-xl font-bold text-brand-blue uppercase tracking-widest">Professional Dossier</h2>
              </div>
              <p className="text-xl text-slate-700 leading-relaxed italic border-l-4 border-brand-green/20 pl-8 py-2">
                "{profile.bio}"
              </p>
            </section>

            <section className="space-y-8">
              <h2 className="text-2xl font-bold text-brand-blue tracking-tight">Core Competencies</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {profile.skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                    <div className="w-12 h-12 bg-brand-green/10 rounded-2xl flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <span className="font-bold text-slate-700 uppercase tracking-tight text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-brand-blue">Employment History</h2>
              <Card className="p-8 space-y-8">
                {[
                  { company: 'Private Estate, Nairobi', role: profile.role, period: '2021 - Present', desc: 'Managing full-service household requirements with focuses on efficiency and safety.' },
                  { company: 'Hospitality Group Ltd', role: 'Junior Associate', period: '2018 - 2021', desc: 'Developed core skills in professional cleaning and household organization.' }
                ].map((exp, i) => (
                  <div key={i} className="flex gap-6 items-start relative">
                    {i !== 1 && <div className="absolute left-[20px] top-[40px] w-px h-[calc(100%+32px)] bg-slate-100" />}
                    <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 shrink-0 border border-slate-100 relative z-10">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-brand-blue">{exp.role}</h4>
                      <p className="text-sm font-medium text-brand-green">{exp.company} • {exp.period}</p>
                      <p className="text-slate-500 text-sm leading-relaxed mt-2">{exp.desc}</p>
                    </div>
                  </div>
                ))}
              </Card>
            </section>

            <section className="space-y-8 pb-10">
              <h2 className="text-2xl font-bold text-brand-blue tracking-tight">Testimonials</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { user: "Sarah J.", text: "Extremely professional and dedicated to their work.", date: "Feb 2024" },
                  { user: "Michael K.", text: "Always on time and very respectful. Highly recommend.", date: "Jan 2024" }
                ].map((testimonial, i) => (
                  <Card key={i} className="p-6 bg-slate-50 border-none shadow-inner group-hover:shadow-md transition-shadow">
                    <p className="text-sm text-slate-600 italic mb-4">"{testimonial.text}"</p>
                    <div className="flex justify-between items-center border-t border-slate-100 pt-3">
                      <span className="font-bold text-brand-blue text-xs">{testimonial.user}</span>
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{testimonial.date}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-10">
            <Card className="p-10 space-y-8 bg-brand-blue text-white shadow-2xl shadow-brand-blue/20 relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-8 h-8 rounded-lg bg-brand-green/20 flex items-center justify-center text-brand-green">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold tracking-tight">Security Audit</h3>
              </div>
              <div className="space-y-5 relative z-10">
                {[
                  { label: 'Government ID', status: 'Verified', icon: ShieldCheck },
                  { label: 'Crime Record', status: 'Negative', icon: ShieldCheck },
                  { label: 'Reference Ver.', status: '3/3 Confirmed', icon: Award },
                  { label: 'Medical Status', status: 'Fit', icon: CheckCircle2 }
                ].map((stat, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                    <div className="flex items-center gap-3">
                      <stat.icon className="w-4 h-4 text-brand-green" />
                      <span className="text-xs font-bold text-white/90 uppercase tracking-wider leading-none">{stat.label}</span>
                    </div>
                    <span className="text-[10px] font-black text-brand-green uppercase tracking-wider">{stat.status}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 space-y-8 border-slate-100 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-full blur-3xl -mr-12 -mt-12" />
              <h3 className="text-lg font-bold text-brand-blue relative z-10">Operational Details</h3>
              <div className="space-y-6 relative z-10">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center border border-slate-200 group-hover:bg-brand-blue group-hover:text-white transition-all">
                    <Calendar className="w-5 h-5 text-slate-400 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Availability</p>
                    <p className="font-bold text-brand-blue">{profile.availability}</p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center border border-slate-200 group-hover:bg-brand-blue group-hover:text-white transition-all">
                    <Award className="w-5 h-5 text-slate-400 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Experience</p>
                    <p className="font-bold text-brand-blue">{profile.experience}</p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center border border-slate-200 group-hover:bg-brand-blue group-hover:text-white transition-all">
                    <CheckCircle2 className="w-5 h-5 text-slate-400 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Education</p>
                    <p className="font-bold text-brand-blue text-sm">{profile.education}</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 text-center bg-slate-100 border-none shadow-inner">
              <p className="text-slate-500 font-bold text-xs uppercase tracking-widest mb-6">Support & Verification</p>
              <Button variant="outline" className="w-full h-12 rounded-xl bg-white border-slate-200 text-slate-600 font-bold shadow-sm hover:shadow-lg transition-all">
                <Phone className="w-4 h-4" /> Request Background Call
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
