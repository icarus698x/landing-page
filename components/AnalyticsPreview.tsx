import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Activity, Search, AlertCircle, Database } from 'lucide-react';

// Mock data simulating search volume and gap identification
const searchVolumeData = [
  { time: '08:00', volume: 120, gaps: 5 },
  { time: '10:00', volume: 280, gaps: 12 },
  { time: '12:00', volume: 450, gaps: 8 },
  { time: '14:00', volume: 390, gaps: 15 },
  { time: '16:00', volume: 510, gaps: 4 },
  { time: '18:00', volume: 220, gaps: 2 },
];

const StatCard = ({ label, value, trend, icon: Icon, color }: any) => (
    <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-start space-x-4">
        <div className={`p-2 rounded-lg ${color} bg-opacity-10`}>
            <Icon className={`w-5 h-5 ${color.replace('bg-', 'text-')}`} />
        </div>
        <div>
            <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">{label}</p>
            <div className="flex items-baseline gap-2 mt-1">
                <span className="text-xl font-bold text-slate-900">{value}</span>
                <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full">{trend}</span>
            </div>
        </div>
    </div>
);

const AnalyticsPreview: React.FC = () => {
  return (
    <section id="analytics" className="py-24 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-brand-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 bg-accent-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="w-full lg:w-1/2">
             <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-bold uppercase tracking-wide mb-6">
                <Activity className="w-3 h-3 mr-2" />
                Search Intelligence
             </div>
             <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Gain Visibility into <br/> <span className="text-brand-600">Engineering Demand</span></h2>
             <p className="text-lg text-slate-600 mb-8 leading-relaxed">
               Don't just search—analyze. Understand what your engineers are looking for, identify data gaps in real-time, and track duplicate part creation before it happens.
             </p>
             
             <div className="space-y-6">
                <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-lg bg-white border border-slate-200 text-brand-600 shadow-sm">
                        <Search className="w-5 h-5" />
                    </div>
                    <div className="ml-4">
                        <h4 className="text-base font-bold text-slate-900">Search Behavior Analytics</h4>
                        <p className="text-sm text-slate-600 mt-1">See exactly what terms and geometries your team is searching for.</p>
                    </div>
                </div>
                <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-lg bg-white border border-slate-200 text-brand-600 shadow-sm">
                        <AlertCircle className="w-5 h-5" />
                    </div>
                    <div className="ml-4">
                        <h4 className="text-base font-bold text-slate-900">Gap Identification</h4>
                        <p className="text-sm text-slate-600 mt-1">Automatically flag searches that yield zero results to identify inventory gaps.</p>
                    </div>
                </div>
                <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-lg bg-white border border-slate-200 text-brand-600 shadow-sm">
                        <Database className="w-5 h-5" />
                    </div>
                    <div className="ml-4">
                        <h4 className="text-base font-bold text-slate-900">Duplicate Prevention</h4>
                        <p className="text-sm text-slate-600 mt-1">Proactively warn engineers when a similar part exists in the system.</p>
                    </div>
                </div>
             </div>
          </div>

          {/* Dashboard Visualization */}
          <div className="w-full lg:w-1/2">
             <div className="bg-white rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-100 p-6 relative">
                 <div className="flex items-center justify-between mb-6">
                    <h3 className="font-bold text-slate-800 flex items-center gap-2">
                        <Activity className="w-4 h-4 text-brand-500" />
                        Live Search Volume
                    </h3>
                    <span className="text-xs font-medium text-slate-400">Last 24 Hours</span>
                 </div>
                 
                 {/* Mock Area Chart */}
                 <div className="h-48 w-full mb-6">
                   <ResponsiveContainer width="100%" height="100%">
                     <AreaChart data={searchVolumeData}>
                       <defs>
                         <linearGradient id="colorVolume" x1="0" y1="0" x2="0" y2="1">
                           <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.2}/>
                           <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                         </linearGradient>
                       </defs>
                       <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9"/>
                       <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#94a3b8'}} />
                       <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#94a3b8'}} />
                       <Tooltip 
                            contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                       />
                       <Area type="monotone" dataKey="volume" stroke="#4f46e5" strokeWidth={3} fillOpacity={1} fill="url(#colorVolume)" />
                     </AreaChart>
                   </ResponsiveContainer>
                 </div>

                 {/* Stats Grid */}
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     <StatCard 
                        label="Total Searches" 
                        value="12,450" 
                        trend="+18%" 
                        icon={Search}
                        color="bg-brand-500 text-brand-600"
                     />
                     <StatCard 
                        label="Missing Parts Identified" 
                        value="42" 
                        trend="Action Req" 
                        icon={AlertCircle}
                        color="bg-rose-500 text-rose-600"
                     />
                 </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AnalyticsPreview;