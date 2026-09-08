import React from 'react';
import { 
  ShoppingCart, Wrench, Video, Package, 
  TrendingUp, Users, ArrowUpRight, CheckCircle2, 
  AlertCircle, DollarSign, CalendarCheck, ShieldCheck 
} from 'lucide-react';

export default function MainDashboard({ setActiveTab }) {
  return (
    <div className="flex flex-col gap-6 select-none animate-in fade-in duration-200 text-slate-200">
      
      {/* 1. TOP 4 METRIC TILES */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Card 1: Today Sales */}
        <div 
          onClick={() => setActiveTab('pos')}
          className="p-5 win11-card rounded-2xl cursor-pointer flex flex-col justify-between transition hover:scale-[1.01]"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-300">Today Counter Sales</span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300">
              +14.2%
            </span>
          </div>
          <div className="mt-3">
            <p className="text-2xl sm:text-3xl font-black text-white">₹ 42,850</p>
            <span className="text-[10px] text-slate-400 font-semibold mt-1 inline-block">
              28 Invoices generated today
            </span>
          </div>
        </div>

        {/* Card 2: Active Job Cards */}
        <div 
          onClick={() => setActiveTab('service')}
          className="p-5 win11-card rounded-2xl cursor-pointer flex flex-col justify-between transition hover:scale-[1.01]"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-300">Service Devices</span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300">
              6 Ready
            </span>
          </div>
          <div className="mt-3">
            <p className="text-2xl sm:text-3xl font-black text-cyan-400">14 Jobs</p>
            <span className="text-[10px] text-slate-400 font-semibold mt-1 inline-block">
              Mobiles & Sony Audio Systems
            </span>
          </div>
        </div>

        {/* Card 3: CCTV Field Sites */}
        <div 
          onClick={() => setActiveTab('cctv')}
          className="p-5 win11-card rounded-2xl cursor-pointer flex flex-col justify-between transition hover:scale-[1.01]"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-300">CCTV Ongoing Projects</span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300">
              3 Sites
            </span>
          </div>
          <div className="mt-3">
            <p className="text-2xl sm:text-3xl font-black text-amber-400">₹ 3,25,000</p>
            <span className="text-[10px] text-slate-400 font-semibold mt-1 inline-block">
              Total active project value
            </span>
          </div>
        </div>

        {/* Card 4: Staff Present */}
        <div 
          onClick={() => setActiveTab('staff')}
          className="p-5 win11-card rounded-2xl cursor-pointer flex flex-col justify-between transition hover:scale-[1.01]"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-300">Staff Attendance</span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300">
              8/9 Present
            </span>
          </div>
          <div className="mt-3">
            <p className="text-2xl sm:text-3xl font-black text-emerald-400">89% Active</p>
            <span className="text-[10px] text-slate-400 font-semibold mt-1 inline-block">
              1 Tech On Field (Mani)
            </span>
          </div>
        </div>

      </div>

      {/* 2. QUICK LAUNCHERS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Instant POS Billing', desc: 'Scan & Print Thermal / A4 Bill', icon: ShoppingCart, target: 'pos', color: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-300' },
          { label: 'New Service Job Card', desc: 'Mobiles, TV & Audio Intake', icon: Wrench, target: 'service', color: 'from-blue-500/20 to-indigo-500/10 border-blue-500/30 text-blue-300' },
          { label: 'Stock Inward Entry', desc: 'Add CP Plus, Android & Spares', icon: Package, target: 'inventory', color: 'from-amber-500/20 to-orange-500/10 border-amber-500/30 text-amber-300' },
          { label: 'Theme & Display Studio', desc: 'Adjust Acrylic Dark Glass FX', icon: ShieldCheck, target: 'settings', color: 'from-sky-500/20 to-cyan-500/10 border-sky-500/30 text-sky-300' },
        ].map((action, idx) => {
          const Icon = action.icon;
          return (
            <button
              key={idx}
              onClick={() => setActiveTab(action.target)}
              className={`p-4 rounded-2xl border bg-gradient-to-br ${action.color} flex items-center justify-between text-left hover:scale-[1.02] active:scale-98 transition shadow-lg cursor-pointer`}
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center shrink-0">
                  <Icon size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">{action.label}</h4>
                  <p className="text-[10px] text-slate-400 mt-0.5">{action.desc}</p>
                </div>
              </div>
              <ArrowUpRight size={16} className="opacity-70" />
            </button>
          );
        })}
      </div>

      {/* 3. 3-IN-1 LIVE OPERATIONS SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        
        {/* Urgent Service Queue */}
        <div className="p-5 win11-card rounded-2xl border border-white/[0.08] flex flex-col justify-between gap-3">
          <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Wrench className="text-cyan-400" size={15} />
              <span>Service Tracker</span>
            </h4>
            <span className="text-[10px] text-cyan-400 font-mono">14 Active</span>
          </div>

          <div className="space-y-2 text-xs">
            <div className="p-2 rounded-xl bg-black/30 border border-white/5 flex justify-between items-center">
              <div>
                <p className="font-bold text-white">Creta Android Panel 9"</p>
                <p className="text-[10px] text-slate-400">Anand Kumar • Camera Flickering</p>
              </div>
              <span className="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded text-[10px] font-bold">Ready</span>
            </div>
            <div className="p-2 rounded-xl bg-black/30 border border-white/5 flex justify-between items-center">
              <div>
                <p className="font-bold text-white">Sony 5.1 Subwoofer</p>
                <p className="text-[10px] text-slate-400">Murugan Sound • IC Burned</p>
              </div>
              <span className="bg-red-500/20 text-red-300 px-2 py-0.5 rounded text-[10px] font-bold">Waiting Parts</span>
            </div>
          </div>

          <button onClick={() => setActiveTab('service')} className="text-[10px] text-cyan-400 text-center border-t border-white/5 pt-2 hover:underline">
            View All Service Job Cards →
          </button>
        </div>

        {/* CCTV Field Works */}
        <div className="p-5 win11-card rounded-2xl border border-white/[0.08] flex flex-col justify-between gap-3">
          <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Video className="text-amber-400" size={15} />
              <span>CCTV Sites</span>
            </h4>
            <span className="text-[10px] text-amber-400 font-mono">3 Ongoing</span>
          </div>

          <div className="space-y-2 text-xs">
            <div className="p-2.5 rounded-xl bg-black/30 border border-white/5">
              <div className="flex justify-between font-bold text-white">
                <span>Star Supermarket</span>
                <span className="text-amber-400 text-[10px]">Cabling 70%</span>
              </div>
              <p className="text-[10px] text-slate-400 mt-1">Tech: Mani & Praveen (8 Cameras)</p>
            </div>
            <div className="p-2.5 rounded-xl bg-black/30 border border-white/5">
              <div className="flex justify-between font-bold text-white">
                <span>Green Valley Farm</span>
                <span className="text-emerald-400 text-[10px]">Ready for Handover</span>
              </div>
              <p className="text-[10px] text-slate-400 mt-1">Tech: Vignesh (16 Cameras)</p>
            </div>
          </div>

          <button onClick={() => setActiveTab('cctv')} className="text-[10px] text-amber-400 text-center border-t border-white/5 pt-2 hover:underline">
            Open CCTV Installations Manager →
          </button>
        </div>

        {/* Low Stock Alerts */}
        <div className="p-5 win11-card rounded-2xl border border-white/[0.08] flex flex-col justify-between gap-3">
          <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <AlertCircle className="text-rose-400" size={15} />
              <span>Low Stock Alerts</span>
            </h4>
            <span className="text-[10px] text-rose-400 font-mono">Action Needed</span>
          </div>

          <div className="space-y-2 text-xs">
            <div className="flex justify-between items-center p-2 rounded-xl bg-black/30 border border-white/5">
              <span className="text-slate-200">JBL Bass Tube 1200W</span>
              <span className="text-rose-400 font-bold bg-rose-500/20 px-2 py-0.5 rounded text-[10px]">2 Left</span>
            </div>
            <div className="flex justify-between items-center p-2 rounded-xl bg-black/30 border border-white/5">
              <span className="text-slate-200">CP Plus 2MP Dome Cam</span>
              <span className="text-rose-400 font-bold bg-rose-500/20 px-2 py-0.5 rounded text-[10px]">1 Left</span>
            </div>
          </div>

          <button onClick={() => setActiveTab('inventory')} className="text-[10px] text-rose-400 text-center border-t border-white/5 pt-2 hover:underline">
            Create Purchase Inward Order →
          </button>
        </div>

      </div>

    </div>
  );
}