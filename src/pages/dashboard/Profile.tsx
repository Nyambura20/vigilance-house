
import { useState } from 'react';
import { User, Mail, Phone, MapPin, Camera, Trash2, CheckCircle, Bell, Smartphone, Globe } from 'lucide-react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { useAuth } from '../../contexts/AuthContext';

export default function Profile() {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    fullName: user?.name || 'Caroline J. Mutua',
    email: user?.email || 'caroline@example.com',
    phone: '+254 712 345 678',
    address: 'Lavington, Nairobi, Kenya',
  });

  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
  });

  return (
    <div className="max-w-4xl space-y-8 pb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="flex items-center gap-6">
          <div className="relative group cursor-pointer">
            <div className="w-24 h-24 bg-brand-blue rounded-3xl flex items-center justify-center text-white text-3xl font-bold shadow-xl border-4 border-white">
              {user?.name?.[0] || 'C'}
            </div>
            <div className="absolute inset-0 bg-black/40 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Camera className="text-white w-6 h-6" />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-brand-green border-4 border-white rounded-xl shadow-lg flex items-center justify-center">
              <CheckCircle className="text-white w-4 h-4" />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-brand-blue">{formData.fullName}</h1>
            <p className="text-slate-600 font-medium">Premium Client • Since Jan 2024</p>
          </div>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="text-red-500 border-red-500/20 hover:bg-red-50">Delete Account</Button>
          <Button>Save All Changes</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          <Card className="p-8 space-y-8">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-brand-blue" />
              <h3 className="font-bold text-lg text-brand-blue">Personal Information</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-600 uppercase tracking-widest">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input 
                    type="text" 
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    className="w-full h-11 pl-10 pr-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-brand-blue/10 outline-none" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-600 uppercase tracking-widest">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input 
                    type="email" 
                    value={formData.email}
                    disabled
                    className="w-full h-11 pl-10 pr-4 bg-slate-100/50 border border-slate-100 rounded-xl text-slate-600 cursor-not-allowed outline-none" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-600 uppercase tracking-widest">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input 
                    type="text" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full h-11 pl-10 pr-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-brand-blue/10 outline-none" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-600 uppercase tracking-widest">Address</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input 
                    type="text" 
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    className="w-full h-11 pl-10 pr-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-brand-blue/10 outline-none" 
                  />
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 space-y-8">
            <div className="flex items-center gap-2">
              <Bell className="w-5 h-5 text-brand-blue" />
              <h3 className="font-bold text-lg text-brand-blue">Notification Preferences</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { id: 'email', label: 'Email Alerts', icon: Globe },
                { id: 'sms', label: 'SMS Updates', icon: Smartphone },
                { id: 'push', label: 'Push Notifications', icon: Bell },
              ].map((pref) => (
                <div 
                  key={pref.id}
                  onClick={() => setNotifications({...notifications, [pref.id]: !notifications[pref.id as keyof typeof notifications]})}
                  className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex flex-col items-center gap-3 ${notifications[pref.id as keyof typeof notifications] ? 'border-brand-green bg-brand-green/5 shadow-inner shadow-brand-green/10' : 'border-slate-50 bg-white hover:border-slate-200'}`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${notifications[pref.id as keyof typeof notifications] ? 'bg-brand-green text-white' : 'bg-slate-50 text-slate-500'}`}>
                    <pref.icon className="w-5 h-5" />
                  </div>
                  <span className={`text-xs font-bold uppercase tracking-wider ${notifications[pref.id as keyof typeof notifications] ? 'text-brand-green' : 'text-slate-600'}`}>
                    {pref.label}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="p-6 space-y-6 text-center">
            <div className="space-y-4">
               <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto text-slate-400">
                <Globe className="w-8 h-8" />
              </div>
              <div>
                <p className="font-bold text-brand-blue">Time Zone</p>
                <p className="text-xs text-slate-600">Nairobi (GMT+3)</p>
              </div>
              <Button variant="ghost" className="text-xs w-full">Change Settings</Button>
            </div>
          </Card>

          <Card className="p-6 space-y-6">
            <p className="text-sm font-bold text-brand-blue">Account Summary</p>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-slate-50">
                <span className="text-xs text-slate-600">Active Staff</span>
                <span className="text-sm font-bold text-brand-blue">3 Members</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-50">
                <span className="text-xs text-slate-600">Ongoing Hires</span>
                <span className="text-sm font-bold text-brand-blue">1 Hire</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-50">
                <span className="text-xs text-slate-600">Identity Status</span>
                <span className="text-xs font-bold text-brand-green uppercase tracking-widest">Verified</span>
              </div>
            </div>
          </Card>

          <div className="p-6 bg-amber-50 rounded-2xl border border-amber-100 space-y-3">
            <p className="text-sm font-bold text-amber-800">Account Deletion</p>
            <p className="text-xs text-amber-700 leading-relaxed">Closing your account is permanent. All hired employee history will be archived.</p>
            <button className="text-xs font-bold text-red-500 hover:underline">Learn more about deletion</button>
          </div>
        </div>
      </div>
    </div>
  );
}
