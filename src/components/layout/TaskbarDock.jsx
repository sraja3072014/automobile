import React, { useState } from 'react';
import { 
  LayoutGrid, LayoutDashboard, ShoppingCart, Wrench, 
  Video, Package, Users, BarChart3, Settings, Search, Sparkles, X 
} from 'lucide-react';

export default function TaskbarDock({ activeTab, setActiveTab }) {
  const [startOpen, setStartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const allModules = [
    { id: 'dashboard', label: 'Dashboard', desc: 'Realtime ERP Metrics', icon: LayoutDashboard },
    { id: 'pos', label: 'POS Billing', desc: 'Quick Counter Sales & A4 Invoices', icon: ShoppingCart },
    { id: 'service', label: 'Service Desk', desc: 'Mobiles & Audio Job Cards', icon: Wrench },
    { id: 'cctv', label: 'CCTV Works', desc: 'Field Installation & Quotes', icon: Video },
    { id: 'inventory', label: 'Stock Inward', desc: 'Product Registry & Serial IDs', icon: Package },
    { id: 'staff', label: 'Staff Payroll', desc: 'Punch In & Daily Salaries', icon: Users },
    { id: 'reports', label: 'Analytics', desc: 'P&L Reports & GST Audit', icon: BarChart3 },
    { id: 'settings', label: 'Theme Studio', desc: 'Acrylic Colors & Wallpaper', icon: Settings },
  ];

  const filteredApps = allModules.filter((app) =>
    app.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
    app.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center">
      {/* Windows 11 Start Menu */}
      {startOpen && (
        <div className="mb-3 w-[460px] p-5 rounded-3xl bg-slate-900/90 backdrop-blur-3xl border border-white/20 shadow-2xl animate-in slide-in-from-bottom-5 duration-200">
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-cyan-400" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">AutoTech ERP Launchpad</span>
            </div>
            <button onClick={() => setStartOpen(false)} className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition">
              <X size={14} />
            </button>
          </div>

          <div className="relative mb-3">
            <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search POS, Job Cards, CCTV, Stock..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950/80 border border-white/10 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 font-medium"
            />
          </div>

          <div className="grid grid-cols-2 gap-2 max-h-[300px] overflow-y-auto pr-1">
            {filteredApps.map((app) => {
              const Icon = app.icon;
              const isActive = activeTab === app.id;
              return (
                <button
                  key={app.id}
                  onClick={() => { setActiveTab(app.id); setStartOpen(false); }}
                  className={`flex items-center gap-3 p-2.5 rounded-xl transition text-left border ${
                    isActive ? 'bg-cyan-500/20 border-cyan-400 text-white' : 'border-white/5 hover:bg-white/10 text-slate-300'
                  }`}
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-cyan-400">
                    <Icon size={16} />
                  </div>
                  <div>
                    <div className="text-xs font-bold">{app.label}</div>
                    <div className="text-[10px] text-slate-400 truncate">{app.desc}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Floating Taskbar Dock */}
      <div className="px-3 py-2 rounded-2xl bg-slate-900/80 backdrop-blur-2xl border border-white/20 shadow-2xl flex items-center gap-1.5">
        <button
          onClick={() => setStartOpen(!startOpen)}
          className={`p-2.5 rounded-xl transition flex items-center justify-center ${
            startOpen ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg' : 'hover:bg-white/10 text-cyan-400'
          }`}
          title="All Modules"
        >
          <LayoutGrid size={18} />
        </button>

        <div className="w-[1px] h-5 bg-white/15 mx-1 shrink-0" />

        {allModules.map((app) => {
          const Icon = app.icon;
          const isActive = activeTab === app.id;
          return (
            <button
              key={app.id}
              onClick={() => { setActiveTab(app.id); setStartOpen(false); }}
              title={app.label}
              className={`p-2.5 rounded-xl transition relative group shrink-0 ${
                isActive ? 'bg-white/15 text-cyan-300 shadow-inner' : 'hover:bg-white/10 text-slate-400 hover:text-white'
              }`}
            >
              <Icon size={17} />
              {isActive && (
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-2.5 h-0.5 rounded-full bg-cyan-400 shadow-sm" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}