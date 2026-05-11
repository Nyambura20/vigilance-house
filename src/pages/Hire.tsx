/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, MapPin, Star, MoreHorizontal, ChevronRight } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { HOUSEHELP_PROFILES } from '../constants/data';

export default function Hire() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('ALL');

  const categories = [
    'ALL', 'House Maid', 'Nannies', 'House Keepers', 'Gardeners', 'Janitors', 
    'Cook', 'Laundry Workers', 'Caregivers', 'Casual Helpers', 'Delivery Guys', 
    'Electrician', 'Plumbers', 'Carpenters', 'Mechanics'
  ];

  const filteredProfiles = HOUSEHELP_PROFILES.filter(profile => {
    const matchesSearch = profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        profile.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        profile.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'ALL' || profile.role === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Search Header */}
      <section className="bg-white border-b border-slate-100 py-16">
        <div className="container-custom space-y-12">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-black text-brand-blue mb-4 tracking-tight leading-[1.1]">Elite Household Professionals</h1>
            <p className="text-slate-600 text-xl font-medium">Sourced, vetted, and monitored by Vigilance AI.</p>
          </div>

      <div className="flex flex-col xl:flex-row gap-6">
            <div className="relative flex-grow group">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-blue transition-colors" />
              <input 
                type="text" 
                placeholder="Search by name, category, or location..." 
                className="w-full h-16 pl-14 pr-8 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-[6px] focus:ring-brand-blue/5 focus:border-brand-blue/30 transition-all font-bold text-brand-blue placeholder:text-slate-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2 bg-slate-200/50 p-2 rounded-[2rem] border border-slate-100 overflow-x-auto no-scrollbar max-w-full xl:max-w-2xl">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`h-12 px-6 rounded-full whitespace-nowrap font-black text-[10px] uppercase tracking-widest transition-all duration-300 ${filter === cat ? 'bg-brand-blue text-white shadow-xl shadow-brand-blue/30 scale-[1.02]' : 'text-slate-500 hover:text-brand-blue hover:bg-white hover:shadow-sm'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <Button variant="outline" className="h-16 px-8 rounded-2xl border-slate-200 text-slate-600 font-black text-[10px] uppercase tracking-widest hover:text-brand-blue hover:border-brand-blue/30 shrink-0 transition-all">
              <Filter className="w-4 h-4 mr-2" /> Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Profiles Grid */}
      <div className="container-custom py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProfiles.map((profile) => (
            <Card key={profile.id} className="p-0 overflow-hidden flex flex-col h-full border-transparent hover:border-brand-green/30 transition-all duration-500 shadow-sm hover:shadow-2xl">
              <div className="p-8 pb-4 flex items-start justify-between">
                <div className="flex items-center gap-5">
                  <div className="w-24 h-24 rounded-[2rem] overflow-hidden relative border-4 border-slate-50 shadow-lg shrink-0 group-hover:scale-105 transition-transform">
                    <img src={profile.image} alt={profile.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-black text-xl text-brand-blue tracking-tight">{profile.name}</h3>
                    <p className="text-[10px] font-black text-brand-green uppercase tracking-widest mt-1">{profile.role}</p>
                    <div className="flex items-center gap-1.5 mt-2 text-slate-600 text-[10px] font-bold uppercase tracking-tight">
                      <MapPin className="w-3 h-3 text-brand-green" /> {profile.location}
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-8 py-6 space-y-8 flex-grow">
                <div className="flex items-center gap-2 py-6 border-y border-slate-100">
                  <div className="text-center flex-1">
                    <p className="text-[9px] text-slate-400 font-black uppercase tracking-wider mb-1.5">Rating</p>
                    <div className="flex items-center justify-center gap-1.5">
                      <Star className="w-3.5 h-3.5 text-amber-500 fill-current" />
                      <span className="font-black text-brand-blue leading-none text-xs">{profile.rating}</span>
                    </div>
                  </div>
                  <div className="w-px h-10 bg-slate-100" />
                  <div className="text-center flex-1">
                    <p className="text-[9px] text-slate-400 font-black uppercase tracking-wider mb-1.5">Reviews</p>
                    <p className="font-black text-brand-blue leading-none text-xs">{profile.reviews}</p>
                  </div>
                  <div className="w-px h-10 bg-slate-100" />
                  <div className="text-center flex-[1.5] px-1">
                    <p className="text-[9px] text-slate-400 font-black uppercase tracking-wider mb-1.5">Monthly Rate</p>
                    <p className="font-black text-brand-green leading-none text-xs truncate">{profile.price.monthly || profile.price}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-[10px] text-slate-600 font-black uppercase tracking-wider">Key Specialties</p>
                  <div className="flex flex-wrap gap-2">
                    {profile.skills.map((skill, i) => (
                      <span key={i} className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-[10px] font-black uppercase tracking-wider text-slate-500 hover:border-brand-green/20 hover:text-brand-green transition-all">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-8 pt-2 flex flex-col gap-3">
                <Link to={`/hire/${profile.id}`} className="w-full">
                  <Button variant="outline" className="w-full h-12 text-[11px] font-black border-slate-200 text-slate-600 hover:text-brand-blue bg-white !rounded-xl transition-all shadow-sm uppercase tracking-tight">Profile Details</Button>
                </Link>
                <Button className="w-full h-12 text-[11px] font-black bg-brand-blue shadow-xl shadow-brand-blue/20 !rounded-xl transition-all text-white uppercase tracking-tight">Hire Professional</Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Pagination Dummy */}
        <div className="mt-16 flex items-center justify-center gap-2">
          <button className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-brand-blue font-bold shadow-sm">1</button>
          <button className="w-10 h-10 rounded-xl hover:bg-slate-100 flex items-center justify-center text-slate-400 font-bold transition-colors">2</button>
          <button className="w-10 h-10 rounded-xl hover:bg-slate-100 flex items-center justify-center text-slate-400 font-bold transition-colors">3</button>
          <span className="text-slate-300">...</span>
          <button className="w-10 h-10 rounded-xl hover:bg-slate-100 flex items-center justify-center text-slate-400 font-bold transition-colors">
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
