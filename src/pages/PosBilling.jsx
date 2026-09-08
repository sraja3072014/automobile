import React, { useState } from 'react';
import { 
  Search, Trash2, Plus, Minus, CreditCard, 
  Banknote, Smartphone, UserCheck, Receipt, Car, 
  Tv, Video, ShieldCheck, CheckCircle2 
} from 'lucide-react';
import A4InvoicePrint from '../components/A4InvoicePrint';

// மாதிரி பொருட்கள் பட்டியல் (Mock Products)
const SAMPLE_PRODUCTS = [
  { id: 1, name: 'Android Screen 9" (Car)', category: 'Car Decors', price: 8500, stock: 12, barcode: 'CAR101', hasSerial: true },
  { id: 2, name: 'JBL 1200W Bass Tube', category: 'Car Decors', price: 6200, stock: 5, barcode: 'CAR102', hasSerial: true },
  { id: 3, name: 'Type-C Fast Charger 65W', category: 'Mobiles', price: 1200, stock: 45, barcode: 'MOB201', hasSerial: false },
  { id: 4, name: 'CP Plus 2MP Dome Camera', category: 'CCTV', price: 1450, stock: 28, barcode: 'CCT301', hasSerial: true },
  { id: 5, name: 'Cat6 Cable (Per Meter)', category: 'CCTV', price: 25, stock: 500, barcode: 'CCT302', hasSerial: false },
  { id: 6, name: 'Sony 5.1 Home Theater Board', category: 'TV & Audio', price: 3400, stock: 8, barcode: 'AUD401', hasSerial: true },
  { id: 7, name: 'Samsung LED TV Backlight 43"', category: 'TV & Audio', price: 1800, stock: 15, barcode: 'AUD402', hasSerial: false },
  { id: 8, name: 'Car Ambient LED Lights Kit', category: 'Car Decors', price: 2200, stock: 10, barcode: 'CAR103', hasSerial: false }
];

export default function PosBilling() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState([]);
  const [customer, setCustomer] = useState({ name: '', phone: '', vehicleNo: '' });
  const [paymentMode, setPaymentMode] = useState('UPI');
  const [discount, setDiscount] = useState(0);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showPrintModal, setShowPrintModal] = useState(false);
  const categories = ['All', 'Car Decors', 'Mobiles', 'CCTV', 'TV & Audio'];

  // Adding an item to the cart
  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item));
    } else {
      setCart([...cart, { ...product, qty: 1, serialNumber: product.hasSerial ? '' : null }]);
    }
  };

  // கார்ட் எண்ணிக்கை மாற்றம்
  const updateQty = (id, change) => {
    setCart(cart.map(item => {
      if (item.id === id) {
        const newQty = item.qty + change;
        return newQty > 0 ? { ...item, qty: newQty } : item;
      }
      return item;
    }));
  };

  // கார்ட்டிலிருந்து நீக்குதல்
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Serial/IMEI அப்டேட்
  const updateSerial = (id, serial) => {
    setCart(cart.map(item => item.id === id ? { ...item, serialNumber: serial } : item));
  };

  // கணக்கீடுகள்
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const gstAmount = Math.round(subtotal * 0.18);
  const grandTotal = Math.max(0, subtotal + gstAmount - Number(discount));

  // வடிகட்டப்பட்ட பொருட்கள்
  const filteredProducts = SAMPLE_PRODUCTS.filter(p => {
    const matchesCat = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.barcode.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleCheckout = () => {
    if (cart.length === 0) return alert('The cart is empty!');
    if (!customer.phone) return alert('Please enter the customer\'s phone number!');
    setShowSuccessModal(true);
  };

  const resetBilling = () => {
    setCart([]);
    setCustomer({ name: '', phone: '', vehicleNo: '' });
    setDiscount(0);
    setShowSuccessModal(false);
  };

  return (
    <div className="flex flex-col lg:flex-row h-full gap-6">
      
      {/* Left Side: Product List & Filters */}
      <div className="flex-1 flex flex-col bg-white rounded-xl border border-gray-200 shadow-sm p-4 overflow-hidden">
        
        {/* Category Tabs & Search Bar */}
        <div className="space-y-3 mb-4">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search by Product Name or Scan Barcode..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
                  selectedCategory === cat 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1 overflow-y-auto grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 pr-1">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => addToCart(product)}
              className="border border-gray-200 hover:border-blue-500 rounded-xl p-3 flex flex-col justify-between cursor-pointer transition hover:shadow-md bg-white group"
            >
              <div>
                <div className="flex justify-between items-start gap-1">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-gray-100 text-gray-600">
                    {product.category}
                  </span>
                  {product.hasSerial && (
                    <span className="text-[10px] bg-amber-50 text-amber-700 font-semibold px-1 rounded flex items-center gap-0.5">
                      <ShieldCheck size={10} /> S/N
                    </span>
                  )}
                </div>
                <h4 className="font-semibold text-gray-800 text-sm mt-2 line-clamp-2 group-hover:text-blue-600">
                  {product.name}
                </h4>
              </div>

              <div className="mt-3 flex justify-between items-center pt-2 border-t border-gray-100">
                <span className="text-xs text-gray-500">Stock: {product.stock}</span>
                <span className="font-bold text-sm text-gray-900">₹{product.price.toLocaleString()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side: Billing Cart & Checkout (Checkout Panel) */}
      <div className="w-full lg:w-96 bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col p-4">
        
        {/* Customer Details */}
        <div className="space-y-2 mb-3 pb-3 border-b border-gray-200">
          <div className="grid grid-cols-2 gap-2">
            <input
              type="text"
              placeholder="Mobile No *"
              value={customer.phone}
              onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
              className="text-xs p-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Customer Name"
              value={customer.name}
              onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
              className="text-xs p-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <input
            type="text"
            placeholder="Vehicle No (e.g. TN 38 AB 1234) - Car Decor"
            value={customer.vehicleNo}
            onChange={(e) => setCustomer({ ...customer, vehicleNo: e.target.value })}
            className="w-full text-xs p-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto space-y-2.5 pr-1">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-400">
              <Receipt size={32} className="mb-1" />
              <p className="text-xs">There are no items in the cart.</p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="p-2.5 rounded-lg bg-gray-50 border border-gray-200 text-xs">
                <div className="flex justify-between items-start">
                  <div className="font-semibold text-gray-800 pr-2">{item.name}</div>
                  <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">
                    <Trash2 size={14} />
                  </button>
                </div>

                {/* Serial / IMEI Input if Applicable */}
                {item.hasSerial && (
                  <input
                    type="text"
                    placeholder="Enter Serial / IMEI No"
                    value={item.serialNumber}
                    onChange={(e) => updateSerial(item.id, e.target.value)}
                    className="w-full mt-1.5 p-1 bg-white border border-amber-300 rounded text-[11px] focus:outline-none"
                  />
                )}

                <div className="flex justify-between items-center mt-2">
                  <div className="flex items-center gap-2 border border-gray-300 rounded bg-white px-1 py-0.5">
                    <button onClick={() => updateQty(item.id, -1)} className="text-gray-500 hover:text-black">
                      <Minus size={12} />
                    </button>
                    <span className="font-bold w-4 text-center">{item.qty}</span>
                    <button onClick={() => updateQty(item.id, 1)} className="text-gray-500 hover:text-black">
                      <Plus size={12} />
                    </button>
                  </div>
                  <span className="font-bold text-gray-900">₹{(item.price * item.qty).toLocaleString()}</span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Payment Summary */}
        <div className="pt-3 border-t border-gray-200 space-y-1.5 text-xs text-gray-600">
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span className="font-semibold">₹{subtotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span>GST (18%):</span>
            <span className="font-semibold">₹{gstAmount.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Discount (₹):</span>
            <input
              type="number"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
              className="w-20 p-1 text-right bg-gray-50 border border-gray-200 rounded text-xs"
            />
          </div>
          <div className="flex justify-between text-sm font-bold text-gray-900 pt-1 border-t">
            <span>Grand Total:</span>
            <span className="text-blue-600">₹{grandTotal.toLocaleString()}</span>
          </div>
        </div>

        {/* Payment Mode Selector */}
        <div className="grid grid-cols-3 gap-1.5 my-3">
          {[
            { mode: 'Cash', icon: Banknote },
            { mode: 'UPI', icon: Smartphone },
            { mode: 'Credit', icon: CreditCard }
          ].map(({ mode, icon: Icon }) => (
            <button
              key={mode}
              onClick={() => setPaymentMode(mode)}
              className={`p-2 rounded-lg border text-xs font-semibold flex items-center justify-center gap-1.5 transition ${
                paymentMode === mode 
                  ? 'bg-blue-50 border-blue-600 text-blue-700' 
                  : 'border-gray-200 hover:bg-gray-50 text-gray-600'
              }`}
            >
              <Icon size={14} />
              {mode}
            </button>
          ))}
        </div>

        {/* Final Action Button */}
        <button
          onClick={handleCheckout}
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 rounded-lg shadow-sm transition flex items-center justify-center gap-2 text-sm"
        >
          <Receipt size={16} />
          Complete & Print Invoice
        </button>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full text-center shadow-xl">
            <CheckCircle2 size={48} className="text-emerald-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-gray-800">Invoice Generated!</h3>
            <p className="text-xs text-gray-500 mt-1">
              Bill Amount: <span className="font-bold text-gray-800">₹{grandTotal.toLocaleString()}</span> ({paymentMode})
            </p>
            <p className="text-xs text-gray-400 mt-0.5">WhatsApp invoice sent to {customer.phone}</p>
            
            <div className="mt-5 flex gap-2">
              <button 
                onClick={resetBilling}
                className="flex-1 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-xs font-semibold"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setShowSuccessModal(false);
                  setShowPrintModal(true);
                }}
                className="flex-1 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold"
              >
                Print A4 Bill
              </button>
            </div>
          </div>
        </div>
      )}

        {showPrintModal && (
        <A4InvoicePrint
          invoiceData={{
            customer: {
              id: "CUST-" + Math.floor(1000 + Math.random() * 9000),
              name: customer.name || "Walk-in Customer",
              phone: customer.phone,
              vehicleNo: customer.vehicleNo,
              address: "Koduvai, Tamil Nadu"
            },
            items: cart,
            paymentMode: paymentMode,
            discount: Number(discount) || 0
          }}
          onClose={() => {
            setShowPrintModal(false);
            resetBilling();
          }}
        />
      )}
    </div>
  );
}