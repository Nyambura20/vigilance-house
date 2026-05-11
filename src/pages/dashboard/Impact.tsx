/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Card from '../../components/ui/Card';
import { Users, Heart, Star, Shield, Award } from 'lucide-react';

export default function Impact() {
  const impacts = [
    { title: 'Families Served', value: '12', icon: Users, color: 'text-blue-500', bg: 'bg-blue-50' },
    { title: 'Safety Record', value: '100%', icon: Shield, iconColor: 'text-brand-green', bg: 'bg-brand-green/10' },
    { title: 'Community Rating', value: '4.9', icon: Star, iconColor: 'text-amber-500', bg: 'bg-amber-50' },
    { title: 'Vigilance Points', value: '2,400', icon: Award, iconColor: 'text-purple-500', bg: 'bg-purple-50' }
  ];

  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold text-brand-blue tracking-tight">Social Impact</h1>
        <p className="text-slate-600 font-medium">Tracking the positive change you bring to households.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {impacts.map((stat, i) => (
          <Card key={i} className="p-8 text-center space-y-4">
            <div className={`w-14 h-14 mx-auto ${stat.bg} ${stat.iconColor} rounded-2xl flex items-center justify-center`}>
              <stat.icon className="w-7 h-7" />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{stat.title}</p>
              <p className="text-3xl font-black text-brand-blue">{stat.value}</p>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-10 bg-brand-blue text-white relative overflow-hidden">
          <div className="absolute top-[-20%] right-[-20%] w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse" />
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
             <Heart className="w-6 h-6 text-red-400 fill-current" /> Impact Milestone
          </h3>
          <p className="text-white/80 text-lg leading-relaxed mb-8">
            "Your exceptional care for the Wambui family during their transition was noted. You are in the top 5% of professionals this quarter."
          </p>
          <div className="flex items-center gap-4 border-t border-white/10 pt-8">
             <div className="flex -space-x-4">
               {[1,2,3,4].map(i => (
                 <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-blue bg-white/10 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=${i}`} alt="Avatar" className="w-full h-full object-cover" />
                 </div>
               ))}
             </div>
             <p className="text-xs font-bold text-white/60 uppercase tracking-widest">Endorsed by 12 Clients</p>
          </div>
        </Card>

        <Card className="p-10 space-y-8">
          <h3 className="text-2xl font-bold text-brand-blue">Badges Registry</h3>
          <div className="grid grid-cols-3 gap-6">
            {[
              { label: 'Guardian', icon: Shield, desc: 'Safety record > 95%' },
              { label: 'Elite Pro', icon: Award, desc: 'Rating > 4.8' },
              { label: 'Loyalty', icon: Heart, desc: '1+ Year Service' }
            ].map((badge, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-3">
                <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-3xl flex items-center justify-center text-slate-300">
                  <badge.icon className="w-8 h-8" />
                </div>
                <div>
                  <p className="font-bold text-xs text-brand-blue">{badge.label}</p>
                  <p className="text-[9px] text-slate-500 font-medium">{badge.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full py-3 border-2 border-slate-100 text-slate-500 rounded-xl text-xs font-bold hover:border-brand-blue hover:text-brand-blue transition-all">View All Global Badges</button>
        </Card>
      </div>
    </div>
  );
}
