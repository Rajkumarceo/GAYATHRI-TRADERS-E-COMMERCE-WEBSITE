import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Checkout() {
  const { items, totalPrice } = useCart();
  const navigate = useNavigate();

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    navigate('/payment');
  };

  const totalAmount = totalPrice >= 1999 ? totalPrice : totalPrice + 99;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Progress Bar */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="flex items-center justify-center">
          <div className="flex items-center text-[#1A472A]">
            <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold bg-[#1A472A] text-white">1</div>
            <span className="ml-2 font-medium">Shipping Details</span>
          </div>
          <div className="w-16 h-1 mx-4 bg-gray-200">
            <div className="h-full bg-gray-200" />
          </div>
          <div className="flex items-center text-gray-500">
            <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold bg-gray-200 text-gray-600">2</div>
            <span className="ml-2 font-medium">Secure Payment</span>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Column: Forms */}
        <div>
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
            <h2 className="font-serif text-2xl font-bold mb-6 border-b pb-4">Shipping Information</h2>
            <form onSubmit={handleShippingSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input required type="text" className="w-full border-gray-300 rounded-lg p-3 focus:ring-[#1A472A] focus:border-[#1A472A] shadow-sm border" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input required type="text" className="w-full border-gray-300 rounded-lg p-3 focus:ring-[#1A472A] focus:border-[#1A472A] shadow-sm border" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input required type="email" className="w-full border-gray-300 rounded-lg p-3 focus:ring-[#1A472A] focus:border-[#1A472A] shadow-sm border" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input required type="tel" className="w-full border-gray-300 rounded-lg p-3 focus:ring-[#1A472A] focus:border-[#1A472A] shadow-sm border" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Address</label>
                <textarea required rows={3} className="w-full border-gray-300 rounded-lg p-3 focus:ring-[#1A472A] focus:border-[#1A472A] shadow-sm border" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                  <input required type="text" className="w-full border-gray-300 rounded-lg p-3 focus:ring-[#1A472A] focus:border-[#1A472A] shadow-sm border" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Postal Code</label>
                  <input required type="text" className="w-full border-gray-300 rounded-lg p-3 focus:ring-[#1A472A] focus:border-[#1A472A] shadow-sm border" />
                </div>
              </div>
              <button
                type="submit"
                disabled={items.length === 0}
                className="w-full bg-[#1A472A] text-white py-4 rounded-xl font-bold text-xl hover:bg-[#11301c] transition-colors mt-8 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue to Payment
              </button>
            </form>
          </div>
        </div>

        {/* Right Column: Order Summary */}
        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 h-fit sticky top-24">
          <h2 className="font-serif text-2xl font-bold mb-6 border-b pb-4">Order Summary</h2>
          {items.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            <div className="space-y-4">
              {items.map(item => (
                <div key={item.id} className="flex gap-4">
                  <img src={item.primaryImage} alt={item.title} className="w-16 h-16 object-cover rounded-md border" />
                  <div className="flex-1">
                    <h3 className="font-bold text-sm text-gray-900">{item.title}</h3>
                    <p className="text-gray-500 text-sm">Qty: {item.quantity}</p>
                  </div>
                  <span className="font-bold text-[#1A472A]">₹{item.price * item.quantity}</span>
                </div>
              ))}
              <div className="border-t border-gray-100 pt-6 mt-6 space-y-3">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>₹{totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className={totalPrice >= 1999 ? 'text-green-600 font-bold' : ''}>
                    {totalPrice >= 1999 ? 'Free' : '₹99.00'}
                  </span>
                </div>
                <div className="flex justify-between font-bold text-xl pt-4 border-t border-gray-200 text-[#1A472A]">
                  <span>Total</span>
                  <span>₹{totalAmount.toFixed(2)} INR</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
