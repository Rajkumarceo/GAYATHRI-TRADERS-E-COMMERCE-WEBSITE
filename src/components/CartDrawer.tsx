import { X, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { items, removeFromCart, updateQuantity, totalItems, totalPrice, setIsCartOpen } = useCart();
  const navigate = useNavigate();
  const shippingThreshold = 1999;
  const progress = Math.min((totalPrice / shippingThreshold) * 100, 100);
  const remaining = shippingThreshold - totalPrice;

  const handleCheckout = () => {
    if (items.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    setIsCartOpen(false);
    navigate('/checkout');
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } flex flex-col`}
      >
        {/* Header */}
        <div className="p-4 border-b flex justify-between items-center bg-[#FDF9F3]">
          <h2 className="font-serif text-2xl font-bold flex items-center">
            <ShoppingBag className="mr-2 h-6 w-6 text-[#1A472A]" />
            Your Cart ({totalItems})
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-200 rounded-full transition-colors">
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Shipping Progress */}
        <div className="p-4 bg-green-50 border-b border-green-100">
          <p className="text-sm font-medium text-[#1A472A] mb-2 text-center">
            {remaining > 0 
              ? `You're just ₹${remaining} away from FREE SHIPPING!` 
              : "Congratulations! You've unlocked FREE SHIPPING!"}
          </p>
          <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-green-500 transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="text-center text-gray-500 mt-10">
              <ShoppingBag className="w-12 h-12 mx-auto mb-4 text-gray-300" />
              <p>Your cart is empty.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(item => (
                <div key={item.id} className="flex gap-4 border-b pb-4">
                  <img 
                    src={item.primaryImage} 
                    alt={item.title} 
                    className="w-20 h-20 object-cover rounded-lg border"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 leading-tight">{item.title}</h3>
                    <div className="flex justify-between items-center mt-3">
                      <div className="flex items-center border rounded">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 py-1 hover:bg-gray-100">-</button>
                        <span className="px-2 text-sm font-medium">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 hover:bg-gray-100">+</button>
                      </div>
                      <span className="font-bold text-[#1A472A]">₹{item.price * item.quantity}</span>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="text-xs text-red-500 hover:text-red-700 mt-2">Remove</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t bg-[#FDF9F3]">
          <div className="flex justify-between text-lg font-bold mb-4">
            <span>Subtotal</span>
            <span>₹{totalPrice.toFixed(2)} INR</span>
          </div>
          <p className="text-xs text-gray-500 text-center mb-4">
            Shipping & taxes calculated at checkout
          </p>
          <button 
            onClick={handleCheckout}
            className="w-full bg-[#1A472A] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#11301c] transition-colors shadow-lg"
          >
            Checkout Now
          </button>
        </div>
      </div>
    </>
  );
}
