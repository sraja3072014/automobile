import React, { useState } from 'react';
import { 
  Plus, Search, Wrench, Smartphone, Tv, 
  Video, Car, Clock, CheckCircle, AlertCircle, 
  Send, User, Phone, DollarSign, Eye, X 
} from 'lucide-react';

const INITIAL_JOB_CARDS = [
  {
    id: 'JC-2026-081',
    customerName: 'Karthik Raja',
    phone: '9876543210',
    category: 'Mobiles',
    device: 'iPhone 13 - 128GB',
    issue: 'Display Touch Issue & Battery Drain',
    technician: 'Senthil (Senior Tech)',
    status: 'Diagnosing',
    estCost: 6500,
    advance: 2000,
    receivedDate: '20 Aug 2026',
    deliveryDate: '22 Aug 2026',
  },
  {
    id: 'JC-2026-082',
    customerName: 'Murugan Sound & Lights',
    phone: '9443322110',
    category: 'TV & Audio',
    device: 'Sony 5.1 Home Theater System',
    issue: 'Subwoofer No Output & Motherboard Short',
    technician: 'Praveen',
    status: 'Waiting for Parts',
    estCost: 3200,
    advance: 1000,
    receivedDate: '19 Aug 2026',
    deliveryDate: '23 Aug 2026',
  },
  {
    id: 'JC-2026-083',
    customerName: 'Anand Kumar',
    phone: '9789012345',
    category: 'Car Decors',
    device: 'Hyundai Creta - 9" Android Panel',
    issue: 'Reverse Camera No Signal & Screen Flickering',
    technician: 'Vignesh',
    status: 'Ready for Delivery',
    estCost: 1800,
    advance: 500,
    receivedDate: '20 Aug 2026',
    deliveryDate: '21 Aug 2026',
  },
  {
    id: 'JC-2026-084',
    customerName: 'Star Supermarket',
    phone: '9123456780',
    category: 'CCTV',
    device: 'Hikvision 8CH 4K DVR',
    issue: 'Hard Disk Not Detecting (Beep Sound)',
    technician: 'Praveen',
    status: 'Received',
    estCost: 4500,
    advance: 0,
    receivedDate: '20 Aug 2026',
    deliveryDate: '24 Aug 2026',
  }
];

export default function JobCardPage() {
  const [jobCards, setJobCards] = useState(INITIAL_JOB_CARDS);
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  // New Job Card Form State
  const [newCard, setNewCard] = useState({
    customerName: '',
    phone: '',
    category: 'Mobiles',
    device: '',
    issue: '',
    technician: 'Senthil (Senior Tech)',
    status: 'Received',
    estCost: '',
    advance: '',
    deliveryDate: ''
  });

  const statuses = ['All', 'Received', 'Diagnosing', 'Waiting for Parts', 'Ready for Delivery', 'Delivered'];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Received':
        return <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full text-xs font-semibold">Received</span>;
      case 'Diagnosing':
        return <span className="bg-amber-100 text-amber-800 px-2.5 py-1 rounded-full text-xs font-semibold">Diagnosing</span>;
      case 'Waiting for Parts':
        return <span className="bg-red-100 text-red-700 px-2.5 py-1 rounded-full text-xs font-semibold">Waiting Parts</span>;
      case 'Ready for Delivery':
        return <span className="bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1"><CheckCircle size={12} /> Ready</span>;
      case 'Delivered':
        return <span className="bg-blue-100 text-blue-700 px-2.5 py-1 rounded-full text-xs font-semibold">Delivered</span>;
      default:
        return null;
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Mobiles': return <Smartphone size={16} className="text-blue-500" />;
      case 'TV & Audio': return <Tv size={16} className="text-purple-500" />;
      case 'Car Decors': return <Car size={16} className="text-emerald-500" />;
      case 'CCTV': return <Video size={16} className="text-amber-500" />;
      default: return <Wrench size={16} />;
    }
  };

  const handleCreateJobCard = (e) => {
    e.preventDefault();
    if (!newCard.customerName || !newCard.phone || !newCard.device) {
      return alert('முக்கிய விவரங்களை நிரப்பவும்!');
    }
    const created = {
      ...newCard,
      id: `JC-2026-${Math.floor(100 + Math.random() * 900)}`,
      receivedDate: '20 Aug 2026',
      estCost: Number(newCard.estCost) || 0,
      advance: Number(newCard.advance) || 0,
    };
    setJobCards([created, ...jobCards]);
    setIsModalOpen(false);
    setNewCard({
      customerName: '', phone: '', category: 'Mobiles', device: '', 
      issue: '', technician: 'Senthil (Senior Tech)', status: 'Received', 
      estCost: '', advance: '', deliveryDate: ''
    });
  };

  const updateStatus = (id, newStatus) => {
    setJobCards(jobCards.map(j => j.id === id ? { ...j, status: newStatus } : j));
    if (selectedCard && selectedCard.id === id) {
      setSelectedCard({ ...selectedCard, status: newStatus });
    }
  };

  const filteredCards = jobCards.filter(j => {
    const matchesStatus = activeFilter === 'All' || j.status === activeFilter;
    const matchesSearch = j.customerName.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          j.id.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          j.phone.includes(searchQuery);
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="space-y-5">
      
      {/* 1. TOP STATS BAR */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500">Active Job Cards</p>
            <p className="text-xl font-bold text-gray-800 mt-0.5">{jobCards.filter(j => j.status !== 'Delivered').length}</p>
          </div>
          <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
            <Wrench size={20} />
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500">Waiting For Parts</p>
            <p className="text-xl font-bold text-red-600 mt-0.5">{jobCards.filter(j => j.status === 'Waiting for Parts').length}</p>
          </div>
          <div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center">
            <AlertCircle size={20} />
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500">Ready for Delivery</p>
            <p className="text-xl font-bold text-emerald-600 mt-0.5">{jobCards.filter(j => j.status === 'Ready for Delivery').length}</p>
          </div>
          <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <CheckCircle size={20} />
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500">Total Est. Revenue</p>
            <p className="text-xl font-bold text-indigo-600 mt-0.5">₹{jobCards.reduce((a, b) => a + b.estCost, 0).toLocaleString()}</p>
          </div>
          <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
            <DollarSign size={20} />
          </div>
        </div>
      </div>

      {/* 2. ACTIONS & FILTER BAR */}
      <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
        
        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search Token No, Mobile, Name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Status Filter Tabs */}
        <div className="flex gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
          {statuses.map((status) => (
            <button
              key={status}
              onClick={() => setActiveFilter(status)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
                activeFilter === status 
                  ? 'bg-slate-900 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {status}
            </button>
          ))}
        </div>

        {/* New Job Card Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 shadow-sm transition whitespace-nowrap"
        >
          <Plus size={18} />
          New Job Card
        </button>
      </div>

      {/* 3. JOB CARDS TABLE / LIST */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-gray-50 text-gray-600 uppercase border-b border-gray-200 text-[11px] font-bold tracking-wider">
                <th className="py-3 px-4">Job Token</th>
                <th className="py-3 px-4">Customer & Contact</th>
                <th className="py-3 px-4">Device / Category</th>
                <th className="py-3 px-4">Problem / Issue</th>
                <th className="py-3 px-4">Technician</th>
                <th className="py-3 px-4">Est / Advance</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredCards.map((card) => (
                <tr key={card.id} className="hover:bg-slate-50 transition">
                  <td className="py-3.5 px-4 font-bold text-blue-600">{card.id}</td>
                  <td className="py-3.5 px-4">
                    <p className="font-semibold text-gray-800 text-sm">{card.customerName}</p>
                    <p className="text-gray-400 text-xs flex items-center gap-1 mt-0.5">
                      <Phone size={11} /> {card.phone}
                    </p>
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-1.5 font-medium text-gray-800">
                      {getCategoryIcon(card.category)}
                      <span>{card.device}</span>
                    </div>
                    <span className="text-[10px] text-gray-400 font-normal">{card.category}</span>
                  </td>
                  <td className="py-3.5 px-4 max-w-[200px] text-gray-600 truncate" title={card.issue}>
                    {card.issue}
                  </td>
                  <td className="py-3.5 px-4 font-medium text-gray-700">
                    <div className="flex items-center gap-1">
                      <User size={13} className="text-gray-400" />
                      {card.technician}
                    </div>
                  </td>
                  <td className="py-3.5 px-4">
                    <p className="font-bold text-gray-900">₹{card.estCost.toLocaleString()}</p>
                    <p className="text-[10px] text-emerald-600">Adv: ₹{card.advance.toLocaleString()}</p>
                  </td>
                  <td className="py-3.5 px-4">
                    {getStatusBadge(card.status)}
                  </td>
                  <td className="py-3.5 px-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() => setSelectedCard(card)}
                        className="p-1.5 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-lg transition"
                        title="View Details"
                      >
                        <Eye size={15} />
                      </button>
                      <button
                        onClick={() => alert(`WhatsApp Notification sent to ${card.phone} for Token ${card.id}`)}
                        className="p-1.5 bg-emerald-50 text-emerald-600 hover:bg-emerald-100 rounded-lg transition"
                        title="WhatsApp Status Update"
                      >
                        <Send size={15} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 4. MODAL: CREATE NEW JOB CARD */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl overflow-y-auto max-h-[90vh]">
            <div className="flex justify-between items-center pb-3 border-b border-gray-100 mb-4">
              <h3 className="font-bold text-base text-gray-800 flex items-center gap-2">
                <Wrench className="text-blue-600" size={18} /> New Service Job Card
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleCreateJobCard} className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold text-gray-700 block mb-1">Customer Mobile *</label>
                  <input
                    type="text"
                    required
                    placeholder="98765 43210"
                    value={newCard.phone}
                    onChange={(e) => setNewCard({ ...newCard, phone: e.target.value })}
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="font-semibold text-gray-700 block mb-1">Customer Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={newCard.customerName}
                    onChange={(e) => setNewCard({ ...newCard, customerName: e.target.value })}
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold text-gray-700 block mb-1">Business Category</label>
                  <select
                    value={newCard.category}
                    onChange={(e) => setNewCard({ ...newCard, category: e.target.value })}
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  >
                    <option value="Mobiles">Mobiles & Tablets</option>
                    <option value="TV & Audio">TV & 5.1 Audio Systems</option>
                    <option value="Car Decors">Car Audio & Android Panels</option>
                    <option value="CCTV">CCTV DVR / Cameras</option>
                  </select>
                </div>
                <div>
                  <label className="font-semibold text-gray-700 block mb-1">Device Brand & Model *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Samsung 55 Smart TV / Creta Android"
                    value={newCard.device}
                    onChange={(e) => setNewCard({ ...newCard, device: e.target.value })}
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="font-semibold text-gray-700 block mb-1">Reported Problem / Issues *</label>
                <textarea
                  rows={2}
                  required
                  placeholder="Describe fault (No Power, Broken Glass, Sound Crack, etc.)"
                  value={newCard.issue}
                  onChange={(e) => setNewCard({ ...newCard, issue: e.target.value })}
                  className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="font-semibold text-gray-700 block mb-1">Assign Technician</label>
                  <select
                    value={newCard.technician}
                    onChange={(e) => setNewCard({ ...newCard, technician: e.target.value })}
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  >
                    <option value="Senthil (Senior Tech)">Senthil (Senior Tech)</option>
                    <option value="Praveen">Praveen (Audio/TV)</option>
                    <option value="Vignesh">Vignesh (Car Decor)</option>
                    <option value="Mani">Mani (CCTV Field)</option>
                  </select>
                </div>
                <div>
                  <label className="font-semibold text-gray-700 block mb-1">Est. Cost (₹)</label>
                  <input
                    type="number"
                    placeholder="2500"
                    value={newCard.estCost}
                    onChange={(e) => setNewCard({ ...newCard, estCost: e.target.value })}
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="font-semibold text-gray-700 block mb-1">Advance Paid (₹)</label>
                  <input
                    type="number"
                    placeholder="500"
                    value={newCard.advance}
                    onChange={(e) => setNewCard({ ...newCard, advance: e.target.value })}
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="pt-3 border-t border-gray-100 flex gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="w-1/2 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-1/2 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-sm"
                >
                  Create & Print Token
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 5. MODAL: JOB CARD DETAILS & STATUS CHANGE */}
      {selectedCard && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl">
            <div className="flex justify-between items-center pb-3 border-b border-gray-100 mb-4">
              <div>
                <h3 className="font-bold text-base text-gray-800">{selectedCard.id}</h3>
                <p className="text-xs text-gray-400">Received on {selectedCard.receivedDate}</p>
              </div>
              <button onClick={() => setSelectedCard(null)} className="text-gray-400 hover:text-gray-600">
                <X size={18} />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3 bg-gray-50 rounded-xl space-y-1">
                <p className="font-bold text-sm text-gray-800">{selectedCard.customerName}</p>
                <p className="text-gray-500">Phone: {selectedCard.phone}</p>
                <p className="text-gray-500">Device: <span className="font-semibold text-gray-800">{selectedCard.device}</span></p>
                <p className="text-gray-500">Problem: <span className="text-red-600">{selectedCard.issue}</span></p>
              </div>

              <div>
                <label className="font-bold text-gray-700 block mb-1">Update Service Status:</label>
                <div className="grid grid-cols-2 gap-1.5">
                  {['Received', 'Diagnosing', 'Waiting for Parts', 'Ready for Delivery', 'Delivered'].map((st) => (
                    <button
                      key={st}
                      onClick={() => updateStatus(selectedCard.id, st)}
                      className={`p-2 rounded-lg text-xs font-semibold border transition ${
                        selectedCard.status === st 
                          ? 'bg-blue-600 text-white border-blue-600' 
                          : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-gray-100 flex justify-between items-center text-sm font-bold">
                <span>Balance to Collect:</span>
                <span className="text-emerald-600">₹{(selectedCard.estCost - selectedCard.advance).toLocaleString()}</span>
              </div>
            </div>

            <button
              onClick={() => setSelectedCard(null)}
              className="w-full mt-5 py-2.5 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800"
            >
              Done & Save
            </button>
          </div>
        </div>
      )}

    </div>
  );
}