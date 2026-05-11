export interface Product {
  id: number;
  title: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  primaryImage: string;
  secondaryImage: string;
  hasOptions: boolean;
  category: string;
  isSoldOut?: boolean;
}

const generatePrice = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

const getImageForTitle = (title: string, category: string): string => {
  const t = title.toLowerCase();
  
  if (category === 'Nuts') {
    if (t.includes('almond')) return '/roasted_almonds_1778437983594.png';
    if (t.includes('cashew')) return '/premium_cashews_1778439245269.png';
    if (t.includes('walnut')) return '/premium_walnuts_1778439260028.png';
    if (t.includes('pistachio')) return '/premium_pistachios_1778439274124.png';
    if (t.includes('hazelnut')) return '/fresh_hazelnuts_1778467634771.png';
    return '/fresh_hazelnuts_1778467634771.png'; // fallback
  }
  
  if (category === 'Dates') {
    if (t.includes('ajwa')) return '/premium_ajwa_dates_1778437960797.png';
    return '/royal_safawi_dates_1778469453861.png';
  }
  
  if (category === 'Dry Fruits') {
    if (t.includes('fig')) return '/dry_figs_1778467599660.png';
    if (t.includes('raisin')) return '/premium_raisins_1778467615704.png';
    if (t.includes('kiwi')) return '/premium_kiwi_slices_1778469437305.png';
    if (t.includes('mango')) return '/sun_dried_mango_1778469434788.png';
    return '/exotic_dry_fruits_platter_1778469005363.png';
  }
  
  if (category === 'Chocolates') {
    if (t.includes('almond')) return '/chocolate_almonds_1778467690374.png';
    if (t.includes('date')) return '/luxury_chocolate_dates_1778438013462.png';
    return '/chocolate_almonds_1778467690374.png';
  }
  
  if (category === 'Seeds') {
    if (t.includes('chia') || t.includes('flax') || t.includes('pumpkin')) return '/health_wellness_seeds_1778468986003.png';
    return '/mixed_seeds_1778467673239.png';
  }
  
  if (category === 'Gifts') {
    if (t.includes('golden') || t.includes('luxury')) return '/golden_gift_box_1_1778469982977.png';
    return '/golden_gift_box_2_1778470002738.png';
  }
  
  return '/exotic_dry_fruits_platter_1778469005363.png';
};

export const products: Product[] = [];

let idCounter = 1;

// Adding explicitly requested specific products
products.push({
  id: idCounter++,
  title: "Premium Dried Kiwi Slices",
  price: 850,
  originalPrice: 1000,
  discount: 15,
  primaryImage: '/premium_kiwi_slices_1778469437305.png',
  secondaryImage: '/premium_kiwi_slices_1778469437305.png',
  hasOptions: true,
  category: 'Dry Fruits'
});

products.push({
  id: idCounter++,
  title: "Sun-Dried Mango Slices",
  price: 950,
  originalPrice: 1100,
  discount: 13,
  primaryImage: '/sun_dried_mango_1778469434788.png',
  secondaryImage: '/sun_dried_mango_1778469434788.png',
  hasOptions: true,
  category: 'Dry Fruits'
});

products.push({
  id: idCounter++,
  title: "Royal Safawi Dates",
  price: 1200,
  originalPrice: 1500,
  discount: 20,
  primaryImage: '/royal_safawi_dates_1778469453861.png',
  secondaryImage: '/royal_safawi_dates_1778469453861.png',
  hasOptions: true,
  category: 'Dates'
});

// Dates
const dateNames = ["Premium Ajwa Dates", "Jumbo Medjool Dates", "Safawi Dates Box", "Mabroom Dates", "Sukkari Soft Dates", "Khidri Dates", "Zahidi Dates", "Deglet Nour Dates", "Barhi Dates", "Khudri Dates", "Halawy Dates", "Dayri Dates", "Thoory Dates", "Kalmi Dates", "Royal Omani Dates", "Fard Dates", "Kholas Dates", "Lulu Dates", "Sokari Dates", "Anbara Dates", "Sagai Dates", "Majdool Special", "Rutab Dates", "Maktoom Dates", "Dabbas Dates", "Shishi Dates", "Zamli Dates", "Jomara Dates", "Maktoumi Dates", "Premium Medjool Box"];
dateNames.forEach(title => {
  const price = generatePrice(600, 2500);
  products.push({
    id: idCounter++,
    title,
    price,
    originalPrice: price + 300,
    discount: 10 + Math.floor(Math.random() * 15),
    primaryImage: getImageForTitle(title, 'Dates'),
    secondaryImage: getImageForTitle(title, 'Dates'),
    hasOptions: true,
    category: 'Dates'
  });
});

// Chocolates
const chocNames = ["Dark Chocolate Almonds", "Milk Chocolate Cashews", "White Chocolate Pistachios", "Chocolate Coated Dates", "Truffle Dates", "Ruby Chocolate Walnuts", "Dark Chocolate Hazelnut", "Milk Chocolate Pecans", "Caramel Filled Chocolate", "Sea Salt Dark Chocolate", "Dark Chocolate Macadamia", "Mint Chocolate Almonds", "Orange Chocolate Dates", "Chocolate Coated Raisins", "White Chocolate Cranberries", "Dark Chocolate Figs", "Milk Chocolate Apricots", "Double Chocolate Cashews", "Vegan Dark Chocolate Dates", "Coconut Chocolate Almonds", "Mocha Chocolate Walnuts", "Hazelnut Praline Dates", "Chocolate Coated Blueberries", "Dark Chocolate Cherries", "Milk Chocolate Peanuts", "Spiced Chocolate Almonds", "Honey Chocolate Cashews", "Gold Dusted Chocolate Dates", "Premium Assorted Chocolates", "Luxury Chocolate Truffles"];
chocNames.forEach(title => {
  const price = generatePrice(800, 3000);
  products.push({
    id: idCounter++,
    title,
    price,
    primaryImage: getImageForTitle(title, 'Chocolates'),
    secondaryImage: getImageForTitle(title, 'Chocolates'),
    hasOptions: false,
    category: 'Chocolates'
  });
});

// Seeds
const seedNames = ["Roasted Pumpkin Seeds", "Raw Sunflower Seeds", "Chia Seeds", "Flax Seeds", "Sesame Seeds", "Watermelon Seeds", "Melon Seeds", "Hemp Seeds", "Quinoa Seeds", "Poppy Seeds", "Roasted Basil Seeds", "Spicy Pumpkin Seeds", "Salted Sunflower Seeds", "Mixed Seed Trail", "Organic Chia Seeds", "Golden Flax Seeds", "Black Sesame Seeds", "Roasted Watermelon Seeds", "Caramelized Melon Seeds", "Premium Seed Mix"];
seedNames.forEach(title => {
  const price = generatePrice(300, 1200);
  products.push({
    id: idCounter++,
    title,
    price,
    originalPrice: price + 150,
    discount: Math.floor(Math.random() * 20) + 5,
    primaryImage: getImageForTitle(title, 'Seeds'),
    secondaryImage: getImageForTitle(title, 'Seeds'),
    hasOptions: true,
    category: 'Seeds'
  });
});

// Nuts
const nutNames = ["Roasted Almonds", "Salted Cashews", "Shelled Walnuts", "Premium Pistachios", "Raw Pecans", "Macadamia Nuts", "Brazil Nuts", "Hazelnuts", "Pine Nuts", "Smoked Almonds", "Honey Glazed Cashews", "Spicy Cashews", "Candied Walnuts", "Saffron Pistachios", "Caramel Pecans", "Roasted Macadamia", "Chocolate Brazil Nuts", "Roasted Hazelnuts", "Premium Pine Nuts", "Almond Flakes", "Cashew Splits", "Walnut Halves", "Pistachio Kernels", "Mixed Nuts", "Trail Mix Nuts", "BBQ Almonds", "Pepper Cashews", "Cinnamon Walnuts", "Jalapeno Pistachios", "Luxury Nut Assortment"];
nutNames.forEach((title) => {
  const price = generatePrice(900, 3500);
  products.push({
    id: idCounter++,
    title,
    price,
    primaryImage: getImageForTitle(title, 'Nuts'),
    secondaryImage: getImageForTitle(title, 'Nuts'),
    hasOptions: true,
    category: 'Nuts',
    isSoldOut: Math.random() > 0.9
  });
});

// Dry Fruits
const dryFruitNames = ["Premium Dry Figs", "Golden Raisins", "Black Raisins", "Dried Apricots", "Dried Cranberries", "Dried Blueberries", "Dried Strawberries", "Dried Pineapple Rings", "Dried Papaya Chunks", "Dried Apples"];
dryFruitNames.forEach((title) => {
  const price = generatePrice(500, 2000);
  products.push({
    id: idCounter++,
    title,
    price,
    primaryImage: getImageForTitle(title, 'Dry Fruits'),
    secondaryImage: getImageForTitle(title, 'Dry Fruits'),
    hasOptions: true,
    category: 'Dry Fruits'
  });
});

// Spices
products.push({
  id: idCounter++,
  title: "Premium Assorted Spices Box",
  price: 1500,
  primaryImage: '/assorted_spices_1778467652235.png',
  secondaryImage: '/assorted_spices_1778467652235.png',
  hasOptions: true,
  category: 'Spices'
});

// Gifts
const giftNames = [
  "Golden Dry Fruit Gift Box", 
  "Sri Gayathri Traders Signature Box", 
  "Luxury Golden Nut Assortment", 
  "Premium Festive Gift Hamper", 
  "Royal Golden Date Collection",
  "Elegant Dry Fruit Platter Box"
];
giftNames.forEach((title) => {
  const price = generatePrice(2500, 8000);
  products.push({
    id: idCounter++,
    title,
    price,
    primaryImage: getImageForTitle(title, 'Gifts'),
    secondaryImage: getImageForTitle(title, 'Gifts'),
    hasOptions: true,
    category: 'Gifts'
  });
});
