import { MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#1A472A] text-white pt-16 pb-8 border-t border-[#11301c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1 */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-6 text-[#FDF9F3]">Popular Categories</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/" className="hover:text-yellow-400 transition-colors">Premium Dates</Link></li>
              <li><Link to="/" className="hover:text-yellow-400 transition-colors">Roasted Nuts</Link></li>
              <li><Link to="/" className="hover:text-yellow-400 transition-colors">Mixed Dry Fruits</Link></li>
              <li><Link to="/" className="hover:text-yellow-400 transition-colors">Exotic Spices</Link></li>
              <li><Link to="/" className="hover:text-yellow-400 transition-colors">Chocolate Coated</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-6 text-[#FDF9F3]">Know Us</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/about" className="hover:text-yellow-400 transition-colors">Our Story</Link></li>
              <li><Link to="/about" className="hover:text-yellow-400 transition-colors">Events & Exhibitions</Link></li>
              <li><Link to="/about" className="hover:text-yellow-400 transition-colors">Healthy Recipes</Link></li>
              <li><Link to="/about" className="hover:text-yellow-400 transition-colors">Corporate Orders</Link></li>
              <li><Link to="/about" className="hover:text-yellow-400 transition-colors">Wholesale & B2B</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-6 text-[#FDF9F3]">Policies</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/about" className="hover:text-yellow-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/about" className="hover:text-yellow-400 transition-colors">Return & Refund Policy</Link></li>
              <li><Link to="/about" className="hover:text-yellow-400 transition-colors">Shipping Information</Link></li>
              <li><Link to="/about" className="hover:text-yellow-400 transition-colors">Terms of Service</Link></li>
              <li><Link to="/about" className="hover:text-yellow-400 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-6 text-[#FDF9F3]">Shop Offline</h4>
            <div className="space-y-6 text-sm text-gray-300">
              <div>
                <h5 className="font-bold text-white mb-2 flex items-center"><MapPin className="w-4 h-4 mr-2 text-yellow-400"/> India Hubs</h5>
                <p>Broadway, Kochi</p>
                <p>Marine Drive</p>
                <p>Kakkanad IT Park</p>
                <p className="flex items-center mt-1"><Phone className="w-3 h-3 mr-2"/> +91 98765 43210</p>
              </div>
              <div>
                <h5 className="font-bold text-white mb-2 flex items-center"><MapPin className="w-4 h-4 mr-2 text-yellow-400"/> UAE Hubs</h5>
                <p>Dubai Deira</p>
                <p>Sharjah Central</p>
                <p className="flex items-center mt-1"><Phone className="w-3 h-3 mr-2"/> +971 50 123 4567</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#11301c] pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} Gayathri Traders. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors font-medium">FB</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors font-medium">IG</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors font-medium">IN</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors font-medium">YT</a>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center justify-center">
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
      </a>
    </footer>
  );
}
