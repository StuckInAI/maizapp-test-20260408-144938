export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  reviewCount: number;
  priceRange: string;
  deliveryTime: string;
  deliveryFee: string;
  image: string;
  tags: string[];
  address: string;
  phone: string;
  openHours: string;
  description: string;
  featured?: boolean;
  trending?: boolean;
  mostReviewed?: boolean;
  dinner?: boolean;
  brunch?: boolean;
  discount?: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  popular?: boolean;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export const restaurants: Restaurant[] = [
  {
    id: '1',
    name: 'La Piazza',
    cuisine: 'Italian',
    rating: 4.8,
    reviewCount: 2340,
    priceRange: '$$$',
    deliveryTime: '25-35 min',
    deliveryFee: '$2.99',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80',
    tags: ['Pizza', 'Pasta', 'Wine'],
    address: '123 Main Street, Downtown',
    phone: '+1 (555) 123-4567',
    openHours: 'Mon-Sun: 11:00 AM - 11:00 PM',
    description: 'Authentic Italian cuisine with wood-fired pizzas, homemade pasta, and an extensive wine selection in a warm, welcoming atmosphere.',
    featured: true,
    trending: true,
    dinner: true,
  },
  {
    id: '2',
    name: 'Sakura Garden',
    cuisine: 'Japanese',
    rating: 4.7,
    reviewCount: 1890,
    priceRange: '$$$',
    deliveryTime: '30-45 min',
    deliveryFee: '$3.99',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&q=80',
    tags: ['Sushi', 'Ramen', 'Sake'],
    address: '456 Oak Avenue, Midtown',
    phone: '+1 (555) 234-5678',
    openHours: 'Mon-Sun: 12:00 PM - 10:00 PM',
    description: 'Experience the finest Japanese cuisine with fresh sushi, authentic ramen, and traditional sake in an elegant setting.',
    featured: true,
    mostReviewed: true,
    dinner: true,
    discount: '20% OFF',
  },
  {
    id: '3',
    name: 'The Burger Lab',
    cuisine: 'American',
    rating: 4.6,
    reviewCount: 3120,
    priceRange: '$$',
    deliveryTime: '20-30 min',
    deliveryFee: '$1.99',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80',
    tags: ['Burgers', 'Fries', 'Shakes'],
    address: '789 Elm Street, Uptown',
    phone: '+1 (555) 345-6789',
    openHours: 'Mon-Sun: 10:00 AM - 12:00 AM',
    description: 'Craft burgers made with premium ingredients, gourmet toppings, and secret sauces that will leave you craving more.',
    trending: true,
    mostReviewed: true,
    discount: '15% OFF',
  },
  {
    id: '4',
    name: 'Spice Route',
    cuisine: 'Indian',
    rating: 4.9,
    reviewCount: 1560,
    priceRange: '$$',
    deliveryTime: '35-50 min',
    deliveryFee: '$2.49',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80',
    tags: ['Curry', 'Tandoor', 'Biryani'],
    address: '321 Spice Lane, East Side',
    phone: '+1 (555) 456-7890',
    openHours: 'Mon-Sun: 11:30 AM - 10:30 PM',
    description: 'Journey through the vibrant flavors of India with our expertly crafted curries, tandoori specialties, and aromatic biryanis.',
    featured: true,
    dinner: true,
  },
  {
    id: '5',
    name: 'Morning Glory',
    cuisine: 'Cafe & Brunch',
    rating: 4.7,
    reviewCount: 2100,
    priceRange: '$$',
    deliveryTime: '15-25 min',
    deliveryFee: '$1.49',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',
    tags: ['Brunch', 'Coffee', 'Eggs Benedict'],
    address: '654 Sunrise Blvd, West End',
    phone: '+1 (555) 567-8901',
    openHours: 'Mon-Fri: 7:00 AM - 3:00 PM, Sat-Sun: 8:00 AM - 4:00 PM',
    description: 'Start your day right with our wholesome brunch offerings, artisanal coffee, and freshly baked goods in a cozy atmosphere.',
    brunch: true,
    trending: true,
    discount: '10% OFF',
  },
  {
    id: '6',
    name: 'Taco Fiesta',
    cuisine: 'Mexican',
    rating: 4.5,
    reviewCount: 1780,
    priceRange: '$',
    deliveryTime: '20-35 min',
    deliveryFee: '$1.99',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80',
    tags: ['Tacos', 'Burritos', 'Guacamole'],
    address: '987 Fiesta Street, South Side',
    phone: '+1 (555) 678-9012',
    openHours: 'Mon-Sun: 11:00 AM - 11:00 PM',
    description: 'Authentic Mexican street food with handcrafted tacos, burritos, and fresh guacamole made from traditional recipes.',
    brunch: true,
    mostReviewed: true,
  },
];

export const menuItems: MenuItem[] = [
  // Pizza
  { id: 'm1', name: 'Margherita Pizza', description: 'Fresh tomatoes, mozzarella, basil, olive oil', price: 18.99, image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80', category: 'Pizza', popular: true },
  { id: 'm2', name: 'Pepperoni Pizza', description: 'Classic pepperoni, mozzarella, tomato sauce', price: 21.99, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80', category: 'Pizza', popular: true },
  { id: 'm3', name: 'BBQ Chicken Pizza', description: 'Grilled chicken, BBQ sauce, red onions, cilantro', price: 23.99, image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80', category: 'Pizza' },
  { id: 'm4', name: 'Quattro Stagioni', description: 'Ham, mushrooms, artichokes, olives, tomato', price: 24.99, image: 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=400&q=80', category: 'Pizza' },
  // Appetizers
  { id: 'm5', name: 'Bruschetta', description: 'Toasted bread, tomatoes, garlic, fresh basil', price: 9.99, image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&q=80', category: 'Appetizers', popular: true },
  { id: 'm6', name: 'Calamari Fritti', description: 'Crispy fried calamari with marinara sauce', price: 13.99, image: 'https://images.unsplash.com/photo-1599487489036-2a1b16acf5ef?w=400&q=80', category: 'Appetizers' },
  { id: 'm7', name: 'Caprese Salad', description: 'Fresh mozzarella, tomatoes, basil, balsamic', price: 12.99, image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=400&q=80', category: 'Appetizers' },
  // Pasta
  { id: 'm8', name: 'Spaghetti Carbonara', description: 'Eggs, pecorino, guanciale, black pepper', price: 19.99, image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&q=80', category: 'Pasta', popular: true },
  { id: 'm9', name: 'Penne Arrabbiata', description: 'Spicy tomato sauce, garlic, chili, parsley', price: 17.99, image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&q=80', category: 'Pasta' },
  { id: 'm10', name: 'Fettuccine Alfredo', description: 'Cream, parmesan, butter, garlic', price: 18.99, image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=400&q=80', category: 'Pasta' },
  // Beverages
  { id: 'm11', name: 'San Pellegrino', description: 'Sparkling mineral water 500ml', price: 4.99, image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&q=80', category: 'Beverages' },
  { id: 'm12', name: 'Italian Lemonade', description: 'Fresh-squeezed lemon, mint, soda water', price: 6.99, image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&q=80', category: 'Beverages', popular: true },
  { id: 'm13', name: 'House Red Wine', description: 'Chianti Classico, glass pour', price: 11.99, image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&q=80', category: 'Beverages' },
  // Desserts
  { id: 'm14', name: 'Tiramisu', description: 'Classic Italian dessert with mascarpone', price: 10.99, image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80', category: 'Desserts', popular: true },
  { id: 'm15', name: 'Panna Cotta', description: 'Vanilla cream with berry coulis', price: 9.99, image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80', category: 'Desserts' },
];

export const menuCategories = ['All', 'Pizza', 'Appetizers', 'Pasta', 'Beverages', 'Desserts'];

export const timeSlots = [
  '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM',
  '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM'
];
