export default function About() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#1A472A]">Our Heritage</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          For over two decades, Gayathri Traders has been synonymous with uncompromising quality, sourcing the world's finest nuts, seeds, and dry fruits directly from heritage farms.
        </p>
      </section>

      {/* Origin Story */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="font-serif text-3xl font-bold text-gray-900">A Legacy of Taste</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            What started as a small family endeavor in the heart of traditional spice markets has blossomed into a premier global sourcing hub. We believe that true luxury lies in nature's purest forms. 
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            Our experts travel across continents—from the fertile valleys of California for our almonds, to the historic palm groves of Saudi Arabia for our exclusive Ajwa dates—ensuring that every bite you take is a testament to our dedication.
          </p>
        </div>
        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl group">
          <img 
            src="/premium_ajwa_dates_1778437960797.png" 
            alt="Premium Dates" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </section>

      {/* Quality Promise */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl group order-2 md:order-1">
          <img 
            src="/premium_cashews_1778439245269.png" 
            alt="Premium Cashews" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="space-y-6 order-1 md:order-2">
          <h2 className="font-serif text-3xl font-bold text-gray-900">Our Quality Promise</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            We don't just sell dry fruits; we curate experiences. Every single nut, date, and seed that enters our facility undergoes rigorous quality control. 
          </p>
          <ul className="space-y-4 mt-6">
            <li className="flex items-center text-gray-800 font-medium">
              <span className="w-2 h-2 bg-[#1A472A] rounded-full mr-3"></span> Hand-picked selections
            </li>
            <li className="flex items-center text-gray-800 font-medium">
              <span className="w-2 h-2 bg-[#1A472A] rounded-full mr-3"></span> Zero artificial preservatives
            </li>
            <li className="flex items-center text-gray-800 font-medium">
              <span className="w-2 h-2 bg-[#1A472A] rounded-full mr-3"></span> Sustainable farming partnerships
            </li>
            <li className="flex items-center text-gray-800 font-medium">
              <span className="w-2 h-2 bg-[#1A472A] rounded-full mr-3"></span> State-of-the-art cold storage
            </li>
          </ul>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-[#FDF9F3] p-12 md:p-20 rounded-3xl text-center shadow-inner">
        <h2 className="font-serif text-4xl font-bold text-[#1A472A] mb-8">Looking to the Future</h2>
        <p className="text-xl text-gray-800 max-w-4xl mx-auto leading-relaxed">
          As Gayathri Traders continues to grow, our core mission remains unchanged: to bring the world's most exquisite and nutritious natural treasures directly to your doorstep. We are committed to expanding our organic lines and pioneering eco-friendly packaging, ensuring our legacy honors both our customers and the planet.
        </p>
      </section>
    </div>
  );
}
