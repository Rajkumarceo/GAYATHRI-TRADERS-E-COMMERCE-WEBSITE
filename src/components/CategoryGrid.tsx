import { motion } from 'framer-motion';

const categories = [
  { name: 'Dates', image: '/royal_safawi_dates_1778469453861.png' },
  { name: 'Nuts', image: '/fresh_hazelnuts_1778467634771.png' },
  { name: 'Dry Fruits', image: '/dry_figs_1778467599660.png' },
  { name: 'Spices', image: '/assorted_spices_1778467652235.png' },
  { name: 'Chocolates', image: '/chocolate_almonds_1778467690374.png' },
  { name: 'Seeds', image: '/health_wellness_seeds_1778468986003.png' },
  { name: 'Exotic', image: '/exotic_dry_fruits_platter_1778469005363.png' },
  { name: 'Gifts', image: '/luxury_gift_box_1778468362200.png' },
];

interface CategoryGridProps {
  onSelectCategory: (category: string) => void;
}

export default function CategoryGrid({ onSelectCategory }: CategoryGridProps) {
  const handleCategoryClick = (categoryName: string) => {
    onSelectCategory(categoryName);
    const collectionsSection = document.getElementById('collections-section');
    if (collectionsSection) {
      collectionsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex overflow-x-auto pb-6 md:grid md:grid-cols-8 gap-6 scrollbar-hide">
          {categories.map((category, index) => (
            <motion.div 
              key={category.name}
              onClick={() => handleCategoryClick(category.name)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center flex-shrink-0 cursor-pointer group"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] mb-4 group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.15)] transition-all duration-300 border-4 border-white">
                <motion.img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              <span className="font-sans font-medium text-gray-800 group-hover:text-[#1A472A] transition-colors">
                {category.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
