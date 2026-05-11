/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Card from '../../components/ui/Card';
import { BookOpen, Bell, ShieldCheck } from 'lucide-react';

export default function News() {
  const newsItems = [
    {
      title: 'NITA Training Sponsorship Program',
      desc: 'Unskilled workers can now apply for fully sponsored NITA training. Terms: 5-year service contract with Vigilance.',
      date: '2h ago',
      category: 'Sponsorship'
    },
    {
      title: 'New Service Category: Casual Domestic Helpers',
      desc: 'We are expanding our reach. You can now list yourself as a casual domestic helper for short-term tasks.',
      date: '1d ago',
      category: 'System Update'
    },
    {
      title: 'Nairobi Region Expansion',
      desc: 'New office opening in Karen to support our growing workforce in the Westlands area.',
      date: '3d ago',
      category: 'Expansion'
    }
  ];

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-4xl font-bold text-brand-blue tracking-tight">System News</h1>
        <p className="text-slate-600 font-medium">Global updates and professional opportunities.</p>
      </div>

      <div className="grid gap-6">
        {newsItems.map((item, i) => (
          <Card key={i} className="p-8 hover:shadow-xl transition-all border-l-4 border-l-brand-blue">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-blue/5 rounded-xl flex items-center justify-center text-brand-blue">
                  <BookOpen className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{item.category}</span>
              </div>
              <span className="text-[10px] font-black text-slate-400 border border-slate-100 px-3 py-1 rounded-full uppercase tracking-widest">{item.date}</span>
            </div>
            <h3 className="text-xl font-bold text-brand-blue mb-2">{item.title}</h3>
            <p className="text-slate-600 leading-relaxed max-w-3xl">{item.desc}</p>
          </Card>
        ))}
      </div>

      <Card className="p-10 bg-brand-green/5 border-2 border-dashed border-brand-green/20 rounded-[2.5rem] flex flex-col items-center text-center space-y-6">
        <div className="w-16 h-16 bg-brand-green rounded-[1.5rem] flex items-center justify-center text-white shadow-xl shadow-brand-green/20">
          <ShieldCheck className="w-8 h-8" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-brand-blue">NITA Certification Drive</h3>
          <p className="text-slate-600 max-w-sm mt-2 font-medium">All janitorial and housekeeping staff must visit our nearest branch for certification checks before June 15th.</p>
        </div>
        <button className="px-8 py-3 bg-brand-blue text-white rounded-xl font-bold shadow-lg shadow-brand-blue/20">Find Nearest Branch</button>
      </Card>
    </div>
  );
}
