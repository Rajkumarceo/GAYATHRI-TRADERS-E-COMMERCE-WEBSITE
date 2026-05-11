import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import CategoryGrid from '../components/CategoryGrid';
import { products } from '../data/products';
import { Filter, ChevronDown } from 'lucide-react';

export default function Shop() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get('category') || 'All';

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [sortOption, setSortOption] = useState('featured');

  useEffect(() => {
    if (queryParams.get('category')) {
      setActiveCategory(queryParams.get('category')!);
    }
  }, [location.search]);

  let displayedProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  if (sortOption === 'price-low') {
    displayedProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === 'price-high') {
    displayedProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="bg-gray-50 min-h-screen pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {activeCategory === 'All' ? 'All Products' : `${activeCategory} Collection`}
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Discover our complete selection of premium quality nuts, dates, chocolates, and exotic dry fruits.
          </p>
        </div>

        {/* Categories (Quick Filter) */}
        <div className="mb-12 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
          <CategoryGrid onSelectCategory={(cat) => setActiveCategory(cat)} />
          <div className="flex justify-center mt-4 border-t pt-4">
             <button 
               onClick={() => setActiveCategory('All')}
               className={`px-6 py-2 rounded-full text-sm font-bold transition-colors ${activeCategory === 'All' ? 'bg-[#1A472A] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
             >
               View All
             </button>
          </div>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center text-gray-500 mb-4 sm:mb-0">
            <Filter className="w-5 h-5 mr-2" />
            <span className="font-medium">Showing {displayedProducts.length} products</span>
          </div>

          <div className="flex items-center relative">
            <span className="text-gray-500 mr-3 font-medium">Sort by:</span>
            <div className="relative">
              <select 
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="appearance-none bg-gray-50 border border-gray-200 text-gray-700 py-2 pl-4 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A472A] font-medium"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3 top-3 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {displayedProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {displayedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100">
            <p className="text-gray-500 text-lg">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
