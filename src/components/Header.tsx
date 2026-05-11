import { useState } from 'react';
import { Search, User, ShoppingBag, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
interface HeaderProps {
  onSearch: (query: string) => void;
}

export default function Header({ onSearch }: HeaderProps) {
  const { totalItems, totalPrice, setIsCartOpen } = useCart();
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
    if (e.target.value) {
      navigate('/');
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#1A472A] text-white shadow-lg">
      <div className="bg-[#11301c] py-2 overflow-hidden relative flex justify-center">
        <p className="whitespace-nowrap text-xs md:text-sm font-medium animate-pulse">
          Dispatch in 24 hours | Free shipping on orders above ₹1999
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Mobile Search Toggle */}
          <div className="flex md:hidden">
            <button onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}>
              {isMobileSearchOpen ? <X className="h-6 w-6" /> : <Search className="h-6 w-6" />}
            </button>
          </div>

          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center justify-center flex-1 md:flex-none hover:opacity-80 transition-opacity">
            <h1 className="font-serif text-xl md:text-2xl font-bold tracking-wider text-[#FDF9F3]">
              GAYATHRI TRADERS
            </h1>
          </Link>

          {/* Main Navigation Links */}
          <nav className="hidden md:flex space-x-8 ml-8">
            <Link to="/" className="text-gray-300 hover:text-white font-medium transition-colors">Home</Link>
            <Link to="/shop" className="text-gray-300 hover:text-white font-medium transition-colors">Shop</Link>
            <Link to="/about" className="text-gray-300 hover:text-white font-medium transition-colors">About Us</Link>
          </nav>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex flex-1 max-w-sm lg:max-w-md ml-auto mr-4 relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-500 group-focus-within:text-[#1A472A]" />
            </div>
            <input 
              type="text"
              onChange={handleSearch}
              className="block w-full pl-11 pr-4 py-3 border border-transparent rounded-full leading-5 bg-[#FDF9F3] text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent sm:text-sm transition-all shadow-inner"
              placeholder="Search for Premium Dates, Nuts, Spices..."
            />
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4 md:space-x-8">
            <Link 
              to="/account"
              className="flex flex-col items-center hover:text-yellow-400 transition-colors group"
            >
              <User className="h-6 w-6 group-hover:scale-110 transition-transform" />
              <span className="text-xs mt-1 hidden md:block font-medium">Account</span>
            </Link>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="flex flex-col items-center hover:text-yellow-400 transition-colors group relative"
            >
              <div className="relative">
                <ShoppingBag className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span className="absolute -top-1.5 -right-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow-md">
                  {totalItems}
                </span>
              </div>
              <span className="text-xs mt-1 hidden md:block font-medium">Rs. {totalPrice.toFixed(2)} INR</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {isMobileSearchOpen && (
        <div className="md:hidden px-4 pb-4 bg-[#1A472A]">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-500" />
            </div>
            <input 
              type="text"
              autoFocus
              onChange={handleSearch}
              className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-full leading-5 bg-[#FDF9F3] text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Search products..."
            />
          </div>
        </div>
      )}
    </header>
  );
}
