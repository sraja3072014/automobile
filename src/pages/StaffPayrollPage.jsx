import React, { useState } from 'react';
import { Users, CheckCircle2, XCircle, Clock, DollarSign } from 'lucide-react';

export default function StaffPayrollPage() {
  const [staffList] = useState([
    { id: 'EMP-01', name: 'Senthil Kumar', role: 'Senior Mobile Tech', phone: '9842100011', attendance: 'Present', baseSalary: 24000, incentive: 3500, advancePaid: 2000 },
    { id: 'EMP-02', name: 'Praveen', role: 'TV & Audio Specialist', phone: '9842100022', attendance: 'Present', baseSalary: 20000, incentive: 2200, advancePaid: 0 },
    { id: 'EMP-03', name: 'Vignesh', role: 'Car Decors Electrician', phone: '9842100033', attendance: 'Present', baseSalary: 18000, incentive: 4100, advancePaid: 1000 },
    { id: 'EMP-04', name: 'Mani', role: 'CCTV Field Lead', phone: '9842100044', attendance: 'On Leave', baseSalary: 19000, incentive: 1800, advancePaid: 500 },
  ]);

  return (
    <div className="space-y-5">
      <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex justify-between items-center">
        <div>
          <h2 className="font-bold text-gray-800 text-base">Staff Attendance & Salary Ledger</h2>
          <p className="text-xs text-gray-400">பணியாளர் வருகை மற்றும் இன்சென்டிவ் சம்பளக் கணக்கீடு</p>
        </div>
        <button onClick={() => alert('Attendance Punch In Triggered')} className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-xs font-semibold">
          Daily Punch Register
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden text-xs">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-200 text-gray-600 font-bold uppercase text-[10px]">
            <tr>
              <th className="py-3 px-4">Staff Name</th>
              <th className="py-3 px-4">Designation</th>
              <th className="py-3 px-4">Today Status</th>
              <th className="py-3 px-4">Base Pay</th>
              <th className="py-3 px-4">Incentive</th>
              <th className="py-3 px-4">Advance Paid</th>
              <th className="py-3 px-4 text-right">Net Payable</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 font-medium text-gray-700">
            {staffList.map((st) => (
              <tr key={st.id} className="hover:bg-gray-50">
                <td className="py-3 px-4 font-bold text-gray-800">{st.name}</td>
                <td className="py-3 px-4 text-gray-500">{st.role}</td>
                <td className="py-3 px-4">
                  {st.attendance === 'Present' ? (
                    <span className="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded text-[10px] font-bold">● Present</span>
                  ) : (
                    <span className="bg-red-50 text-red-700 px-2 py-0.5 rounded text-[10px] font-bold">● Leave</span>
                  )}
                </td>
                <td className="py-3 px-4">₹{st.baseSalary.toLocaleString()}</td>
                <td className="py-3 px-4 text-emerald-600 font-semibold">+₹{st.incentive.toLocaleString()}</td>
                <td className="py-3 px-4 text-red-500">-₹{st.advancePaid.toLocaleString()}</td>
                <td className="py-3 px-4 text-right font-bold text-gray-900">
                  ₹{(st.baseSalary + st.incentive - st.advancePaid).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}