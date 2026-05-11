import { useState } from 'react';
import { motion } from 'framer-motion';
import type { Product } from '../data/products';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();
  const { title, price, originalPrice, discount, isSoldOut, hasOptions, primaryImage, secondaryImage } = product;

  return (
    <motion.div 
      className="group relative flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
        {discount && (
          <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm tracking-wider uppercase">
            Upto {discount}% Off
          </span>
        )}
      </div>

      {/* Sold Out Overlay */}
      {isSoldOut && (
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] z-20 flex items-center justify-center">
          <span className="bg-gray-800 text-white font-bold px-4 py-2 rounded shadow-lg uppercase tracking-widest text-sm">
            Sold Out
          </span>
        </div>
      )}

      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-white flex items-center justify-center p-4 border-b border-gray-50">
        <motion.img 
          src={isHovered ? secondaryImage : primaryImage}
          alt={title}
          className="object-contain w-full h-full drop-shadow-md mix-blend-multiply"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.4 }}
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow text-center">
        <h3 className="font-serif text-lg text-gray-900 mb-2 leading-tight group-hover:text-[#1A472A] transition-colors">
          {title}
        </h3>
        
        <div className="mt-auto mb-4 flex flex-col items-center justify-center space-y-1">
          <div className="flex items-center space-x-2">
            {originalPrice && (
              <span className="text-gray-400 line-through text-sm">
                Rs. {originalPrice.toFixed(2)}
              </span>
            )}
            <span className="font-bold text-[#1A472A] text-lg">
              {hasOptions ? 'From ' : ''}Rs. {price.toFixed(2)} <span className="text-sm font-normal text-gray-600">INR</span>
            </span>
          </div>
        </div>

        {/* Action Button */}
        <button 
          onClick={() => !isSoldOut && addToCart(product)}
          className={`w-full py-3 rounded-lg font-semibold tracking-wide transition-all ${
            isSoldOut 
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
              : 'bg-[#1A472A] text-white hover:bg-[#11301c] shadow-md hover:shadow-lg'
          }`}
          disabled={isSoldOut}
        >
          {isSoldOut ? 'Out of Stock' : hasOptions ? 'Add to Cart' : 'Add to Cart'}
        </button>
      </div>
    </motion.div>
  );
}
