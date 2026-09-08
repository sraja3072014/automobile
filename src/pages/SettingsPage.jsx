import React from 'react';
import { Settings, Store, Printer, MessageSquare, Shield } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="space-y-5">
      <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
        <h2 className="font-bold text-gray-800 text-base">ERP System Settings</h2>
        <p className="text-xs text-gray-400">கடை விவரங்கள், பிரிண்டர் மற்றும் வாட்ஸ்அப் அமைப்புகள்</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm space-y-3">
          <h3 className="font-bold text-gray-800 text-sm flex items-center gap-2"><Store size={16} /> Shop Profile</h3>
          <div className="space-y-2">
            <div><label className="text-gray-500 block mb-1">Business Name</label><input type="text" defaultValue="AutoTech Mobiles & Car Decors" className="w-full p-2 bg-gray-50 border rounded-lg" /></div>
            <div><label className="text-gray-500 block mb-1">GSTIN Number</label><input type="text" defaultValue="33AAAAA0000A1Z5" className="w-full p-2 bg-gray-50 border rounded-lg" /></div>
            <div><label className="text-gray-500 block mb-1">Shop Address & Contact</label><input type="text" defaultValue="124, Main Road, Koduvai - 9876543210" className="w-full p-2 bg-gray-50 border rounded-lg" /></div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm space-y-3">
          <h3 className="font-bold text-gray-800 text-sm flex items-center gap-2"><MessageSquare size={16} /> WhatsApp & Thermal Printer</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div><p className="font-bold text-gray-800">Auto WhatsApp Invoice</p><p className="text-gray-400 text-[10px]">Send PDF bill to customer after checkout</p></div>
              <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded" />
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div><p className="font-bold text-gray-800">Thermal Printer (2 Inch / 3 Inch)</p><p className="text-gray-400 text-[10px]">Instant POS Slip Auto-Print</p></div>
              <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}