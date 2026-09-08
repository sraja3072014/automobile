import React, { useEffect, useState } from 'react';
import { Flame } from 'lucide-react';

export default function Header() {
	const [currentTime, setCurrentTime] = useState(new Date());

	useEffect(() => {
		const timer = setInterval(() => setCurrentTime(new Date()), 1000);
		return () => clearInterval(timer);
	}, []);

	return (
		<header className="h-16 classic-glass-header px-6 flex items-center justify-between gap-4 shrink-0 select-none z-10 w-full">
			<div className="shrink-0 flex items-center gap-3">
				<div className="flex flex-col">
					<h1 className="text-sm md:text-base font-black text-white tracking-wide flex items-center gap-2">
						<span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-lg shadow-cyan-400/80"></span>
						AUTOTECH MULTI-BIZ ERP
					</h1>
					<p className="text-[10px] text-cyan-200/60 font-medium">Mobiles • Car Decors • CCTV • Audio Desk</p>
				</div>
			</div>

			<div className="flex-1 max-w-xl mx-2 overflow-hidden rounded-full bg-black/30 border border-cyan-500/20 px-4 py-1.5 flex items-center gap-3">
				<span className="shrink-0 px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-[10px] font-semibold flex items-center gap-1.5 border border-cyan-500/30">
					<Flame size={12} className="text-cyan-400" /> LIVE ALERTS
				</span>
				<div className="w-full overflow-hidden whitespace-nowrap">
					<p className="inline-block animate-marquee text-xs text-slate-200 tracking-wide font-normal">
						6 Service Devices Ready for Delivery • Star Supermarket CCTV Installation 70% Completed • JBL Bass Tubes Low Stock Alert (Only 2 Left)
					</p>
				</div>
			</div>

			<div className="flex items-center gap-4 shrink-0">
				<div className="text-right hidden sm:block border-r border-white/10 pr-4">
					<p className="text-xs md:text-sm font-bold tracking-wider text-cyan-100 font-mono">
						{currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })}
					</p>
					<p className="text-[10px] text-slate-400 font-medium">
						{currentTime.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}
					</p>
				</div>

				<div className="flex items-center gap-2.5 bg-cyan-500/10 hover:bg-cyan-500/20 transition p-1 pr-3 rounded-full border border-cyan-500/20 cursor-pointer">
					<div className="w-7 h-7 rounded-full bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 flex items-center justify-center font-bold text-[11px] text-white shadow-md shadow-cyan-500/30">
						AD
					</div>
					<div className="text-left leading-tight hidden md:block">
						<p className="text-xs font-semibold text-white">Admin Desk</p>
						<p className="text-[9px] text-emerald-400 font-medium">Main Branch</p>
					</div>
				</div>
			</div>
		</header>
	);
}
