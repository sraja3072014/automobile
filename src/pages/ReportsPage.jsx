import React from 'react';
import { BarChart3, TrendingUp, DollarSign, Receipt, CreditCard } from 'lucide-react';

export default function ReportsPage() {
  return (
    <div className="space-y-5">
      <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
        <h2 className="font-bold text-gray-800 text-base">Business Analytics & P&L Reports</h2>
        <p className="text-xs text-gray-400">வணிகப் பிரிவுகளின் லாப நஷ்ட அறிக்கை</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm space-y-3">
          <h3 className="font-bold text-gray-800 text-sm">Category Revenue Breakdown</h3>
          <div className="space-y-2">
            <div><div className="flex justify-between mb-1"><span>Car Decors</span><span className="font-bold">₹1,84,000 (38%)</span></div><div className="w-full bg-gray-100 h-2 rounded"><div className="bg-blue-600 h-2 rounded" style={{width: '38%'}}></div></div></div>
            <div><div className="flex justify-between mb-1"><span>CCTV Projects</span><span className="font-bold">₹1,42,000 (30%)</span></div><div className="w-full bg-gray-100 h-2 rounded"><div className="bg-orange-500 h-2 rounded" style={{width: '30%'}}></div></div></div>
            <div><div className="flex justify-between mb-1"><span>Service (Mobiles & TV)</span><span className="font-bold">₹98,000 (20%)</span></div><div className="w-full bg-gray-100 h-2 rounded"><div className="bg-emerald-500 h-2 rounded" style={{width: '20%'}}></div></div></div>
            <div><div className="flex justify-between mb-1"><span>Mobile Accessories</span><span className="font-bold">₹58,000 (12%)</span></div><div className="w-full bg-gray-100 h-2 rounded"><div className="bg-purple-500 h-2 rounded" style={{width: '12%'}}></div></div></div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm space-y-3">
          <h3 className="font-bold text-gray-800 text-sm">Monthly Financial Summary</h3>
          <div className="p-3 bg-gray-50 rounded-lg space-y-2">
            <div className="flex justify-between"><span>Gross Turnover:</span><span className="font-bold text-gray-800">₹4,82,000</span></div>
            <div className="flex justify-between text-red-600"><span>Stock Purchases (Inward):</span><span>-₹2,95,000</span></div>
            <div className="flex justify-between text-red-600"><span>Staff Salary & Overhead:</span><span>-₹82,000</span></div>
            <div className="flex justify-between pt-2 border-t font-bold text-sm text-emerald-600"><span>Net Profit:</span><span>₹1,05,000</span></div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm space-y-3">
          <h3 className="font-bold text-gray-800 text-sm">Customer Credit (உதார் பாக்கி)</h3>
          <div className="space-y-2">
            <div className="flex justify-between p-2 bg-red-50 rounded text-red-800 font-semibold"><span>Pending Dues:</span><span>₹38,400</span></div>
            <p className="text-gray-400 text-[11px]">8 வாடிக்கையாளர்களிடம் இருந்து பெற வேண்டிய பாக்கித் தொகை.</p>
          </div>
        </div>
      </div>
    </div>
  );
}