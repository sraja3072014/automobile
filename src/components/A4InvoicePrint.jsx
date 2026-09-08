import React from 'react';
import { Printer, X, ShieldCheck, Phone, MapPin, Mail } from 'lucide-react';

export default function A4InvoicePrint({ invoiceData, onClose }) {
  const handlePrint = () => {
    window.print();
  };

  const {
    invoiceNo = "INV-2026-0891",
    date = "20-Aug-2026",
    customer = {
      id: "CUST-9482",
      name: "R. Suresh Kumar",
      phone: "+91 98421 55678",
      address: "45, Cross Cut Road, Gandhipuram, Coimbatore - 641012",
      vehicleNo: "TN 38 BZ 4590 (Creta)",
      gstin: "33AABCS1429B1Z2"
    },
    items = [
      { id: 1, name: 'Android 9" Touch Screen IPS (Car Audio)', hsn: '8528', serial: 'SN-CAR-90821', qty: 1, price: 8500, tax: 18 },
      { id: 2, name: 'CP-Plus 2MP HD IR Dome Camera', hsn: '8525', serial: 'CP-DOM-33214', qty: 4, price: 1450, tax: 18 },
      { id: 3, name: 'Cat6 Pure Copper Cable', hsn: '8544', serial: '-', qty: 90, unit: 'Mtr', price: 25, tax: 18 },
      { id: 4, name: 'iPhone 13 Display Replacement Service', hsn: '9987', serial: 'IMEI-3548910293', qty: 1, price: 5500, tax: 18 }
    ],
    paymentMode = "UPI / GPay",
    discount = 500,
  } = invoiceData || {};

  const subtotal = items.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const taxAmount = Math.round(subtotal * 0.18);
  const grandTotal = subtotal + taxAmount - discount;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-y-auto">
      {/* Top Action Bar (Print / Close Buttons - Hidden in Print) */}
      <div className="fixed top-4 right-4 flex gap-3 print:hidden z-50">
        <button
          onClick={handlePrint}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 shadow-lg transition cursor-pointer"
        >
          <Printer size={18} /> Print A4 Invoice
        </button>
        <button
          onClick={onClose}
          className="bg-gray-800 hover:bg-gray-900 text-white p-2.5 rounded-xl shadow-lg transition cursor-pointer"
        >
          <X size={18} />
        </button>
      </div>

      {/* A4 Sheet Container (Standard Dimensions: 210mm x 297mm) */}
      <div className="bg-white text-gray-900 w-full max-w-[210mm] min-h-[290mm] p-10 shadow-2xl rounded-sm my-6 print:m-0 print:p-8 print:w-full print:max-w-none print:shadow-none font-sans text-xs">
        
        {/* 1. SHOP HEADER & GST DETAILS */}
        <div className="flex justify-between items-start border-b-2 border-slate-900 pb-5">
          <div>
            <h1 className="text-2xl font-black tracking-tight text-slate-900 uppercase">
              AUTO-TECH MOBILES & CAR DECORS
            </h1>
            <p className="text-xs text-gray-600 font-medium mt-1">
              Multi-Brand Car Accessories, Android Systems, CCTV & Electronics Service Center
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-gray-500 text-[11px] mt-2">
              <span className="flex items-center gap-1"><MapPin size={12} /> Main Road, Koduvai, Tiruppur - 638660</span>
              <span className="flex items-center gap-1"><Phone size={12} /> +91 98765 43210</span>
              <span className="flex items-center gap-1"><Mail size={12} /> support@autotech.com</span>
            </div>
          </div>
          <div className="text-right">
            <span className="bg-slate-900 text-white font-bold px-3 py-1 text-xs uppercase tracking-wider rounded-sm">
              Tax Invoice
            </span>
            <p className="text-xs font-bold text-gray-800 mt-2">GSTIN: <span className="text-blue-600">33AAAAA0000A1Z5</span></p>
            <p className="text-[11px] text-gray-500">State Code: 33 (Tamil Nadu)</p>
          </div>
        </div>

        {/* 2. INVOICE META & CUSTOMER DETAILS */}
        <div className="grid grid-cols-2 gap-6 my-5 p-4 bg-slate-50 border border-slate-200 rounded-lg">
          {/* Left: Customer Info */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">Billed To (Customer Details)</p>
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm text-gray-900">{customer.name}</span>
                <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-1.5 py-0.2 rounded">ID: {customer.id}</span>
              </div>
              <p className="text-gray-600"><span className="font-semibold">Phone:</span> {customer.phone}</p>
              <p className="text-gray-600"><span className="font-semibold">Address:</span> {customer.address}</p>
              {customer.vehicleNo && (
                <p className="text-gray-800 font-semibold mt-1">🚗 Vehicle Reg No: <span className="text-blue-700 font-bold">{customer.vehicleNo}</span></p>
              )}
            </div>
          </div>

          {/* Right: Invoice Info */}
          <div className="text-right space-y-1">
            <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">Invoice Info</p>
            <p className="text-gray-600"><span className="font-semibold">Invoice No:</span> <span className="font-bold text-gray-900">{invoiceNo}</span></p>
            <p className="text-gray-600"><span className="font-semibold">Invoice Date:</span> {date}</p>
            <p className="text-gray-600"><span className="font-semibold">Payment Method:</span> <span className="font-semibold text-emerald-700">{paymentMode}</span></p>
            <p className="text-gray-600"><span className="font-semibold">Place of Supply:</span> Tamil Nadu (33)</p>
          </div>
        </div>

        {/* 3. ITEMISED TABLE */}
        <div className="border border-slate-200 rounded-lg overflow-hidden my-4">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-900 text-white text-[11px] uppercase tracking-wider">
              <tr>
                <th className="py-2.5 px-3 text-center w-10">#</th>
                <th className="py-2.5 px-3">Item Description / Serial / IMEI</th>
                <th className="py-2.5 px-3 text-center">HSN/SAC</th>
                <th className="py-2.5 px-3 text-center">Qty</th>
                <th className="py-2.5 px-3 text-right">Rate (₹)</th>
                <th className="py-2.5 px-3 text-right">GST</th>
                <th className="py-2.5 px-3 text-right">Amount (₹)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-xs">
              {items.map((item, index) => (
                <tr key={index} className="hover:bg-slate-50/50">
                  <td className="py-2.5 px-3 text-center font-medium text-gray-500">{index + 1}</td>
                  <td className="py-2.5 px-3">
                    <p className="font-bold text-gray-800">{item.name}</p>
                    {item.serial && item.serial !== '-' && (
                      <p className="text-[10px] text-blue-600 font-medium flex items-center gap-1 mt-0.5">
                        <ShieldCheck size={11} /> S/N / IMEI: {item.serial} (Warranty Tagged)
                      </p>
                    )}
                  </td>
                  <td className="py-2.5 px-3 text-center text-gray-500">{item.hsn}</td>
                  <td className="py-2.5 px-3 text-center font-bold text-gray-800">{item.qty} {item.unit || 'Nos'}</td>
                  <td className="py-2.5 px-3 text-right text-gray-600">₹{item.price.toLocaleString()}</td>
                  <td className="py-2.5 px-3 text-right text-gray-500">{item.tax}%</td>
                  <td className="py-2.5 px-3 text-right font-bold text-gray-900">
                    ₹{(item.price * item.qty).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 4. TOTALS & TAX BREAKUP */}
        <div className="grid grid-cols-2 gap-6 my-4 pt-2">
          {/* Left: Terms & Bank Info */}
          <div className="space-y-2 text-[11px] text-gray-600">
            <p className="font-bold text-gray-800 uppercase tracking-wider text-[10px]">Terms & Conditions:</p>
            <ul className="list-disc pl-4 space-y-0.5 text-[10px] text-gray-500 leading-tight">
              <li>Warranty covers manufacturer defects only with original invoice and serial verification.</li>
              <li>No warranty for physical damage, liquid ingress, or burnt electronic circuit boards.</li>
              <li>Service goods must be collected within 30 days of readiness notification.</li>
            </ul>

            <div className="p-2.5 bg-slate-50 border border-slate-200 rounded text-[10px] mt-3">
              <p className="font-bold text-gray-800">Bank Details for Direct Settlement:</p>
              <p>Bank: HDFC Bank | A/c No: 50200012345678 | IFSC: HDFC0001234</p>
              <p>UPI ID: autotech@hdfcbank</p>
            </div>
          </div>

          {/* Right: Financial Calculation */}
          <div className="space-y-1.5 text-xs text-gray-700">
            <div className="flex justify-between py-1 border-b border-gray-100">
              <span>Taxable Amount (Subtotal):</span>
              <span className="font-semibold">₹{subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-gray-100 text-gray-500">
              <span>CGST (9%):</span>
              <span>₹{(taxAmount / 2).toLocaleString()}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-gray-100 text-gray-500">
              <span>SGST (9%):</span>
              <span>₹{(taxAmount / 2).toLocaleString()}</span>
            </div>
            {discount > 0 && (
              <div className="flex justify-between py-1 border-b border-gray-100 text-red-600 font-medium">
                <span>Special Discount:</span>
                <span>-₹{discount.toLocaleString()}</span>
              </div>
            )}
            <div className="flex justify-between py-2 border-t-2 border-slate-900 text-base font-black text-slate-900">
              <span>Grand Total:</span>
              <span className="text-blue-700">₹{grandTotal.toLocaleString()}</span>
            </div>
            <p className="text-[10px] text-gray-400 text-right">Amount in Words: INR Twenty Four Thousand Three Hundred Only</p>
          </div>
        </div>

        {/* 5. FOOTER & AUTHORISED SIGNATURE */}
        <div className="mt-14 pt-4 border-t border-slate-200 flex justify-between items-end text-xs">
          <div>
            <p className="font-bold text-gray-800">Thank you for your business!</p>
            <p className="text-[10px] text-gray-400">Computer Generated Invoice - No signature required for cash counter copy.</p>
          </div>
          <div className="text-center">
            <div className="h-12"></div>
            <p className="font-bold text-gray-900 border-t border-slate-400 px-6 pt-1">Authorised Signatory</p>
            <p className="text-[10px] text-gray-400">For AUTO-TECH ENTERPRISES</p>
          </div>
        </div>

      </div>
    </div>
  );
}