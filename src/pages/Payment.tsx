import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { CreditCard, Wallet, Truck, CheckCircle, ShieldCheck, ArrowLeft } from 'lucide-react';

export default function Payment() {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const totalAmount = totalPrice >= 1999 ? totalPrice : totalPrice + 99;

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment gateway delay
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      clearCart();
    }, 2000);
  };

  if (items.length === 0 && !isSuccess) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-4">
        <p className="text-gray-500 mb-4 text-xl">Your cart is empty or payment already completed.</p>
        <button onClick={() => navigate('/')} className="text-[#1A472A] font-bold underline">Return to Shop</button>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-[#FDF9F3] flex items-center justify-center p-4">
        <div className="bg-white p-10 rounded-2xl shadow-2xl max-w-lg w-full text-center border-t-8 border-green-500">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-500" />
          </div>
          <h2 className="font-serif text-3xl font-bold text-gray-900 mb-2">Payment Successful!</h2>
          <p className="text-gray-500 mb-8 text-lg">Transaction ID: GT-{Math.floor(Math.random() * 100000000)}</p>
          
          <div className="bg-gray-50 p-6 rounded-xl mb-8 text-left">
            <h3 className="font-bold text-gray-900 mb-4 border-b pb-2">Order Details</h3>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Amount Paid</span>
              <span className="font-bold text-[#1A472A]">₹{totalAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Payment Method</span>
              <span className="font-medium text-gray-900 capitalize">{paymentMethod === 'cod' ? 'Cash on Delivery' : paymentMethod}</span>
            </div>
          </div>

          <button
            onClick={() => navigate('/')}
            className="bg-[#1A472A] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#11301c] transition-colors w-full shadow-lg flex items-center justify-center"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button onClick={() => navigate('/checkout')} className="flex items-center text-gray-500 hover:text-[#1A472A] transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Checkout
          </button>
          <div className="flex items-center text-green-600 font-medium">
            <ShieldCheck className="w-5 h-5 mr-2" />
            100% Secure Payment
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Payment Options (Left 2 columns) */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-6 bg-[#1A472A] text-white">
                <h1 className="text-2xl font-bold mb-1">Select Payment Method</h1>
                <p className="text-green-100 opacity-90 text-sm">Choose how you'd like to pay for your order.</p>
              </div>
              
              <div className="p-6">
                <form onSubmit={handlePaymentSubmit}>
                  {/* Payment Method Selector */}
                  <div className="grid sm:grid-cols-3 gap-4 mb-8">
                    <label className={`flex flex-col items-center p-4 border-2 rounded-xl cursor-pointer transition-all ${paymentMethod === 'card' ? 'border-[#1A472A] bg-green-50 shadow-md' : 'border-gray-200 hover:border-gray-300'}`}>
                      <input type="radio" name="payment" value="card" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} className="sr-only" />
                      <CreditCard className={`w-8 h-8 mb-3 ${paymentMethod === 'card' ? 'text-[#1A472A]' : 'text-gray-400'}`} />
                      <span className={`font-semibold text-sm text-center ${paymentMethod === 'card' ? 'text-[#1A472A]' : 'text-gray-600'}`}>Credit / Debit Card</span>
                    </label>

                    <label className={`flex flex-col items-center p-4 border-2 rounded-xl cursor-pointer transition-all ${paymentMethod === 'upi' ? 'border-[#1A472A] bg-green-50 shadow-md' : 'border-gray-200 hover:border-gray-300'}`}>
                      <input type="radio" name="payment" value="upi" checked={paymentMethod === 'upi'} onChange={() => setPaymentMethod('upi')} className="sr-only" />
                      <Wallet className={`w-8 h-8 mb-3 ${paymentMethod === 'upi' ? 'text-[#1A472A]' : 'text-gray-400'}`} />
                      <span className={`font-semibold text-sm text-center ${paymentMethod === 'upi' ? 'text-[#1A472A]' : 'text-gray-600'}`}>UPI / Wallets</span>
                    </label>

                    <label className={`flex flex-col items-center p-4 border-2 rounded-xl cursor-pointer transition-all ${paymentMethod === 'cod' ? 'border-[#1A472A] bg-green-50 shadow-md' : 'border-gray-200 hover:border-gray-300'}`}>
                      <input type="radio" name="payment" value="cod" checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} className="sr-only" />
                      <Truck className={`w-8 h-8 mb-3 ${paymentMethod === 'cod' ? 'text-[#1A472A]' : 'text-gray-400'}`} />
                      <span className={`font-semibold text-sm text-center ${paymentMethod === 'cod' ? 'text-[#1A472A]' : 'text-gray-600'}`}>Cash on Delivery</span>
                    </label>
                  </div>

                  {/* Payment Details Form */}
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 min-h-[250px]">
                    {paymentMethod === 'card' && (
                      <div className="space-y-5 animate-fade-in">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Card Number</label>
                          <div className="relative">
                            <input required type="text" placeholder="0000 0000 0000 0000" className="w-full border-gray-300 rounded-lg pl-10 pr-4 py-3 focus:ring-[#1A472A] focus:border-[#1A472A] shadow-sm" />
                            <CreditCard className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Name on Card</label>
                          <input required type="text" placeholder="John Doe" className="w-full border-gray-300 rounded-lg px-4 py-3 focus:ring-[#1A472A] focus:border-[#1A472A] shadow-sm" />
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Expiry Date</label>
                            <input required type="text" placeholder="MM/YY" className="w-full border-gray-300 rounded-lg px-4 py-3 focus:ring-[#1A472A] focus:border-[#1A472A] shadow-sm" />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">CVV</label>
                            <input required type="password" placeholder="•••" maxLength={3} className="w-full border-gray-300 rounded-lg px-4 py-3 focus:ring-[#1A472A] focus:border-[#1A472A] shadow-sm" />
                          </div>
                        </div>
                      </div>
                    )}

                    {paymentMethod === 'upi' && (
                      <div className="space-y-6 animate-fade-in text-center py-6">
                        <div className="bg-white p-4 inline-block rounded-xl shadow-sm border border-gray-200">
                           <div className="w-40 h-40 bg-gray-100 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg">
                             <span className="text-sm text-gray-500 font-medium">QR Code Placeholder</span>
                           </div>
                        </div>
                        <p className="text-gray-500 text-sm">Scan with any UPI app to pay</p>
                        <div className="flex items-center my-4">
                          <div className="flex-grow border-t border-gray-300"></div>
                          <span className="px-4 text-gray-400 text-sm">OR</span>
                          <div className="flex-grow border-t border-gray-300"></div>
                        </div>
                        <div className="text-left">
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Enter UPI ID</label>
                          <input required type="text" placeholder="username@upi" className="w-full border-gray-300 rounded-lg px-4 py-3 focus:ring-[#1A472A] focus:border-[#1A472A] shadow-sm" />
                        </div>
                      </div>
                    )}

                    {paymentMethod === 'cod' && (
                      <div className="animate-fade-in py-12 text-center">
                        <Truck className="w-16 h-16 text-[#1A472A] mx-auto mb-4 opacity-80" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Pay when you receive!</h3>
                        <p className="text-gray-600 max-w-sm mx-auto">
                          You can pay via Cash or UPI to the delivery executive when your order arrives.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="mt-8">
                    <button
                      type="submit"
                      disabled={isProcessing}
                      className="w-full bg-[#1A472A] text-white py-4 rounded-xl font-bold text-xl hover:bg-[#11301c] transition-all shadow-xl flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isProcessing ? (
                        <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        `Pay ₹${totalAmount.toFixed(2)} Securely`
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Right Column: Mini Summary */}
          <div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 sticky top-8">
              <h2 className="font-serif text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                {items.map(item => (
                  <div key={item.id} className="flex gap-3">
                    <img src={item.primaryImage} alt={item.title} className="w-12 h-12 object-cover rounded shadow-sm" />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm text-gray-900 truncate">{item.title}</h3>
                      <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                    </div>
                    <span className="font-bold text-sm text-gray-900">₹{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-100 pt-4 space-y-3">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Subtotal</span>
                  <span>₹{totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Shipping</span>
                  <span className={totalPrice >= 1999 ? 'text-green-600 font-medium' : ''}>
                    {totalPrice >= 1999 ? 'FREE' : '₹99.00'}
                  </span>
                </div>
                <div className="flex justify-between font-bold text-lg pt-4 border-t border-gray-100 text-[#1A472A]">
                  <span>Total Amount</span>
                  <span>₹{totalAmount.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="mt-8 flex items-center justify-center text-xs text-gray-400">
                <ShieldCheck className="w-4 h-4 mr-1" /> All transactions are encrypted.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
