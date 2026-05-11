import { useState } from 'react';
import { User, Package, MapPin, LogOut } from 'lucide-react';

export default function Account() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('orders');

  if (!isLoggedIn) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
          <div>
            <h2 className="mt-6 text-center text-3xl font-serif font-bold text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or <button className="font-medium text-[#1A472A] hover:text-[#11301c]">create a new account</button>
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={(e) => { e.preventDefault(); setIsLoggedIn(true); }}>
            <div className="rounded-md shadow-sm space-y-4">
              <div>
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input id="email-address" name="email" type="email" required className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#1A472A] focus:border-[#1A472A] focus:z-10 sm:text-sm" placeholder="Email address" />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input id="password" name="password" type="password" required className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#1A472A] focus:border-[#1A472A] focus:z-10 sm:text-sm" placeholder="Password" />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-[#1A472A] focus:ring-[#1A472A] border-gray-300 rounded" />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-[#1A472A] hover:text-[#11301c]">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button type="submit" className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-[#1A472A] hover:bg-[#11301c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A472A] transition-colors shadow-md">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 min-h-[70vh]">
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Sidebar */}
        <div className="w-full md:w-64 space-y-2">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-6 text-center">
            <div className="w-20 h-20 bg-[#1A472A] rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold mb-4 shadow-inner">
              GT
            </div>
            <h3 className="font-bold text-lg text-gray-900">Guest User</h3>
            <p className="text-sm text-gray-500">Premium Member</p>
          </div>

          <nav className="space-y-2">
            <button onClick={() => setActiveTab('orders')} className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-colors ${activeTab === 'orders' ? 'bg-[#1A472A] text-white' : 'text-gray-600 hover:bg-gray-100'}`}>
              <Package className="w-5 h-5" />
              <span>Order History</span>
            </button>
            <button onClick={() => setActiveTab('profile')} className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-colors ${activeTab === 'profile' ? 'bg-[#1A472A] text-white' : 'text-gray-600 hover:bg-gray-100'}`}>
              <User className="w-5 h-5" />
              <span>Profile Details</span>
            </button>
            <button onClick={() => setActiveTab('addresses')} className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-colors ${activeTab === 'addresses' ? 'bg-[#1A472A] text-white' : 'text-gray-600 hover:bg-gray-100'}`}>
              <MapPin className="w-5 h-5" />
              <span>Addresses</span>
            </button>
            <button onClick={() => setIsLoggedIn(false)} className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg font-medium text-red-600 hover:bg-red-50 transition-colors mt-8">
              <LogOut className="w-5 h-5" />
              <span>Sign Out</span>
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          {activeTab === 'orders' && (
            <div>
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">Recent Orders</h2>
              <div className="space-y-6">
                
                {/* Mock Order 1 */}
                <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap justify-between items-center border-b pb-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Order #GT-8842</p>
                      <p className="font-medium text-gray-900">Placed on May 8, 2026</p>
                    </div>
                    <div className="text-right mt-4 sm:mt-0">
                      <p className="text-sm text-gray-500">Total Amount</p>
                      <p className="font-bold text-[#1A472A]">Rs. 3,499.00</p>
                    </div>
                    <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mt-4 sm:mt-0">
                      Delivered
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <img src="/luxury_chocolate_dates_1778438013462.png" className="w-16 h-16 rounded-lg object-cover border" alt="Item" />
                    <div>
                      <p className="font-bold text-gray-900">Luxury Chocolate Dates x 2</p>
                      <p className="text-sm text-gray-500">Premium quality</p>
                    </div>
                  </div>
                </div>

                {/* Mock Order 2 */}
                <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap justify-between items-center border-b pb-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Order #GT-8211</p>
                      <p className="font-medium text-gray-900">Placed on Apr 22, 2026</p>
                    </div>
                    <div className="text-right mt-4 sm:mt-0">
                      <p className="text-sm text-gray-500">Total Amount</p>
                      <p className="font-bold text-[#1A472A]">Rs. 1,250.00</p>
                    </div>
                    <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mt-4 sm:mt-0">
                      Delivered
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <img src="/premium_walnuts_1778439260028.png" className="w-16 h-16 rounded-lg object-cover border" alt="Item" />
                    <div>
                      <p className="font-bold text-gray-900">Shelled Walnuts x 1</p>
                      <p className="text-sm text-gray-500">Fresh harvest</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

          {activeTab === 'profile' && (
            <div>
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">Profile Details</h2>
              <p className="text-gray-500 mb-8">Manage your personal information and preferences.</p>
              
              <div className="space-y-6 max-w-lg">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" defaultValue="Guest User" className="w-full px-4 py-2 border rounded-lg focus:ring-[#1A472A] focus:border-[#1A472A]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input type="email" defaultValue="guest@example.com" className="w-full px-4 py-2 border rounded-lg focus:ring-[#1A472A] focus:border-[#1A472A]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input type="tel" defaultValue="+91 98765 43210" className="w-full px-4 py-2 border rounded-lg focus:ring-[#1A472A] focus:border-[#1A472A]" />
                </div>
                <button className="bg-[#1A472A] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#11301c] transition-colors">
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {activeTab === 'addresses' && (
            <div>
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">Saved Addresses</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-2 border-[#1A472A] rounded-xl p-6 relative">
                  <span className="absolute -top-3 left-4 bg-[#1A472A] text-white text-xs font-bold px-2 py-1 rounded">DEFAULT</span>
                  <h4 className="font-bold text-lg mb-2">Home</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    123 Palm Tree Avenue,<br/>
                    Sector 42, Green Park,<br/>
                    New Delhi, 110016<br/>
                    India
                  </p>
                  <div className="mt-4 flex space-x-4">
                    <button className="text-sm font-medium text-[#1A472A]">Edit</button>
                    <button className="text-sm font-medium text-red-600">Delete</button>
                  </div>
                </div>
                
                <button className="border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center text-gray-500 hover:text-[#1A472A] hover:border-[#1A472A] hover:bg-[#FDF9F3] transition-all min-h-[180px]">
                  <MapPin className="w-8 h-8 mb-2" />
                  <span className="font-medium">Add New Address</span>
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
