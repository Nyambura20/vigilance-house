
import { useState } from 'react';
import { Search, Filter, Plus, MessageSquare, Star, MoreVertical, X, CheckSquare } from 'lucide-react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

const MOCK_EMPLOYEES = [
  { id: 1, name: 'Grace Atieno', role: 'House Manager', rating: 4.9, hireDate: '2024-01-15', status: 'Active', image: null },
  { id: 2, name: 'John Mwangi', role: 'Professional Gardener', rating: 4.7, hireDate: '2024-03-10', status: 'Active', image: null },
  { id: 3, name: 'Sarah Kimani', role: 'Nanny', rating: 5.0, hireDate: '2023-11-20', status: 'On Leave', image: null },
  { id: 4, name: 'David Omondi', role: 'Electrician', rating: 4.8, hireDate: '2024-04-22', status: 'Completed', image: null },
];

export default function Employees() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredEmployees = MOCK_EMPLOYEES.filter(emp => {
    const matchesSearch = emp.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === 'All' || emp.role.includes(filterRole);
    return matchesSearch && matchesRole;
  });

  return (
    <div className="space-y-10">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        <div>
          <h1 className="text-4xl font-bold text-brand-blue tracking-tight">Management</h1>
          <p className="text-slate-600 font-medium mt-1">Operational control of your household professional staff.</p>
        </div>
        <Button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 h-12 shadow-xl shadow-brand-blue/10 bg-brand-blue hover:bg-brand-blue/90"
        >
          <Plus className="w-4 h-4" />
          Onboard New Member
        </Button>
      </div>

      {/* Request Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />
          <Card className="relative z-10 w-full max-w-xl p-0 overflow-hidden shadow-2xl border-none">
            <div className="p-8 bg-brand-blue text-white flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">Personnel Request</h2>
                <p className="text-white/80 text-sm mt-1">Initiate a new staffing request for your household.</p>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-white/10 rounded-xl transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-8 space-y-6 bg-white">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block">Role Category</label>
                  <select className="w-full h-12 px-4 bg-slate-50 border border-slate-100 rounded-xl text-sm font-bold focus:ring-4 focus:ring-brand-blue/5 outline-none">
                    <option>Select Role</option>
                    <option>House Manager</option>
                    <option>Nanny</option>
                    <option>Professional Chef</option>
                    <option>Security Personal</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block">Experience Level</label>
                  <select className="w-full h-12 px-4 bg-slate-50 border border-slate-100 rounded-xl text-sm font-bold focus:ring-4 focus:ring-brand-blue/5 outline-none">
                    <option>3+ Years</option>
                    <option>5+ Years</option>
                    <option>10+ Years (Senior)</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block">Operational Requirements</label>
                <textarea 
                  placeholder="Describe specific duties, schedule, or qualifications..." 
                  className="w-full h-32 p-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-medium focus:ring-4 focus:ring-brand-blue/5 outline-none resize-none transition-all placeholder:text-slate-400"
                />
              </div>
              <div className="flex items-center gap-3 p-4 bg-green-50 rounded-2xl border border-green-100">
                <CheckSquare className="w-5 h-5 text-brand-green" />
                <p className="text-[10px] font-bold text-green-700 leading-tight uppercase tracking-wider">Background screening and medical clearance are included by default.</p>
              </div>
              <div className="pt-4 flex gap-4">
                <Button 
                  onClick={() => setIsModalOpen(false)}
                  variant="ghost" 
                  className="flex-grow h-12 text-slate-400 font-bold"
                >
                  Cancel
                </Button>
                <Button 
                  onClick={() => setIsModalOpen(false)}
                  className="flex-grow h-12 bg-brand-blue shadow-xl shadow-brand-blue/10 font-bold"
                >
                  Submit Request
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-4 bg-white p-2 rounded-2xl border border-slate-100 shadow-sm">
        <div className="relative flex-grow">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
          <input 
            type="text" 
            placeholder="Search by name, role or ID..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full h-12 pl-12 pr-4 bg-slate-50 border border-transparent rounded-xl text-xs font-medium focus:ring-2 focus:ring-brand-blue/10 outline-none transition-all focus:bg-white focus:border-slate-100"
          />
        </div>
        <div className="flex gap-2 p-2 bg-slate-100/50 rounded-xl">
          <select 
            value={filterRole}
            onChange={(e) => setFilterRole(e.target.value)}
            className="h-10 px-4 bg-transparent border-none rounded-lg text-xs font-bold focus:ring-0 outline-none text-brand-blue uppercase tracking-widest cursor-pointer"
          >
            <option value="All">All Roles</option>
            <option value="Manager">House Manager</option>
            <option value="Nanny">Nanny</option>
            <option value="Gardener">Gardener</option>
            <option value="Electrician">Electrician</option>
          </select>
          <div className="h-10 w-[1px] bg-slate-200" />
          <button className="h-10 w-10 flex items-center justify-center text-slate-400 hover:text-brand-blue transition-colors">
            <Filter className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {filteredEmployees.map((emp) => (
          <Card key={emp.id} className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-slate-100">
            <div className="p-8 space-y-6 relative z-10">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden relative border-4 border-white shadow-md group-hover:scale-105 transition-all duration-500">
                    <div className="w-full h-full bg-gradient-to-br from-slate-50 to-slate-200 flex items-center justify-center font-black text-2xl text-slate-400 group-hover:from-brand-blue/10 group-hover:to-brand-blue/5 group-hover:text-brand-blue transition-all">
                      {emp.name[0]}
                    </div>
                    {emp.status === 'Active' && <div className="absolute right-0 bottom-0 w-4 h-4 bg-brand-green border-2 border-white rounded-full shadow-sm" />}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-brand-blue group-hover:text-brand-green transition-colors leading-tight">{emp.name}</h3>
                    <p className="text-[10px] text-slate-600 font-black uppercase tracking-widest mt-1">{emp.role}</p>
                  </div>
                </div>
                <button className="text-slate-300 hover:text-brand-blue p-1 transition-colors">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 bg-gradient-to-br from-white to-slate-50 rounded-[1.5rem] border border-slate-100 shadow-sm group-hover:shadow-md transition-all">
                  <p className="text-[9px] uppercase tracking-[0.15em] font-black text-slate-400 mb-2">Availability</p>
                  <div className="flex items-center gap-2">
                    <div className={`w-2.5 h-2.5 rounded-full ${emp.status === 'Active' ? 'bg-brand-green animate-pulse shadow-lg shadow-brand-green/20' : emp.status === 'On Leave' ? 'bg-amber-500 shadow-lg shadow-amber-500/20' : 'bg-slate-400'}`} />
                    <span className="text-xs font-black text-brand-blue uppercase">{emp.status}</span>
                  </div>
                </div>
                <div className="p-5 bg-gradient-to-br from-white to-slate-50 rounded-[1.5rem] border border-slate-100 shadow-sm group-hover:shadow-md transition-all">
                  <p className="text-[9px] uppercase tracking-[0.15em] font-black text-slate-400 mb-2">Efficiency</p>
                  <div className="flex items-center gap-1.5">
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                    <span className="text-sm font-black text-brand-blue">{emp.rating}</span>
                    <span className="text-[10px] text-slate-400 font-black">/ 5.0</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center gap-3">
                <Button variant="outline" className="flex-1 h-12 rounded-2xl border-brand-blue/20 text-brand-blue hover:bg-brand-blue hover:text-white flex items-center justify-center gap-2 transition-all">
                  <MessageSquare className="w-4 h-4 shrink-0" />
                  <span className="text-[10px] font-black uppercase tracking-tight whitespace-nowrap">Chat</span>
                </Button>
                <Button className="flex-[1.8] h-12 text-[10px] font-black uppercase rounded-2xl bg-brand-blue shadow-lg shadow-brand-blue/20 text-white transition-all">Manage Personnel</Button>
              </div>
            </div>
            {/* Background design elements */}
            <div className={`absolute -right-10 -bottom-10 w-32 h-32 ${emp.status === 'Active' ? 'bg-brand-green/5' : 'bg-slate-50'} rounded-full blur-3xl`} />
          </Card>
        ))}
      </div>

      {filteredEmployees.length === 0 && (
        <div className="py-20 text-center space-y-4">
          <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto text-slate-400">
            <Search className="w-8 h-8" />
          </div>
          <p className="text-slate-500">No employees found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}
