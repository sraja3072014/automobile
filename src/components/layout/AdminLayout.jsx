import React, { useState } from 'react';
import { 
  LayoutDashboard, ShoppingCart, Wrench, Video, 
  Package, Users, BarChart3, Settings, Search, 
  Bell, Plus, Menu, User 
} from 'lucide-react';
import PosBilling from '../../pages/PosBilling';
import JobCardPage from '../../pages/JobCardPage';
import CctvInstallationPage from '../../pages/CctvInstallationPage';
import InventoryPage from '../../pages/InventoryPage';
import StaffPayrollPage from '../../pages/StaffPayrollPage';
import ReportsPage from '../../pages/ReportsPage';
import SettingsPage from '../../pages/SettingsPage';

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('Dashboard');

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard },
    { name: 'POS Billing', icon: ShoppingCart },
    { name: 'Service / Job Cards', icon: Wrench },
    { name: 'CCTV Installations', icon: Video },
    { name: 'Stock & Inventory', icon: Package },
    { name: 'Staff & Payroll', icon: Users },
    { name: 'Reports & Accounts', icon: BarChart3 },
    { name: 'Settings', icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-gray-50 text-gray-800 font-sans">
      {/* 1. SIDEBAR */}
      <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-slate-900 text-white transition-all duration-300 flex flex-col`}>
        <div className="flex items-center justify-between p-4 border-b border-slate-800">
          {sidebarOpen ? (
            <div>
              <h1 className="font-bold text-lg text-blue-400">AUTO-TECH</h1>
              <p className="text-xs text-gray-400">Multi-Business ERP</p>
            </div>
          ) : (
            <span className="font-bold text-blue-400 mx-auto">AT</span>
          )}
        </div>

        <div className="p-3">
          <button 
            onClick={() => setActiveTab('POS Billing')}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-3 rounded-lg flex items-center justify-center gap-2 shadow-sm transition"
          >
            <Plus size={18} />
            {sidebarOpen && <span>New Sale (POS)</span>}
          </button>
        </div>

        <nav className="flex-1 px-3 space-y-1 overflow-y-auto">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeTab === item.name;
            return (
              <button
                key={index}
                onClick={() => setActiveTab(item.name)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition text-left ${
                  isActive 
                    ? 'bg-blue-600 text-white shadow-sm' 
                    : 'text-gray-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <Icon size={20} className="shrink-0" />
                {sidebarOpen && <span>{item.name}</span>}
              </button>
            );
          })}
        </nav>
      </aside>

      {/* 2. MAIN WRAPPER */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
          <div className="flex items-center gap-4 w-1/3">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 rounded-lg hover:bg-gray-100 text-gray-600">
              <Menu size={20} />
            </button>
            <div className="relative w-full">
              <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search Invoice, IMEI, Job Card No..."
                className="w-full pl-10 pr-4 py-2 text-sm bg-gray-100 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-full">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-semibold">
                <User size={18} />
              </div>
              <div className="text-left hidden sm:block">
                <p className="text-sm font-semibold text-gray-800 leading-none">Admin Counter</p>
                <span className="text-xs text-green-600 font-medium">● Online</span>
              </div>
            </div>
          </div>
        </header>

        {/* 3. DYNAMIC BODY ROUTING */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          {activeTab === 'Dashboard' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                  <p className="text-xs text-gray-500 font-medium">Today's Sales</p>
                  <p className="text-2xl font-bold text-gray-800 mt-1">₹ 42,850</p>
                  <span className="text-[11px] text-green-600 font-semibold">↑ +12% vs yesterday</span>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                  <p className="text-xs text-gray-500 font-medium">Active Service Jobs</p>
                  <p className="text-2xl font-bold text-blue-600 mt-1">14 Devices</p>
                  <span className="text-[11px] text-blue-600 font-semibold">6 Ready for Delivery</span>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                  <p className="text-xs text-gray-500 font-medium">CCTV Ongoing Sites</p>
                  <p className="text-2xl font-bold text-orange-600 mt-1">3 Sites</p>
                  <span className="text-[11px] text-orange-600 font-semibold">2 Technicians On Field</span>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                  <p className="text-xs text-gray-500 font-medium">Staff Present</p>
                  <p className="text-2xl font-bold text-emerald-600 mt-1">8 / 9 Staff</p>
                  <span className="text-[11px] text-gray-400 font-semibold">1 On Leave</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                  <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-bold text-sm text-gray-800 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                        Live Service Queue
                      </h3>
                      <button onClick={() => setActiveTab('Service / Job Cards')} className="text-xs text-blue-600 hover:underline font-semibold">View All →</button>
                    </div>
                    <div className="space-y-2 text-xs">
                      {[
                        { id: 'JC-083', customer: 'Anand Kumar', device: 'Creta Android Panel', status: 'Ready for Delivery', color: 'bg-emerald-50 text-emerald-700' },
                        { id: 'JC-081', customer: 'Karthik Raja', device: 'iPhone 13 Display', status: 'Diagnosing', color: 'bg-amber-50 text-amber-700' },
                        { id: 'JC-082', customer: 'Murugan Sound', device: 'Sony 5.1 System', status: 'Waiting for Parts', color: 'bg-red-50 text-red-700' },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between p-2.5 rounded-lg border border-gray-100">
                          <div>
                            <span className="font-bold text-blue-600 mr-2">{item.id}</span>
                            <span className="font-semibold text-gray-800">{item.customer}</span>
                            <span className="text-gray-400 mx-1.5">•</span>
                            <span className="text-gray-500">{item.device}</span>
                          </div>
                          <span className={`px-2 py-0.5 rounded font-semibold text-[10px] ${item.color}`}>{item.status}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
                    <h3 className="font-bold text-sm text-gray-800 mb-3 text-red-600 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-500"></span> Low Stock Alerts
                    </h3>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between py-1 border-b"><span>JBL Bass Tubes</span><span className="text-red-600 font-bold">Only 2 Left</span></div>
                      <div className="flex justify-between py-1 border-b"><span>CP Plus DVR 8CH</span><span className="text-red-600 font-bold">Only 1 Left</span></div>
                      <div className="flex justify-between py-1"><span>iPhone 13 Display</span><span className="text-red-600 font-bold">Out of Stock</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'POS Billing' && <PosBilling />}
          {activeTab === 'Service / Job Cards' && <JobCardPage />}
          {activeTab === 'CCTV Installations' && <CctvInstallationPage />}
          {activeTab === 'Stock & Inventory' && <InventoryPage />}
          {activeTab === 'Staff & Payroll' && <StaffPayrollPage />}
          {activeTab === 'Reports & Accounts' && <ReportsPage />}
          {activeTab === 'Settings' && <SettingsPage />}
        </main>
      </div>
    </div>
  );
}