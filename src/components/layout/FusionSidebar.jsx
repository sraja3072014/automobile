import React, { useState } from 'react';
import {
	LayoutDashboard, ShoppingCart, Wrench, Video,
	Package, Users, BarChart3, Settings, ShieldCheck,
	LogOut, ChevronDown, Building2
} from 'lucide-react';

export default function FusionSidebar({ activeTab, setActiveTab }) {
	const [activeBranch, setActiveBranch] = useState('Main Branch (Koduvai)');
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const branches = [
		{ id: 1, name: 'Main Branch (Koduvai)' },
		{ id: 2, name: 'City Service Center (Tiruppur)' },
		{ id: 3, name: 'Car Decors Hub (Palladam)' }
	];

	const menuItems = [
		{ id: 'dashboard', label: 'Main Dashboard', icon: LayoutDashboard, color: 'from-cyan-500 to-blue-600' },
		{ id: 'pos', label: 'POS Billing Counter', icon: ShoppingCart, color: 'from-emerald-500 to-teal-600' },
		{ id: 'service', label: 'Service / Job Cards', icon: Wrench, color: 'from-indigo-500 to-purple-600' },
		{ id: 'cctv', label: 'CCTV Field Works', icon: Video, color: 'from-amber-500 to-orange-600' },
		{ id: 'inventory', label: 'Stock & Inward', icon: Package, color: 'from-rose-500 to-pink-600' },
		{ id: 'staff', label: 'Staff & Attendance', icon: Users, color: 'from-sky-500 to-indigo-600' },
		{ id: 'reports', label: 'Reports & P&L', icon: BarChart3, color: 'from-teal-400 to-cyan-600' },
		{ id: 'settings', label: 'Theme & Settings', icon: Settings, color: 'from-slate-400 to-slate-600' },
	];

	return (
		<aside className="w-68 win11-glass flex flex-col justify-between p-3.5 select-none shrink-0 z-20 m-3 rounded-2xl border border-white/10">
			<div className="flex flex-col gap-4">
				<div className="relative">
					<div
						onClick={() => setIsDropdownOpen(!isDropdownOpen)}
						className="flex items-center justify-between p-2 rounded-xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] cursor-pointer transition"
					>
						<div className="flex items-center gap-3 overflow-hidden">
							<div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-400 via-blue-600 to-indigo-600 flex items-center justify-center font-black text-white text-lg shadow-lg shadow-cyan-500/20 shrink-0 border border-white/20">
								AT
							</div>
							<div className="overflow-hidden">
								<h1 className="text-xs font-black text-white tracking-wide truncate">AutoTech Multi-ERP</h1>
								<p className="text-[10px] text-cyan-300 font-medium truncate flex items-center gap-1 mt-0.5">
									<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
									{activeBranch}
								</p>
							</div>
						</div>
						<ChevronDown size={14} className="text-slate-400 shrink-0 ml-1" />
					</div>

					{isDropdownOpen && (
						<div className="absolute top-full left-0 right-0 mt-1.5 bg-slate-900 border border-white/15 rounded-xl p-1.5 shadow-2xl z-30 flex flex-col gap-1">
							{branches.map((branch) => (
								<button
									key={branch.id}
									onClick={() => { setActiveBranch(branch.name); setIsDropdownOpen(false); }}
									className="w-full text-left px-2.5 py-1.5 rounded-lg text-[11px] font-medium text-slate-200 hover:bg-white/10 flex items-center gap-2"
								>
									<Building2 size={12} className="text-cyan-400" />
									<span className="truncate">{branch.name}</span>
								</button>
							))}
						</div>
					)}
				</div>

				<nav className="flex flex-col gap-1.5 overflow-y-auto max-h-[calc(100vh-250px)] pr-1">
					{menuItems.map((item) => {
						const Icon = item.icon;
						const isActive = activeTab === item.id;
						return (
							<button
								key={item.id}
								onClick={() => setActiveTab(item.id)}
								className={`relative w-full flex items-center gap-3.5 px-3.5 py-2.5 rounded-xl transition-all duration-300 text-left text-xs font-semibold active:scale-95 ${
									isActive
										? 'win11-card text-white border-white/20 shadow-lg shadow-cyan-500/10'
										: 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.05]'
								}`}
							>
								{isActive && (
									<span className="absolute left-1.5 top-2.5 bottom-2.5 w-1 rounded-full bg-cyan-400 shadow-md shadow-cyan-400/80" />
								)}

								<div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-transform ${
									isActive ? `bg-gradient-to-tr ${item.color} text-white shadow-md` : 'bg-white/[0.05] text-slate-400'
								}`}>
									<Icon size={16} />
								</div>

								<span className="truncate">{item.label}</span>
							</button>
						);
					})}
				</nav>
			</div>

			<div className="flex items-center justify-between p-2.5 win11-card rounded-xl border border-white/5">
				<div className="flex items-center gap-2 overflow-hidden">
					<div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
						<ShieldCheck size={15} />
					</div>
					<div className="truncate">
						<p className="text-[11px] font-bold text-slate-200 truncate">Manager Counter</p>
						<p className="text-[9px] text-emerald-400 font-mono">Super Admin</p>
					</div>
				</div>

				<button
					title="Sign Out"
					onClick={() => alert('Logout Triggered')}
					className="w-7 h-7 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 flex items-center justify-center transition active:scale-90 shrink-0"
				>
					<LogOut size={13} />
				</button>
			</div>
		</aside>
	);
}
