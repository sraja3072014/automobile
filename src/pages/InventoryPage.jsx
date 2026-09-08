import React, { useState } from 'react';
import { Package, Plus, Search, ArrowDownLeft, ArrowUpRight, ShieldCheck } from 'lucide-react';

export default function InventoryPage() {
  const [stock] = useState([
    { id: 'PRD-01', name: 'Android Screen 9" (Car)', category: 'Car Decors', cost: 6800, sell: 8500, stock: 12, min: 3 },
    { id: 'PRD-02', name: 'JBL 1200W Bass Tube', category: 'Car Decors', cost: 4800, sell: 6200, stock: 2, min: 4 },
    { id: 'PRD-03', name: 'CP Plus 2MP Dome Camera', category: 'CCTV', cost: 1100, sell: 1450, stock: 28, min: 10 },
    { id: 'PRD-04', name: 'Type-C Fast Charger 65W', category: 'Mobiles', cost: 750, sell: 1200, stock: 45, min: 15 },
    { id: 'PRD-05', name: 'Sony 5.1 Main Motherboard', category: 'TV & Audio', cost: 2200, sell: 3400, stock: 5, min: 2 },
  ]);

  return (
    <div className="space-y-5">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
        <div>
          <h2 className="font-bold text-gray-800 text-base">Inventory & Stock Ledger</h2>
          <p className="text-xs text-gray-400">பொருட்கள் இருப்பு மற்றும் புதிய சரக்கு வரவு (Inward/Outward)</p>
        </div>
        <div className="flex gap-2">
          <button onClick={() => alert('Stock Inward Entry Form')} className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow-sm transition">
            <ArrowDownLeft size={16} /> Stock Inward
          </button>
          <button onClick={() => alert('Add New Product Form')} className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow-sm transition">
            <Plus size={16} /> Add Product
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden text-xs">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-200 text-gray-600 font-bold uppercase text-[10px]">
            <tr>
              <th className="py-3 px-4">Item Code</th>
              <th className="py-3 px-4">Product Name</th>
              <th className="py-3 px-4">Category</th>
              <th className="py-3 px-4">Cost Price</th>
              <th className="py-3 px-4">Selling Price</th>
              <th className="py-3 px-4">Current Stock</th>
              <th className="py-3 px-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 font-medium text-gray-700">
            {stock.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="py-3 px-4 font-bold text-blue-600">{item.id}</td>
                <td className="py-3 px-4 font-semibold text-gray-800">{item.name}</td>
                <td className="py-3 px-4">{item.category}</td>
                <td className="py-3 px-4">₹{item.cost.toLocaleString()}</td>
                <td className="py-3 px-4 font-bold">₹{item.sell.toLocaleString()}</td>
                <td className="py-3 px-4 font-bold text-gray-900">{item.stock} Nos</td>
                <td className="py-3 px-4">
                  {item.stock <= item.min ? (
                    <span className="bg-red-50 text-red-600 px-2 py-0.5 rounded text-[10px] font-bold">Low Stock</span>
                  ) : (
                    <span className="bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded text-[10px] font-bold">In Stock</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}