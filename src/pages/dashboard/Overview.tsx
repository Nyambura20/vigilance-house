
import { Users, CreditCard, Star, Shield, MapPin, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Logo from '../../components/Logo';

export default function DashboardOverview() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const clientStats = [
    { label: 'Active Staff', value: '3', icon: Users, color: 'text-blue-500', bg: 'bg-blue-50', note: undefined },
    { label: 'Monthly Billing', value: '$750', icon: CreditCard, color: 'text-amber-500', bg: 'bg-amber-50', note: undefined },
    { label: 'Avg Rating', value: '4.9', icon: Star, color: 'text-purple-500', bg: 'bg-purple-50', note: undefined },
    { label: 'Trust Score', value: '98%', icon: Shield, color: 'text-brand-green', bg: 'bg-brand-green/10', note: undefined }
  ];

  const workerStats = [
    { label: 'Rating', value: '4.8', icon: Star, color: 'text-amber-500', bg: 'bg-amber-50', note: undefined },
    { label: 'Earnings (Net)', value: '$420', icon: CreditCard, color: 'text-green-500', bg: 'bg-green-50', note: '25% commission deducted' },
    { label: 'Hours', value: '124h', icon: Users, color: 'text-blue-500', bg: 'bg-blue-50', note: undefined },
    { label: 'Trust Score', value: '98%', icon: Shield, color: 'text-brand-green', bg: 'bg-brand-green/10', note: undefined }
  ];

  const stats = user?.role === 'worker' ? workerStats : clientStats;

  const categories = [
    'ALL', 'House Maid', 'Nannies', 'House Keepers', 'Gardeners', 'Janitors', 
    'Cook', 'Laundry Workers', 'Caregivers', 'Technical Maintenance', 'Delivery'
  ];

  return (
    <div className="space-y-10">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-4xl font-bold text-brand-blue tracking-tight">
            {user?.role === 'worker' ? 'Professional Portal' : 'Overview'}
          </h1>
          <p className="text-slate-600 font-medium">
            {user?.role === 'worker' 
              ? 'Manage your shifts and review your performance impact.' 
              : 'Monitoring your home ecosystem with Vigilance AI.'}
          </p>
        </div>
        <div className="flex items-center gap-3">
          {user?.role === 'worker' && (
            <Button className="h-12 px-8 bg-brand-green hover:bg-brand-green/90 shadow-lg shadow-brand-green/20 animate-pulse-slow">
              Go On-Duty
            </Button>
          )}
          <div className="px-4 py-2 bg-brand-green/10 border border-brand-green/20 rounded-xl">
             <p className="text-[10px] font-bold text-brand-green uppercase tracking-widest">System Status</p>
             <div className="flex items-center gap-2">
               <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse" />
               <span className="text-xs font-bold text-brand-blue">All Systems Secure</span>
             </div>
          </div>
          {user?.role === 'client' && (
            <Button onClick={() => navigate('/hire')} className="hidden md:flex items-center gap-2 h-12 shadow-lg shadow-brand-blue/10">
              <Users className="w-4 h-4" />
              Hire Staff
            </Button>
          )}
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <Card key={i} className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-slate-100/50">
            <div className="p-6 relative z-10 flex flex-col justify-between h-full min-h-[160px]">
              <div className="flex justify-between items-start">
                <div className={`${stat.bg} ${stat.color} p-4 rounded-2xl group-hover:scale-110 transition-transform duration-500 shadow-sm border border-black/5`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                {stat.note && (
                   <div className="bg-slate-100 px-2 py-1 rounded-lg text-[8px] font-black uppercase text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                     Notice
                   </div>
                )}
              </div>
              <div className="mt-6">
                <p className="text-[10px] text-slate-500 font-black uppercase tracking-wider leading-tight mb-1">{stat.label}</p>
                <div className="flex items-baseline gap-1">
                  <p className="text-4xl font-black text-brand-blue tracking-tighter">{stat.value}</p>
                  {stat.note && <span className="text-[10px] text-brand-green font-bold">+12%</span>}
                </div>
                {stat.note && <p className="text-[9px] text-slate-400 font-medium italic mt-2 leading-tight opacity-70 group-hover:opacity-100 transition-opacity">{stat.note}</p>}
              </div>
            </div>
            <div className={`absolute -right-8 -bottom-8 w-32 h-32 ${stat.bg} rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-700`} />
          </Card>
        ))}
      </div>

      {user?.role === 'client' ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card className="p-0 overflow-hidden border-2 border-brand-blue/5">
              <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                <h3 className="font-bold text-brand-blue flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-brand-green" /> Nearest Workers
                </h3>
                <span className="text-[10px] font-black text-brand-green uppercase tracking-widest bg-brand-green/10 px-3 py-1 rounded-full">Live Map</span>
              </div>
              <div className="h-[400px] bg-slate-100 relative overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop" 
                  className="w-full h-full object-cover opacity-50 grayscale transition-all group-hover:grayscale-0 group-hover:scale-105" 
                  alt="Map Placeholder" 
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="p-4 bg-white shadow-2xl rounded-2xl flex flex-col items-center gap-4 border border-slate-100">
                    <Logo size={40} />
                    <p className="text-xs font-bold text-slate-600 text-center uppercase tracking-wider">Interactive Map Integration <br/> Coming Soon</p>
                  </div>
                </div>
                <div className="absolute top-1/4 left-1/3 w-10 h-10 bg-brand-blue rounded-full border-4 border-white shadow-xl animate-bounce" />
                <div className="absolute bottom-1/3 right-1/4 w-10 h-10 bg-brand-green rounded-full border-4 border-white shadow-xl animate-bounce delay-100" />
              </div>
            </Card>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-brand-blue">Popular Categories</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button 
                    key={cat}
                    onClick={() => navigate('/hire')}
                    className="px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-500 hover:border-brand-blue hover:text-brand-blue hover:shadow-lg transition-all"
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <Card className="p-8 space-y-6">
            <h3 className="text-xl font-bold text-brand-blue">Active Staff</h3>
            <div className="space-y-4">
              {[
                { name: 'Sarah Kimani', status: 'On Duty', role: 'Nanny' },
                { name: 'John Mwangi', status: 'Scheduled', role: 'Gardener' }
              ].map((staff, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white border border-slate-100 flex items-center justify-center font-bold text-brand-blue">
                      {staff.name[0]}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-brand-blue">{staff.name}</p>
                      <p className="text-[10px] font-medium text-slate-600">{staff.role}</p>
                    </div>
                  </div>
                  <div className={`w-2 h-2 rounded-full ${staff.status === 'On Duty' ? 'bg-brand-green animate-pulse' : 'bg-amber-400'}`} />
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4" onClick={() => navigate('/dashboard/employees')}>
              View All Workforce
            </Button>
          </Card>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-8 space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-brand-blue">Status & Preferences</h3>
              <div className="px-3 py-1 bg-brand-green/10 text-brand-green text-[10px] font-black rounded-full uppercase tracking-widest">Verified Pro</div>
            </div>
            
            <div className="space-y-6">
              <div className="p-6 bg-slate-50 rounded-2xl space-y-4 border border-slate-100">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-wider mb-4">Salary Mode</p>
                <div className="grid grid-cols-3 gap-3">
                  {['Daily', 'Weekly', 'Monthly'].map((mode) => (
                    <button key={mode} className={`py-3 rounded-xl text-xs font-bold transition-all ${mode === 'Monthly' ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/20' : 'bg-white border border-slate-200 text-slate-600 hover:border-brand-blue'}`}>
                      {mode}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
                <p className="text-[10px] text-slate-600 font-black uppercase tracking-wider mb-2">Hourly Rate</p>
                  <p className="text-2xl font-bold text-brand-blue">$12.50</p>
                </div>
                <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
                <p className="text-[10px] text-slate-600 font-black uppercase tracking-wider mb-2">Work Exp.</p>
                  <p className="text-2xl font-bold text-brand-blue">8+ Years</p>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-[10px] font-black text-slate-600 uppercase tracking-wider ml-1">Earned Badges</p>
                <div className="flex gap-3">
                  {[
                    { label: "Elite", icon: Shield, color: "bg-brand-blue" },
                    { label: "Safety", icon: Shield, color: "bg-brand-green" },
                    { label: "Star", icon: Star, color: "bg-amber-400" }
                  ].map((badge, i) => (
                    <div key={i} className={`w-10 h-10 ${badge.color} rounded-xl flex items-center justify-center text-white shadow-lg shadow-black/10`} title={badge.label}>
                      <badge.icon className="w-5 h-5" />
                    </div>
                  ))}
                  <div className="w-10 h-10 bg-slate-100 border border-dashed border-slate-300 rounded-xl flex items-center justify-center text-slate-400 text-xs font-bold">+2</div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 space-y-6">
            <h3 className="text-xl font-bold text-brand-blue">Social Impact & News</h3>
            <div className="space-y-4">
              <div className="p-6 bg-brand-blue rounded-[2rem] text-white overflow-hidden relative group cursor-pointer">
                <div className="absolute top-[-20%] right-[-20%] w-40 h-40 bg-brand-green/20 blur-3xl rounded-full transition-transform group-hover:scale-150" />
                <h4 className="text-lg font-bold mb-2 relative z-10">Vigilance Impact Report</h4>
                <p className="text-white/80 text-sm leading-relaxed relative z-10 mb-4">You've helped 12 families this year and maintained a 100% safety record.</p>
                <Button variant="outline" className="border-white/50 text-white text-[11px] font-black uppercase hover:bg-white hover:text-brand-blue h-12 !rounded-xl relative z-10 w-full md:w-auto px-6 shadow-xl shadow-black/20 transition-all tracking-tight">Read Impact Journal</Button>
              </div>

              <div className="space-y-3">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Latest News</p>
                {[
                  'NITA Training Sponsorship: 5-year contract option available',
                  'Health Insurance benefits for top rated workers',
                  'Regional hub opening in Mombasa next week'
                ].map((news, i) => (
                  <div key={i} className={`flex items-center gap-3 p-4 border rounded-xl hover:shadow-md transition-all cursor-pointer ${i === 0 ? 'bg-brand-blue/5 border-brand-blue/20' : 'bg-white border-slate-100'}`}>
                    <div className={`w-2 h-2 rounded-full shrink-0 ${i === 0 ? 'bg-brand-blue' : 'bg-brand-green'}`} />
                    <p className={`text-xs font-bold ${i === 0 ? 'text-brand-blue' : 'text-slate-700'}`}>{news}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
