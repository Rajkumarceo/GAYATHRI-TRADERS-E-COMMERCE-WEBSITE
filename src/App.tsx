import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import { MapPin, X } from 'lucide-react';
import { useCart } from './context/CartContext';

import Home from './pages/Home';
import About from './pages/About';
import Account from './pages/Account';
import Checkout from './pages/Checkout';
import Payment from './pages/Payment';
import Shop from './pages/Shop';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showLocationModal, setShowLocationModal] = useState(false);
  const { isCartOpen, setIsCartOpen } = useCart();

  useEffect(() => {
    // Show modal on entry if no location is selected
    const savedLocation = localStorage.getItem('userLocation');
    if (!savedLocation) {
      setShowLocationModal(true);
    }
  }, []);

  const handleLocationSelect = (location: string) => {
    localStorage.setItem('userLocation', location);
    setShowLocationModal(false);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans bg-[var(--color-cream)]">
        <Header onSearch={setSearchQuery} />
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home searchQuery={searchQuery} />} />
            <Route path="/about" element={<About />} />
            <Route path="/account" element={<Account />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </main>

        <Footer />

        <CartDrawer 
          isOpen={isCartOpen} 
          onClose={() => setIsCartOpen(false)} 
        />

        {/* Location Selection Modal */}
        {showLocationModal && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-2xl animate-fade-in">
              <div className="p-6 text-center relative">
                <button 
                  onClick={() => setShowLocationModal(false)}
                  className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-[#1A472A]" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-gray-900 mb-2">Select Your Region</h2>
                <p className="text-gray-500 mb-8">Choose your location to see available products and delivery options.</p>
                
                <div className="space-y-3">
                  <button 
                    onClick={() => handleLocationSelect('India')}
                    className="w-full py-3 px-4 rounded-xl border-2 border-gray-200 hover:border-[#1A472A] hover:bg-green-50 transition-all font-semibold text-gray-700 hover:text-[#1A472A] flex justify-between items-center group"
                  >
                    <span>India (INR ₹)</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </button>
                  <button 
                    onClick={() => handleLocationSelect('UAE')}
                    className="w-full py-3 px-4 rounded-xl border-2 border-gray-200 hover:border-[#1A472A] hover:bg-green-50 transition-all font-semibold text-gray-700 hover:text-[#1A472A] flex justify-between items-center group"
                  >
                    <span>UAE (AED د.إ)</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}
