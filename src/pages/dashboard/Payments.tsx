
import { CreditCard, Plus, ArrowUpRight, ArrowDownLeft, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

const MOCK_HISTORY = [
  { id: 1, date: 'May 01, 2024', amount: 350.00, entity: 'Grace Atieno', status: 'Paid', method: 'Visa •••• 4242' },
  { id: 2, date: 'Apr 28, 2024', amount: 150.00, entity: 'John Mwangi', status: 'Pending', method: 'M-Pesa' },
  { id: 3, date: 'Apr 15, 2024', amount: 350.00, entity: 'Grace Atieno', status: 'Paid', method: 'Visa •••• 4242' },
  { id: 4, date: 'Apr 01, 2024', amount: 200.00, entity: 'System Fee', status: 'Failed', method: 'Visa •••• 4242' },
];

export default function Payments() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        <div>
          <h1 className="text-4xl font-bold text-brand-blue tracking-tight">Finances</h1>
          <p className="text-slate-600 font-medium mt-1">Transaction history and integrated payment controls.</p>
        </div>
        <div className="flex items-center gap-3">
           <Button variant="outline" className="border-slate-200 text-slate-600 font-bold text-xs h-12 px-6 hover:bg-slate-50">
             Export CSV
           </Button>
           <Button className="flex items-center gap-2 h-12 shadow-xl shadow-brand-blue/10 bg-brand-blue hover:bg-brand-blue/90">
             <CreditCard className="w-4 h-4" />
             Initiate Payment
           </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-10">
          {/* Active Payment Methods */}
          <section className="space-y-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-lg text-brand-blue">Active Instruments</h3>
              <Button variant="ghost" className="text-[10px] font-black uppercase tracking-widest text-brand-blue/80 flex items-center gap-2 hover:text-brand-blue transition-colors">
                <Plus className="w-3 h-3" /> Add Instrument
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-8 bg-gradient-to-br from-brand-blue via-slate-800 to-indigo-950 rounded-3xl text-white shadow-2xl relative overflow-hidden group hover:scale-[1.02] transition-all duration-500">
                <div className="relative z-10 space-y-8">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-10 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-md border border-white/10">
                      <div className="w-8 h-6 bg-gradient-to-r from-amber-200 to-amber-500 rounded-lg shadow-inner" />
                    </div>
                    <div className="flex flex-col items-end">
                       <span className="font-black tracking-wider italic text-lg opacity-80">VISA</span>
                       <span className="text-[10px] font-black uppercase tracking-wider text-brand-green">Primary</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] text-white/80 uppercase tracking-widest font-black mb-2">Card Number</p>
                    <p className="font-mono text-xl tracking-[0.25em] text-glow">•••• •••• •••• 4242</p>
                  </div>
                  <div className="flex justify-between items-end pt-2">
                    <div>
                      <p className="text-[10px] text-white/80 uppercase tracking-wider font-black mb-1">Holder</p>
                      <p className="text-sm font-bold tracking-tight">K. SARAH</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] text-white/80 uppercase tracking-wider font-black mb-1">Expiry</p>
                      <p className="text-sm font-bold">12 / 26</p>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -right-16 -top-16 w-48 h-48 bg-brand-green/10 rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition-opacity" />
                <div className="absolute -left-16 -bottom-16 w-48 h-48 bg-white/5 rounded-full blur-3xl opacity-30" />
              </div>

              <div className="p-8 bg-white border border-slate-100 rounded-3xl flex flex-col items-center justify-center gap-4 text-slate-300 hover:border-brand-green/40 hover:text-brand-green transition-all cursor-pointer group shadow-sm hover:shadow-xl hover:shadow-brand-green/5">
                <div className="w-14 h-14 bg-slate-50 group-hover:bg-brand-green/10 rounded-2xl flex items-center justify-center transition-colors">
                  <Plus className="w-7 h-7" />
                </div>
                  <div className="text-center">
                    <p className="text-sm font-black uppercase tracking-wider text-slate-600 group-hover:text-brand-green">Connect Wallet</p>
                    <p className="text-[11px] font-medium text-slate-600 mt-1">M-Pesa, PayPal, or Crypto</p>
                  </div>
              </div>
            </div>
          </section>

          {/* Billing History */}
          <section className="space-y-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-lg text-brand-blue">Journal</h3>
              <div className="flex gap-2">
                <select className="bg-slate-50 border-none rounded-lg text-[10px] font-black uppercase tracking-widest px-3 py-1.5 focus:ring-0 outline-none cursor-pointer">
                  <option>Last 30 Days</option>
                  <option>Last 3 Months</option>
                </select>
              </div>
            </div>
            <Card className="overflow-hidden border-slate-100/50">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-100">
                      <th className="px-8 py-5 text-[10px] font-black text-slate-600 uppercase tracking-widest">Entity & Method</th>
                      <th className="px-8 py-5 text-[10px] font-black text-slate-600 uppercase tracking-widest">Status</th>
                      <th className="px-8 py-5 text-[10px] font-black text-slate-600 uppercase tracking-widest">Timestamp</th>
                      <th className="px-8 py-5 text-[10px] font-black text-slate-600 uppercase tracking-widest text-right">Value</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {MOCK_HISTORY.map((item) => (
                      <tr key={item.id} className="hover:bg-slate-50/50 transition-colors cursor-pointer group">
                        <td className="px-8 py-5">
                          <div className="flex items-center gap-4">
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${item.status === 'Paid' ? 'bg-green-50 text-green-500 border-green-100' : item.status === 'Pending' ? 'bg-amber-50 text-amber-500 border-amber-100' : 'bg-red-50 text-red-500 border-red-100'}`}>
                              {item.status === 'Paid' ? <CheckCircle2 className="w-5 h-5" /> : item.status === 'Pending' ? <Clock className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
                            </div>
                            <div>
                              <p className="text-sm font-bold text-brand-blue group-hover:text-brand-green transition-colors">{item.entity}</p>
                              <p className="text-[10px] text-slate-600 font-bold uppercase tracking-tight">{item.method}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-8 py-5">
                          <span className={`text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-wider border ${item.status === 'Paid' ? 'bg-green-50 text-green-600 border-green-100' : item.status === 'Pending' ? 'bg-amber-50 text-amber-600 border-amber-100' : 'bg-red-50 text-red-600 border-red-100'}`}>
                            {item.status}
                          </span>
                        </td>
                        <td className="px-8 py-5">
                          <p className="text-xs text-brand-blue font-bold tracking-tight">{item.date}</p>
                          <p className="text-[10px] text-slate-600 font-bold">UTC+3:00</p>
                        </td>
                        <td className="px-8 py-5 text-right">
                          <p className={`text-base font-black ${item.status === 'Failed' ? 'text-red-400 line-through opacity-50' : 'text-brand-blue'}`}>
                             {item.status === 'Paid' ? '' : item.status === 'Pending' ? '≈ ' : ''}
                             ${item.amount.toFixed(2)}
                          </p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </section>
        </div>

        <div className="space-y-8">
          <Card className="p-8 bg-brand-blue text-white shadow-2xl shadow-brand-blue/20 relative overflow-hidden group">
            <h3 className="font-bold text-xl mb-8 relative z-10">Monthly Metrics</h3>
            <div className="space-y-8 relative z-10">
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-[10px] text-white/70 uppercase tracking-widest font-black mb-2">Cycle Utilization</p>
                  <p className="text-4xl font-black tracking-tight text-white group-hover:text-brand-green transition-colors">$1,240</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-brand-green font-black uppercase tracking-widest leading-none mb-1">↑ 12.5%</p>
                  <p className="text-[9px] text-white/70 font-bold">vs Prev Cycle</p>
                </div>
              </div>
              
              <div className="space-y-2">
                 <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-1">
                   <span className="text-white/80">Limit Allocation</span>
                   <span className="text-white">65% used</span>
                 </div>
                 <div className="h-2.5 bg-white/10 rounded-full overflow-hidden border border-white/5">
                   <div className="w-[65%] h-full bg-brand-green shadow-[0_0_15px_rgba(74,222,128,0.5)] transition-all duration-1000 group-hover:w-[70%]" />
                 </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                 <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                    <p className="text-[8px] text-white/50 uppercase tracking-widest font-black mb-1">Allocated</p>
                    <p className="font-bold text-sm text-white">$2,000</p>
                 </div>
                 <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-brand-green">
                    <p className="text-[8px] text-white/50 uppercase tracking-widest font-black mb-1">Available</p>
                    <p className="font-bold text-sm">$760</p>
                 </div>
              </div>
            </div>
            <Button className="w-full mt-8 h-12 bg-white hover:bg-brand-green border-none text-brand-blue font-black uppercase tracking-tight text-xs shadow-xl group-hover:translate-y-[-2px] transition-all">Generate PDF Audit</Button>
            {/* Background design */}
            <div className="absolute -right-20 -top-20 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
          </Card>

          <Card className="p-8 space-y-6">
            <h3 className="font-bold text-brand-blue text-lg flex items-center gap-2">
              <Clock className="w-4 h-4 text-brand-blue/30" />
              Projected
            </h3>
            <div className="space-y-4">
              {[
                { name: 'Nanny Service', date: 'In 3 days', amount: 350, type: 'Professional' },
                { name: 'Maintenance', date: 'In 8 days', amount: 50, type: 'Recurring' },
              ].map((up, i) => (
                <div key={i} className="flex justify-between items-center p-4 bg-slate-50/50 border border-slate-100 rounded-2xl group hover:bg-white hover:shadow-lg hover:shadow-slate-100 transition-all cursor-pointer">
                  <div>
                    <p className="text-xs font-bold text-brand-blue group-hover:text-brand-green transition-colors">{up.name}</p>
                    <p className="text-[9px] text-slate-500 font-bold uppercase tracking-tighter mt-0.5">{up.type} • {up.date}</p>
                  </div>
                  <p className="font-black text-brand-blue group-hover:scale-110 transition-transform">${up.amount}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-[10px] text-slate-500 font-medium">Automatic billing is enabled for these services.</p>
          </Card>
        </div>
      </div>
    </div>
  );
}
