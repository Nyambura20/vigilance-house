
import { useState } from 'react';
import { Shield, Smartphone, Key, History, Monitor, MapPin, Globe, LogOut, AlertCircle } from 'lucide-react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

const MOCK_ACTIVITY = [
  { id: 1, device: 'Chrome on MacOS', location: 'Nairobi, Kenya', ip: '197.232.44.11', time: 'Active Now', current: true },
  { id: 2, device: 'Vigilance App on iPhone 15', location: 'Nairobi, Kenya', ip: '102.135.12.112', time: '2 hours ago', current: false },
  { id: 3, device: 'Safari on iPad', location: 'Mombasa, Kenya', ip: '41.89.22.14', time: 'Yesterday, 11:45 PM', current: false },
];

export default function Security() {
  const [twoFactor, setTwoFactor] = useState(false);

  return (
    <div className="max-w-6xl space-y-10">
      <div>
        <h1 className="text-4xl font-bold text-brand-blue tracking-tight">Security</h1>
        <p className="text-slate-600 font-medium mt-1">Multi-layer protection for your household digital ecosystem.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-10">
          {/* Two-Factor Authentication */}
          <Card className="p-10 relative overflow-hidden group">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10">
              <div className="w-20 h-20 bg-brand-blue/5 text-brand-blue rounded-3xl flex items-center justify-center shrink-0 border border-brand-blue/10 group-hover:bg-brand-blue group-hover:text-white transition-all duration-500 shadow-xl shadow-brand-blue/5">
                <Smartphone className="w-10 h-10" />
              </div>
              <div className="flex-grow space-y-4 text-center md:text-left">
                <div>
                  <h3 className="text-2xl font-bold text-brand-blue tracking-tight">Multi-Factor Verification</h3>
                  <p className="text-slate-600 font-medium mt-2 leading-relaxed">Secure your terminal with biometric or SMS verification. Recommended for all executive accounts.</p>
                </div>
                <div className="pt-4 flex justify-center md:justify-start">
                  <label className="relative inline-flex items-center cursor-pointer group/toggle">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={twoFactor}
                      onChange={() => setTwoFactor(!twoFactor)}
                    />
                    <div className="w-14 h-7 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-green shadow-inner" />
                    <span className="ml-4 text-xs font-black uppercase tracking-widest text-brand-blue leading-none py-1 border-b-2 border-transparent group-hover/toggle:border-brand-green transition-all">{twoFactor ? 'Secured' : 'Unprotected'}</span>
                  </label>
                </div>
              </div>
            </div>
            {/* Design accents */}
            <div className="absolute -right-20 -top-20 w-48 h-48 bg-brand-blue/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </Card>

          {/* Change Password */}
          <Card className="p-10 space-y-10 border border-transparent hover:border-slate-100 transition-all shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                <Key className="w-5 h-5 text-brand-blue" />
              </div>
              <h3 className="text-2xl font-bold text-brand-blue tracking-tight">Access Credentials</h3>
            </div>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-600 uppercase tracking-widest block ml-1">Current Secret</label>
                <input type="password" placeholder="••••••••" className="w-full h-12 px-5 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-bold focus:ring-4 focus:ring-brand-blue/5 outline-none transition-all placeholder:text-slate-400 focus:bg-white focus:border-brand-blue/20" />
              </div>
              <div className="hidden md:block" />
              <div className="space-y-3">
                 <label className="text-[10px] font-black text-slate-600 uppercase tracking-widest block ml-1">New Secret</label>
                 <input type="password" placeholder="••••••••" className="w-full h-12 px-5 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-bold focus:ring-4 focus:ring-brand-blue/5 outline-none transition-all placeholder:text-slate-400 focus:bg-white focus:border-brand-blue/20" />
              </div>
              <div className="space-y-3">
                 <label className="text-[10px] font-black text-slate-600 uppercase tracking-widest block ml-1">Verify Secret</label>
                 <input type="password" placeholder="••••••••" className="w-full h-12 px-5 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-bold focus:ring-4 focus:ring-brand-blue/5 outline-none transition-all placeholder:text-slate-400 focus:bg-white focus:border-brand-blue/20" />
              </div>
              <div className="md:col-span-2 pt-2">
                <Button className="w-full md:w-auto px-12 h-12 rounded-xl bg-brand-blue hover:bg-slate-900 border-none shadow-xl shadow-brand-blue/10">Authorize Key Update</Button>
              </div>
            </form>
          </Card>

          {/* Login Activity */}
          <Card className="p-10 space-y-8 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                  <History className="w-5 h-5 text-brand-blue" />
                </div>
                <h3 className="text-2xl font-bold text-brand-blue tracking-tight">Active Sessions</h3>
              </div>
              <Button variant="ghost" className="text-[10px] font-bold text-red-600 hover:bg-red-50 uppercase tracking-widest rounded-xl px-4 py-2">Invalidate Other Devices</Button>
            </div>
            <div className="space-y-4">
              {MOCK_ACTIVITY.map((session) => (
                <div key={session.id} className="flex items-center justify-between p-6 bg-slate-50/50 hover:bg-white rounded-3xl border border-transparent hover:border-slate-100 transition-all hover:shadow-xl hover:shadow-slate-200/50 cursor-pointer group">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center border border-slate-100 shadow-sm transition-transform group-hover:scale-105 duration-300">
                      <Monitor className={`w-6 h-6 ${session.current ? 'text-brand-green' : 'text-slate-400'}`} />
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <p className="font-bold text-brand-blue group-hover:text-brand-green transition-colors">{session.device}</p>
                        {session.current && (
                          <div className="flex items-center gap-1.5 px-2 py-0.5 bg-green-50 rounded-lg">
                            <div className="w-1.5 h-1.5 bg-brand-green rounded-full animate-pulse" />
                            <span className="text-[8px] font-black text-green-600 uppercase tracking-widest">Active</span>
                          </div>
                        )}
                      </div>
                      <p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest mt-1">
                        {session.location} <span className="mx-2 text-slate-400">•</span> <span className="font-mono text-slate-700">{session.ip}</span>
                      </p>
                    </div>
                  </div>
                  <div className="text-right flex flex-col items-end gap-3">
                    <p className="text-[9px] text-slate-600 font-black uppercase tracking-tighter">{session.time}</p>
                    {!session.current && (
                      <button className="text-[9px] font-black text-red-500 hover:text-red-600 uppercase tracking-widest bg-red-50 px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-all">Revoke</button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="space-y-8">
           <Card className="p-10 bg-gradient-to-br from-slate-900 via-brand-blue to-brand-blue text-white space-y-6 shadow-2xl shadow-brand-blue/30 relative overflow-hidden group">
            <div className="flex items-center gap-3 text-brand-green relative z-10">
              <Shield className="w-5 h-5 shadow-[0_0_15px_rgba(74,222,128,0.3)]" />
              <span className="font-black text-[10px] uppercase tracking-widest">Integrity Score</span>
            </div>
            <div className="flex items-center gap-6 relative z-10">
              <div className="text-6xl font-black tracking-tighter group-hover:text-brand-green transition-colors">85<span className="text-xl text-white/40 ml-1">%</span></div>
              <div className="h-2 flex-grow bg-white/10 rounded-full overflow-hidden border border-white/5">
                <div className="w-[85%] h-full bg-brand-green shadow-[0_0_20px_rgba(74,222,128,0.5)]" />
              </div>
            </div>
            <p className="text-xs text-white/80 font-medium leading-relaxed relative z-10">Your operational interface is secure. Activating MFA will elevate your status to <span className="text-white font-bold underline decoration-brand-green underline-offset-4">Full Lockdown</span>.</p>
            {/* Design accents */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          </Card>

          <Card className="p-8 space-y-6 border-l-4 border-l-amber-400 shadow-sm">
            <h4 className="font-bold text-brand-blue text-sm flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-500" />
              Incident Log
            </h4>
            <div className="space-y-6">
              {[
                { title: 'New login detected', date: '2h ago', desc: 'Secure authentication from Chrome (Nairobi)' },
                { title: 'Email address updated', date: '5d ago', desc: 'System-wide propagation completed' },
              ].map((alert, i) => (
                <div key={i} className="space-y-1.5 relative pl-4 border-l border-slate-100">
                  <div className="absolute -left-[4.5px] top-1 w-2 h-2 rounded-full bg-slate-300" />
                  <p className="font-bold text-xs text-brand-blue leading-tight">{alert.title}</p>
                  <p className="text-[10px] text-slate-600 font-medium leading-relaxed">{alert.desc}</p>
                  <p className="text-[9px] text-slate-500 font-black uppercase tracking-tighter">{alert.date}</p>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full text-[10px] font-black uppercase tracking-widest py-2 border-slate-100 text-slate-500 hover:text-brand-blue hover:bg-slate-50">View Full History</Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
