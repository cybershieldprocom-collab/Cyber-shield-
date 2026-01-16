
import { Laptop, Category, FAQItem } from './types';

export const LAPTOPS: Laptop[] = [
  {
    id: '1',
    name: 'MacBook Air M3',
    brand: 'Apple',
    price: 1099,
    image: 'https://images.unsplash.com/photo-1611186871348-b1ec696e52c9?auto=format&fit=crop&q=80&w=600',
    category: [Category.STUDENT, Category.ULTRABOOK],
    specs: {
      cpu: 'Apple M3 8-Core',
      ram: '8GB/16GB/24GB',
      storage: '256GB/512GB/1TB SSD',
      display: '13.6-inch Liquid Retina'
    },
    pros: ['Long-lasting battery life (18h)', 'Ultra-thin and light design', 'High-resolution Liquid Retina display'],
    link: '#',
    featured: true
  },
  {
    id: '2',
    name: 'Dell XPS 15 9530',
    brand: 'Dell',
    price: 1599,
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=600',
    category: [Category.CREATOR, Category.ULTRABOOK],
    specs: {
      cpu: 'Intel Core i9-13900H',
      ram: '32GB DDR5',
      storage: '1TB NVMe SSD',
      gpu: 'RTX 4060',
      display: '15.6-inch OLED 3.5K Touch'
    },
    pros: ['Top-tier performance for creators', 'Stunning OLED infinity-edge display', 'Premium build quality'],
    link: '#',
    featured: true
  },
  {
    id: '3',
    name: 'ThinkPad X1 Carbon Gen 12',
    brand: 'Lenovo',
    price: 1450,
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=600',
    category: [Category.HACKER, Category.ULTRABOOK],
    specs: {
      cpu: 'Intel Core Ultra 7 155H',
      ram: '32GB LPDDR5x',
      storage: '1TB SSD Gen4',
      display: '14-inch 2.8K OLED'
    },
    pros: ['Best-in-class keyboard', 'Excellent Linux compatibility', 'Military-grade durability'],
    link: '#',
    featured: true
  },
  {
    id: '4',
    name: 'ASUS ROG Zephyrus G14',
    brand: 'ASUS',
    price: 1399,
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=600',
    category: [Category.GAMING, Category.CREATOR],
    specs: {
      cpu: 'AMD Ryzen 9 8945HS',
      ram: '16GB/32GB DDR5',
      storage: '1TB SSD',
      gpu: 'RTX 4070',
      display: '14-inch OLED 120Hz'
    },
    pros: ['Powerful gaming performance', 'Portable and sleek form factor', 'Minimalist aesthetic for work'],
    link: '#',
    featured: true
  },
  {
    id: '5',
    name: 'HP Pavilion 15',
    brand: 'HP',
    price: 599,
    image: 'https://images.unsplash.com/photo-1544731612-de7f96afe55f?auto=format&fit=crop&q=80&w=600',
    category: [Category.STUDENT],
    specs: {
      cpu: 'Intel Core i5-1335U',
      ram: '8GB/16GB',
      storage: '512GB SSD',
      display: '15.6-inch FHD IPS'
    },
    pros: ['Highly affordable for students', 'Large, comfortable display', 'Full keyboard with Numpad'],
    link: '#',
    featured: false
  },
  {
    id: '6',
    name: 'Framework Laptop 13',
    brand: 'Framework',
    price: 1049,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=600',
    category: [Category.HACKER, Category.ULTRABOOK],
    specs: {
      cpu: 'Intel Core Ultra 5',
      ram: '16GB (Upgradable)',
      storage: '512GB (Upgradable)',
      display: '13.5-inch 2256x1504'
    },
    pros: ['Fully modular and repairable', 'Customizable port selection', 'Physical privacy switches'],
    link: '#',
    featured: false
  },
  {
    id: '7',
    name: 'Acer Swift Go 14',
    brand: 'Acer',
    price: 749,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=600',
    category: [Category.STUDENT, Category.ULTRABOOK],
    specs: {
      cpu: 'Intel Core i7-13700H',
      ram: '16GB LPDDR5',
      storage: '512GB SSD',
      display: '14-inch OLED 2.8K'
    },
    pros: ['Great value OLED display', 'Very lightweight (1.25kg)', 'Extensive port options'],
    link: '#',
    featured: false
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "How do I choose the best laptop for students?",
    answer: "Students typically need a laptop with a strong battery, lightweight design, and an affordable price. The MacBook Air or Dell Inspiron are excellent choices."
  },
  {
    question: "Are there laptops specifically optimized for Linux?",
    answer: "Yes, ThinkPads and Dell XPS Developer Editions work exceptionally well with Linux (such as Kali Linux). The Framework Laptop is also a top contender."
  },
  {
    question: "How much RAM do I need today?",
    answer: "At least 8GB is required for basic tasks, but 16GB is highly recommended for Creators or Ethical Hackers to run VMs and demanding software."
  },
  {
    question: "Do you sell laptops directly?",
    answer: "No, Cyber-Shield is a review and comparison platform. We provide links to trusted retailers where you can make your purchase."
  }
];
