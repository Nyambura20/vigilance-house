/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Camera, Map, Activity, Shield, Bell, CheckCircle2, AlertCircle, Clock, Star } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function Monitor() {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Header */}
      <section className="bg-white border-b border-slate-100 py-16">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
            <div>
              <h1 className="text-5xl font-black text-brand-blue mb-3 tracking-tight">Active Oversight</h1>
              <p className="text-slate-500 text-lg font-medium">Algorithmic integrity monitoring for your professional staff.</p>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" className="h-14 px-8 rounded-2xl border-slate-100 text-slate-500 font-bold shadow-sm">
                <Bell className="w-5 h-5" /> 
                Alert Log
              </Button>
              <Button className="h-14 px-8 rounded-2xl shadow-xl shadow-brand-blue/10 bg-brand-blue font-bold">
                <Shield className="w-5 h-5" /> 
                Security Protocol
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Monitor View */}
          <div className="lg:col-span-2 space-y-12">
            <Card className="p-0 overflow-hidden relative aspect-video bg-slate-900 flex items-center justify-center group shadow-2xl rounded-[2.5rem] border-none">
              <div className="absolute inset-0 opacity-40 group-hover:opacity-50 transition-opacity">
                <img 
                  src="https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1200&auto=format&fit=crop" 
                  alt="Live Feed" 
                  className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[10s]"
                />
              </div>
              <div className="absolute top-8 left-8 flex items-center gap-3 bg-red-600 text-white px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest animate-pulse border border-red-400/50">
                <div className="w-2 h-2 bg-white rounded-full" /> LIVE • OPS ZONE A
              </div>
              <div className="absolute bottom-8 right-8 flex gap-3">
                <button className="w-12 h-12 bg-white/10 backdrop-blur-xl rounded-2xl text-white hover:bg-white/20 transition-all flex items-center justify-center border border-white/10">
                  <Camera className="w-5 h-5" />
                </button>
                <button className="w-12 h-12 bg-white/10 backdrop-blur-xl rounded-2xl text-white hover:bg-white/20 transition-all flex items-center justify-center border border-white/10">
                  <Activity className="w-5 h-5" />
                </button>
              </div>
              <Shield className="w-24 h-24 text-white/5" />
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <Card className="p-10 space-y-8">
                <div className="flex items-center justify-between">
                  <h3 className="font-black text-sm text-brand-blue uppercase tracking-widest">Chronicle</h3>
                  <Clock className="w-5 h-5 text-slate-200" />
                </div>
                <div className="space-y-6">
                  {[
                    { time: '08:30 AM', event: 'Oversight Initiated', status: 'verified', color: 'text-brand-green' },
                    { time: '09:45 AM', event: 'Protocol Alpha Active', status: 'active', color: 'text-brand-green' },
                    { time: '11:20 AM', event: 'Supply Intake Logged', status: 'done', color: 'text-slate-500' },
                    { time: '01:15 PM', event: 'Staff Recess', status: 'done', color: 'text-slate-500' }
                  ].map((log, i) => (
                    <div key={i} className="flex gap-5 items-start group">
                      <div className="text-[10px] font-black text-slate-500 w-20 pt-1 uppercase tracking-tighter">{log.time}</div>
                      <div className="flex-grow pb-4 border-b border-slate-50 last:border-0">
                        <p className="text-sm font-bold text-brand-blue group-hover:text-brand-green transition-colors">{log.event}</p>
                        <div className={`mt-1.5 text-[8px] uppercase font-black tracking-[0.2em] ${log.color}`}>
                          {log.status}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="ghost" className="w-full text-brand-blue font-black uppercase text-[10px] tracking-widest py-4 bg-slate-50 hover:bg-slate-100 rounded-xl">Full Audit Trail</Button>
              </Card>

              <Card className="p-10 space-y-8">
                <div className="flex items-center justify-between">
                  <h3 className="font-black text-sm text-brand-blue uppercase tracking-widest">Diagnostics</h3>
                  <Activity className="w-5 h-5 text-slate-200" />
                </div>
                <div className="space-y-8">
                  {[
                    { label: 'Oversight Grid', status: 'Optimal', icon: Shield, color: 'text-brand-green' },
                    { label: 'Interface Lock', status: 'Engaged', icon: Shield, color: 'text-brand-green' },
                    { label: 'Thermal Array', status: 'Nominal', icon: AlertCircle, color: 'text-brand-green' },
                    { label: 'Visual Uplink', status: 'UHD', icon: Camera, color: 'text-brand-green' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between group">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-brand-blue group-hover:text-white transition-all">
                          <item.icon className={`w-5 h-5 ${item.color} group-hover:text-white`} />
                        </div>
                        <span className="text-xs font-bold text-slate-600 group-hover:text-brand-blue transition-colors">{item.label}</span>
                      </div>
                      <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">{item.status}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-12">
            <Card className="p-10 bg-brand-blue text-white shadow-2xl shadow-brand-blue/20 relative overflow-hidden group">
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:bg-brand-green/10 transition-all duration-700" />
              <div className="space-y-8 relative z-10">
                <div className="flex items-center gap-5">
                  <div className="w-20 h-20 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 bg-white transform rotate-3 group-hover:rotate-0 transition-transform">
                    <img src="https://i.pravatar.cc/150?u=1" alt="On Duty" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/60 font-black uppercase tracking-[0.2em] mb-1">On Station</p>
                    <p className="font-black text-xl tracking-tight">Sarah Kimani</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6 py-6 border-y border-white/10">
                  <div>
                    <p className="text-[8px] text-white/60 font-black uppercase tracking-widest mb-1.5">Efficiency</p>
                    <div className="font-bold text-brand-green flex items-center gap-2">98% <div className="w-1 h-1 bg-brand-green rounded-full animate-pulse" /></div>
                  </div>
                  <div>
                    <p className="text-[8px] text-white/60 font-black uppercase tracking-widest mb-1.5">Duty Window</p>
                    <p className="font-bold">17:00 HRS</p>
                  </div>
                </div>
                <Button className="w-full h-12 bg-white text-brand-blue hover:bg-brand-green border-none font-black text-[10px] uppercase tracking-widest shadow-xl">Initiate Uplink</Button>
              </div>
            </Card>

            <Card className="p-10 space-y-8">
              <h3 className="font-black text-sm text-brand-blue uppercase tracking-widest">Rapid Protocol</h3>
              <div className="grid grid-cols-2 gap-5">
                {[
                  { label: 'Panic', icon: AlertCircle, color: 'text-red-500 bg-red-50 hover:bg-red-500 hover:text-white' },
                  { label: 'Contact', icon: Map, color: 'text-blue-500 bg-blue-50 hover:bg-blue-500 hover:text-white' },
                  { label: 'Vitals', icon: Activity, color: 'text-green-500 bg-green-50 hover:bg-brand-green hover:text-brand-blue' },
                  { label: 'Lockdown', icon: Shield, color: 'text-slate-500 bg-slate-50 hover:bg-slate-900 hover:text-white' }
                ].map((action, i) => (
                  <button key={i} className={`p-6 rounded-3xl flex flex-col items-center gap-4 transition-all border border-transparent hover:shadow-xl ${action.color}`}>
                    <action.icon className="w-6 h-6" />
                    <span className="text-[9px] font-black uppercase tracking-widest">{action.label}</span>
                  </button>
                ))}
              </div>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
}
