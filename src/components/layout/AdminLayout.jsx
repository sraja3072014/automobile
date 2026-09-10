import React, { useState } from 'react';
import Header from './Header';
import FusionSidebar from './Sidebar';
import MainDashboard from '../../pages/MainDashboard';
import PosBilling from '../../pages/PosBilling';
import JobCardPage from '../../pages/JobCardPage';
import CctvInstallationPage from '../../pages/CctvInstallationPage';
import InventoryPage from '../../pages/InventoryPage';
import StaffPayrollPage from '../../pages/StaffPayrollPage';
import ReportsPage from '../../pages/ReportsPage';
import SettingsPage from '../../pages/SettingsPage';

export default function AdminLayout() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="flex h-screen bg-[#070b14] text-slate-100 font-sans overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-32 -left-32 w-[550px] h-[550px] rounded-full bg-cyan-500/25 blur-[120px]" />
        <div className="absolute top-1/3 -right-32 w-[600px] h-[600px] rounded-full bg-purple-600/20 blur-[140px]" />
        <div className="absolute -bottom-32 left-1/3 w-[650px] h-[650px] rounded-full bg-rose-500/15 blur-[150px]" />
      </div>

      <div className="relative z-20">
        <FusionSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      <div className="flex-1 flex flex-col overflow-hidden pb-16 relative z-10">
        <Header />

        <main className="flex-1 overflow-y-auto p-6">
          {activeTab === 'dashboard' && <MainDashboard setActiveTab={setActiveTab} />}
          {activeTab === 'pos' && <PosBilling />}
          {activeTab === 'service' && <JobCardPage />}
          {activeTab === 'cctv' && <CctvInstallationPage />}
          {activeTab === 'inventory' && <InventoryPage />}
          {activeTab === 'staff' && <StaffPayrollPage />}
          {activeTab === 'reports' && <ReportsPage />}
          {activeTab === 'settings' && <SettingsPage />}
        </main>
      </div>

    </div>
  );
}
