import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CategoryGrid from '../components/CategoryGrid';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { ArrowRight, Star } from 'lucide-react';

interface HomeProps {
  searchQuery: string;
}

export default function Home({ searchQuery }: HomeProps) {
  // If there's a search query, show search results
  if (searchQuery) {
    const searchResults = products.filter(p => 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      p.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 min-h-[70vh]">
        <h2 className="font-serif text-3xl font-bold text-gray-900 mb-8">
          Search Results for "{searchQuery}"
        </h2>
        {searchResults.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {searchResults.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100">
            <p className="text-gray-500 text-lg">We couldn't find any products matching your search.</p>
            <button 
              onClick={() => window.location.href = '/'}
              className="mt-4 text-[#1A472A] font-bold underline"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
    );
  }

  // Curated lists for sections
  const topDates = products.filter(p => p.category === 'Dates').slice(0, 4);
  const topChocolates = products.filter(p => p.category === 'Chocolates').slice(0, 4);
  const topNuts = products.filter(p => p.category === 'Nuts').slice(0, 4);
  const topSeeds = products.filter(p => p.category === 'Seeds').slice(0, 4);
  const topDryFruits = products.filter(p => p.category === 'Dry Fruits').slice(0, 4);

  return (
    <div className="bg-[#FDF9F3]">
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full overflow-hidden">
        <motion.div 
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img 
            src="/hero_banner_luxury_1778468341826.png" 
            alt="Luxury Dates and Saffron" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </motion.div>
        
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-2xl text-white">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-yellow-400 font-medium tracking-[0.2em] uppercase text-sm mb-4 flex items-center"
            >
              <span className="w-8 h-[1px] bg-yellow-400 mr-3"></span>
              The Pinnacle of Taste
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6"
            >
              Elegance in <br/><span className="italic font-light">Every Bite.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-lg md:text-xl text-gray-200 mb-10 font-light max-w-lg leading-relaxed"
            >
              Discover our curated collection of royal dates, artisanal chocolates, and exotic nuts sourced from the world's finest estates.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <button 
                onClick={() => document.getElementById('discover')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-[#1A472A] px-10 py-4 rounded-full font-bold text-lg hover:bg-[#1A472A] hover:text-white transition-all duration-500 shadow-[0_0_40px_rgba(255,255,255,0.3)] flex items-center group"
              >
                Discover the Collection
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <div id="discover">
        <CategoryGrid onSelectCategory={() => {}} />
      </div>

      {/* Section: The Royal Dates Collection */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FDF9F3] rounded-bl-[200px] opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-200 pb-6">
            <div className="max-w-2xl">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">The Royal Dates</h2>
              <p className="text-gray-500 text-lg font-light leading-relaxed">
                Hand-selected from the most prestigious palm groves. Experience the unmatched texture and natural caramel sweetness of our premium dates.
              </p>
            </div>
            <Link to="/shop?category=Dates" className="text-[#1A472A] font-bold mt-6 md:mt-0 flex items-center hover:text-yellow-600 transition-colors group">
              View All Dates <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {topDates.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Special Feature Split Section */}
      <section className="py-12 bg-[#FDF9F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 overflow-hidden rounded-3xl shadow-2xl bg-[#11301c]">
            <div className="relative h-[400px] md:h-auto">
              <img 
                src="/luxury_gift_box_1778468362200.png" 
                alt="Luxury Gifting" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
            <div className="p-12 md:p-20 flex flex-col justify-center text-white">
              <div className="flex items-center space-x-1 mb-6 text-yellow-400">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 leading-tight">
                The Art of <br/>Gifting.
              </h2>
              <p className="text-gray-300 text-lg font-light mb-8 leading-relaxed">
                Make an unforgettable impression. Our bespoke velvet gift boxes are meticulously packed with our finest selections, creating a sensory experience that defines true luxury.
              </p>
              <Link to="/shop?category=Gifts" className="self-start border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-[#11301c] transition-colors duration-300">
                Shop Gift Boxes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Artisan Chocolates */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-200 pb-6">
            <div className="max-w-2xl">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">Artisan Chocolates</h2>
              <p className="text-gray-500 text-lg font-light leading-relaxed">
                Rich, velvety, and expertly crafted. We merge fine Belgian chocolate with premium dry fruits and nuts for an indulgent symphony of flavors.
              </p>
            </div>
            <Link to="/shop?category=Chocolates" className="text-[#1A472A] font-bold mt-6 md:mt-0 flex items-center hover:text-yellow-600 transition-colors group">
              View All Chocolates <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {topChocolates.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Section: Exotic Nuts */}
      <section className="py-24 bg-[#FDF9F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-[#1A472A]/10 pb-6">
            <div className="max-w-2xl">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">Exotic Nuts & Seeds</h2>
              <p className="text-gray-500 text-lg font-light leading-relaxed">
                Roasted to perfection. Sourced directly from global artisans to ensure maximum crunch, freshness, and nutritional value.
              </p>
            </div>
            <Link to="/shop?category=Nuts" className="text-[#1A472A] font-bold mt-6 md:mt-0 flex items-center hover:text-yellow-600 transition-colors group">
              View All Nuts <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {topNuts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* NEW Section: Health & Wellness Seeds */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 overflow-hidden rounded-3xl shadow-2xl bg-[#eef5ef]">
            <div className="p-12 md:p-20 flex flex-col justify-center text-gray-900">
              <div className="flex items-center space-x-1 mb-6 text-green-600">
                <span className="text-sm font-bold tracking-widest uppercase">Wellness Collection</span>
              </div>
              <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 leading-tight text-[#1A472A]">
                Nourish Your <br/>Body.
              </h2>
              <p className="text-gray-600 text-lg font-light mb-8 leading-relaxed">
                Elevate your daily nutrition with our premium selection of chia, flax, and pumpkin seeds. The perfect addition to your morning smoothies and healthy bakes.
              </p>
              <Link to="/shop?category=Seeds" className="self-start bg-[#1A472A] text-white px-8 py-3 rounded-full font-bold hover:bg-[#11301c] transition-colors duration-300">
                Explore Healthy Seeds
              </Link>
            </div>
            <div className="relative h-[400px] md:h-auto order-first md:order-last">
              <img 
                src="/health_wellness_seeds_1778468986003.png" 
                alt="Health and Wellness Seeds" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* NEW Section: Exotic Dry Fruits Platter */}
      <section className="py-24 bg-[#FDF9F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-[#1A472A]/10 pb-6">
            <div className="max-w-2xl">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">Vibrant Dry Fruits</h2>
              <p className="text-gray-500 text-lg font-light leading-relaxed">
                A colorful assortment of sun-dried kiwi, mango, figs, and berries. Packed with natural vitamins and a burst of exotic sweetness.
              </p>
            </div>
            <Link to="/shop?category=Dry%20Fruits" className="text-[#1A472A] font-bold mt-6 md:mt-0 flex items-center hover:text-yellow-600 transition-colors group">
              View All Dry Fruits <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {topDryFruits.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Heritage Module */}
      <section className="bg-[#11301c] text-[#FDF9F3] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6">
            A Legacy of Quality
          </h2>
          <p className="text-lg md:text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed mb-10">
            For decades, Gayathri Traders has traversed the globe—from the historic palm groves of Saudi Arabia to the sun-kissed valleys of California—to bring you a heritage of unparalleled flavor and authenticity.
          </p>
          <Link 
            to="/about"
            className="inline-block border-2 border-white text-white hover:bg-white hover:text-[#11301c] px-12 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
          >
            Read Our Heritage
          </Link>
        </div>
      </section>
    </div>
  );
}
