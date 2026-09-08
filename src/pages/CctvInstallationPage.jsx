import React, { useState } from 'react';
import { Video, Plus, MapPin, Calendar, Clock, CheckCircle2, User, Phone } from 'lucide-react';

export default function CctvInstallationPage() {
  const [sites, setSites] = useState([
    { id: 'CCT-01', client: 'Star Supermarket', location: 'Gandhipuram, Coimbatore', camCount: 8, tech: 'Mani & Praveen', status: 'Cabling in Progress', date: '20 Aug 2026', totalAmt: 48000, advAmt: 20000 },
    { id: 'CCT-02', client: 'Green Valley Farm House', location: 'Pollachi Main Road', camCount: 16, tech: 'Vignesh', status: 'Configuration Done', date: '19 Aug 2026', totalAmt: 92000, advAmt: 60000 },
    { id: 'CCT-03', client: 'Royal Garments Factory', location: 'Tiruppur', camCount: 32, tech: 'Senthil & Mani', status: 'Site Survey Completed', date: '21 Aug 2026', totalAmt: 185000, advAmt: 50000 },
  ]);

  return (
    <div className="space-y-5">
      <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
        <div>
          <h2 className="font-bold text-gray-800 text-base">CCTV Projects & Field Works</h2>
          <p className="text-xs text-gray-400">சைட் இன்ஸ்டாலேஷன் மற்றும் ஃபீல்டு வேலைகள்</p>
        </div>
        <button onClick={() => alert('New CCTV Site Booking Modal')} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 shadow-sm transition">
          <Plus size={16} /> New CCTV Project
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {sites.map(site => (
          <div key={site.id} className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 space-y-3">
            <div className="flex justify-between items-start">
              <span className="bg-blue-50 text-blue-600 font-bold px-2 py-0.5 rounded text-[10px]">{site.id}</span>
              <span className="bg-amber-50 text-amber-700 font-semibold px-2 py-0.5 rounded text-[10px]">{site.status}</span>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 text-sm">{site.client}</h3>
              <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5"><MapPin size={12} /> {site.location}</p>
            </div>
            <div className="p-2.5 bg-gray-50 rounded-lg text-xs space-y-1">
              <div className="flex justify-between text-gray-600"><span>Cameras:</span><span className="font-bold text-gray-800">{site.camCount} HD Cameras</span></div>
              <div className="flex justify-between text-gray-600"><span>Assigned Tech:</span><span className="font-semibold text-blue-600">{site.tech}</span></div>
            </div>
            <div className="flex justify-between items-center text-xs pt-2 border-t border-gray-100">
              <div>
                <p className="text-[10px] text-gray-400">Total Value</p>
                <p className="font-bold text-gray-800">₹{site.totalAmt.toLocaleString()}</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-gray-400">Balance to Collect</p>
                <p className="font-bold text-emerald-600">₹{(site.totalAmt - site.advAmt).toLocaleString()}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}