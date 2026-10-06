import { Product } from '@/types';

export const products: Product[] = [
  {
    id: 1,
    name: 'Dell XPS 15 Laptop',
    price: 124999,
    originalPrice: 149999,
    discount: 17,
    description: 'Premium 15.6-inch laptop with Intel Core i7 processor, perfect for professionals and content creators.',
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&q=80',
    images: [
      'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&q=80',
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80',
      'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&q=80'
    ],
    category: 'Laptops',
    brand: 'Dell',
    rating: 4.7,
    reviews: 2840,
    inStock: true,
    specifications: {
      'Processor': 'Intel Core i7-12700H (12th Gen)',
      'RAM': '16GB DDR5',
      'Storage': '512GB NVMe SSD',
      'Display': '15.6" FHD (1920x1080) IPS',
      'Graphics': 'NVIDIA GeForce RTX 3050 4GB',
      'Battery': 'Up to 10 hours',
      'Weight': '1.86 kg',
      'OS': 'Windows 11 Home'
    },
    features: [
      'Thin and light design',
      'Backlit keyboard',
      'Fingerprint reader',
      'Thunderbolt 4 ports',
      'Premium build quality'
    ],
    colors: ['Silver', 'Black']
  },
  {
    id: 2,
    name: 'HP Pavilion Gaming Laptop',
    price: 79999,
    originalPrice: 94999,
    discount: 16,
    description: 'Powerful gaming laptop with AMD Ryzen 7 processor and dedicated graphics for immersive gaming experience.',
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&q=80',
    images: [
      'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&q=80',
      'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&q=80'
    ],
    category: 'Laptops',
    brand: 'HP',
    rating: 4.5,
    reviews: 1523,
    inStock: true,
    specifications: {
      'Processor': 'AMD Ryzen 7 5800H',
      'RAM': '16GB DDR4',
      'Storage': '512GB SSD + 1TB HDD',
      'Display': '15.6" FHD 144Hz',
      'Graphics': 'NVIDIA GTX 1650 4GB',
      'Battery': '6-8 hours',
      'Weight': '2.3 kg',
      'OS': 'Windows 11 Home'
    },
    features: [
      '144Hz refresh rate display',
      'RGB backlit keyboard',
      'Dual storage',
      'Enhanced cooling system',
      'Audio by B&O'
    ],
    colors: ['Black', 'Green']
  },
  {
    id: 3,
    name: 'Apple MacBook Air M2',
    price: 114900,
    originalPrice: 119900,
    discount: 4,
    description: 'Ultra-portable MacBook Air with revolutionary M2 chip, stunning Liquid Retina display, and all-day battery life.',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80',
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80',
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&q=80'
    ],
    category: 'Laptops',
    brand: 'Apple',
    rating: 4.9,
    reviews: 4521,
    inStock: true,
    specifications: {
      'Processor': 'Apple M2 chip 8-core CPU',
      'RAM': '8GB Unified Memory',
      'Storage': '256GB SSD',
      'Display': '13.6" Liquid Retina (2560x1664)',
      'Graphics': '10-core GPU',
      'Battery': 'Up to 18 hours',
      'Weight': '1.24 kg',
      'OS': 'macOS Ventura'
    },
    features: [
      'Fanless design - Silent operation',
      'MagSafe charging',
      '1080p FaceTime HD camera',
      'Four speaker sound system',
      'Touch ID'
    ],
    colors: ['Space Grey', 'Silver', 'Starlight', 'Midnight']
  },
  {
    id: 4,
    name: 'Sony WH-1000XM5 Headphones',
    price: 29990,
    originalPrice: 34990,
    discount: 14,
    description: 'Industry-leading noise cancelling headphones with exceptional sound quality and all-day comfort.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&q=80'
    ],
    category: 'Audio',
    brand: 'Sony',
    rating: 4.8,
    reviews: 3845,
    inStock: true,
    specifications: {
      'Driver Size': '30mm',
      'Frequency Response': '4Hz - 40kHz',
      'Bluetooth': 'Version 5.2',
      'Battery Life': 'Up to 30 hours',
      'Charging': 'USB-C Quick Charge',
      'Weight': '250g',
      'Noise Cancellation': 'Yes - Advanced',
      'Microphone': 'Built-in with AI noise reduction'
    },
    features: [
      'Industry-leading noise cancellation',
      'Multipoint connection',
      'Speak-to-chat technology',
      'Adaptive Sound Control',
      'Premium carry case included'
    ],
    colors: ['Black', 'Silver']
  },
  {
    id: 5,
    name: 'Samsung Galaxy Watch 6',
    price: 31999,
    originalPrice: 36999,
    discount: 14,
    description: 'Advanced smartwatch with comprehensive health tracking, GPS, and seamless smartphone integration.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80',
      'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=500&q=80'
    ],
    category: 'Wearables',
    brand: 'Samsung',
    rating: 4.6,
    reviews: 2156,
    inStock: true,
    specifications: {
      'Display': '1.5" Super AMOLED',
      'Resolution': '480 x 480 pixels',
      'Processor': 'Exynos W930',
      'RAM': '2GB',
      'Storage': '16GB',
      'Battery': 'Up to 40 hours',
      'Water Resistance': '5ATM + IP68',
      'Connectivity': 'Bluetooth 5.3, Wi-Fi, GPS'
    },
    features: [
      'Advanced sleep tracking',
      'Body composition analysis',
      'ECG and blood pressure monitoring',
      'GPS tracking',
      'Wireless charging'
    ],
    colors: ['Black', 'Silver', 'Pink Gold'],
    sizes: ['40mm', '44mm']
  },
  {
    id: 6,
    name: 'Canon EOS R6 Mark II',
    price: 239995,
    originalPrice: 259995,
    discount: 8,
    description: 'Professional full-frame mirrorless camera with 24.2MP sensor, 40fps continuous shooting, and 6K video.',
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&q=80',
    images: [
      'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&q=80',
      'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=500&q=80'
    ],
    category: 'Cameras',
    brand: 'Canon',
    rating: 4.9,
    reviews: 892,
    inStock: true,
    specifications: {
      'Sensor': '24.2MP Full-Frame CMOS',
      'Processor': 'DIGIC X',
      'ISO Range': '100-102400',
      'Continuous Shooting': 'Up to 40fps',
      'Video': '6K RAW, 4K 60p',
      'Viewfinder': '3.69M-dot OLED EVF',
      'LCD': '3.0" Vari-angle Touchscreen',
      'Battery Life': 'Approx. 760 shots'
    },
    features: [
      'Advanced dual pixel CMOS AF II',
      'In-body image stabilization (8 stops)',
      'Weather-sealed body',
      '6K oversampled 4K video',
      'Dual card slots (SD UHS-II)'
    ],
    colors: ['Black']
  },
  {
    id: 7,
    name: 'Logitech MX Master 3S',
    price: 8995,
    originalPrice: 10995,
    discount: 18,
    description: 'Premium wireless mouse with ultra-quiet clicks, 8K DPI sensor, and multi-device connectivity.',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80',
    images: [
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80'
    ],
    category: 'Accessories',
    brand: 'Logitech',
    rating: 4.7,
    reviews: 5234,
    inStock: true,
    specifications: {
      'Sensor': '8K DPI',
      'Buttons': '7 programmable',
      'Connectivity': 'Bluetooth, USB-C Receiver',
      'Battery': 'Up to 70 days',
      'Charging': 'USB-C Quick Charge',
      'Weight': '141g',
      'Compatibility': 'Windows, macOS, Linux',
      'Scroll Wheel': 'MagSpeed Electromagnetic'
    },
    features: [
      '90% quieter clicks',
      'Multi-device (up to 3 devices)',
      'Flow cross-computer control',
      'App-specific customization',
      'Ergonomic design'
    ],
    colors: ['Black', 'Pale Grey']
  },
  {
    id: 8,
    name: 'LG 27-inch 4K Monitor',
    price: 34999,
    originalPrice: 42999,
    discount: 19,
    description: '27-inch UHD 4K IPS display with HDR10, perfect for professionals and content creators.',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80',
    images: [
      'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80'
    ],
    category: 'Monitors',
    brand: 'LG',
    rating: 4.6,
    reviews: 1876,
    inStock: true,
    specifications: {
      'Screen Size': '27 inches',
      'Resolution': '3840 x 2160 (4K UHD)',
      'Panel Type': 'IPS',
      'Refresh Rate': '60Hz',
      'Response Time': '5ms',
      'Brightness': '350 cd/m²',
      'Contrast Ratio': '1000:1',
      'Connectivity': 'HDMI 2.0, DisplayPort, USB-C'
    },
    features: [
      'HDR10 support',
      '99% sRGB color gamut',
      'AMD FreeSync',
      'Flicker-safe & Reader Mode',
      'Height adjustable stand'
    ],
    colors: ['Black']
  },
  {
    id: 9,
    name: 'Apple AirPods Pro (2nd Gen)',
    price: 24900,
    originalPrice: 26900,
    discount: 7,
    description: 'Premium wireless earbuds with active noise cancellation, spatial audio, and MagSafe charging.',
    image: 'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=500&q=80',
    images: [
      'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=500&q=80'
    ],
    category: 'Audio',
    brand: 'Apple',
    rating: 4.8,
    reviews: 6723,
    inStock: true,
    specifications: {
      'Driver': 'Custom high-excursion',
      'Chip': 'Apple H2',
      'Bluetooth': 'Version 5.3',
      'Battery (Earbuds)': 'Up to 6 hours',
      'Battery (with case)': 'Up to 30 hours',
      'Charging': 'MagSafe, Qi, Lightning',
      'Water Resistance': 'IPX4',
      'Weight': '5.3g per earbud'
    },
    features: [
      'Active Noise Cancellation',
      'Transparency mode',
      'Adaptive Audio',
      'Personalized Spatial Audio',
      'Touch controls'
    ],
    colors: ['White']
  },
  {
    id: 10,
    name: 'Samsung 55" QLED 4K TV',
    price: 64999,
    originalPrice: 84999,
    discount: 24,
    description: 'Stunning 55-inch QLED 4K TV with Quantum Processor, HDR10+, and smart features for ultimate entertainment.',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&q=80',
    images: [
      'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&q=80'
    ],
    category: 'TVs',
    brand: 'Samsung',
    rating: 4.7,
    reviews: 3421,
    inStock: true,
    specifications: {
      'Screen Size': '55 inches',
      'Resolution': '3840 x 2160 (4K UHD)',
      'Display Type': 'QLED',
      'Refresh Rate': '120Hz',
      'HDR': 'HDR10+, HLG',
      'Processor': 'Quantum Processor 4K',
      'Smart TV': 'Tizen OS',
      'Connectivity': 'HDMI 2.1 x4, USB x2, Wi-Fi 5'
    },
    features: [
      'Quantum Dot technology',
      'Object Tracking Sound Lite',
      'Gaming Hub',
      'Q-Symphony',
      'Slim design with cable management'
    ],
    colors: ['Titan Grey']
  },
  {
    id: 11,
    name: 'Lenovo ThinkPad X1 Carbon',
    price: 139999,
    originalPrice: 159999,
    discount: 13,
    description: 'Ultra-light business laptop with military-grade durability, 12th Gen Intel processor, and premium features.',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80',
    images: [
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80'
    ],
    category: 'Laptops',
    brand: 'Lenovo',
    rating: 4.7,
    reviews: 1654,
    inStock: true,
    specifications: {
      'Processor': 'Intel Core i7-1260P (12th Gen)',
      'RAM': '16GB LPDDR5',
      'Storage': '512GB PCIe SSD',
      'Display': '14" WUXGA (1920x1200) IPS',
      'Graphics': 'Intel Iris Xe',
      'Battery': 'Up to 16 hours',
      'Weight': '1.12 kg',
      'OS': 'Windows 11 Pro'
    },
    features: [
      'Carbon fiber chassis',
      'MIL-STD-810H certified',
      'Fingerprint reader',
      'Thunderbolt 4',
      'Backlit keyboard with TrackPoint'
    ],
    colors: ['Black']
  },
  {
    id: 12,
    name: 'Asus ROG Gaming Laptop',
    price: 99999,
    originalPrice: 119999,
    discount: 17,
    description: 'High-performance gaming laptop with RGB keyboard, powerful graphics, and advanced cooling system.',
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&q=80',
    images: [
      'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&q=80'
    ],
    category: 'Laptops',
    brand: 'Asus',
    rating: 4.6,
    reviews: 2134,
    inStock: true,
    specifications: {
      'Processor': 'AMD Ryzen 9 5900HX',
      'RAM': '16GB DDR4',
      'Storage': '1TB NVMe SSD',
      'Display': '15.6" FHD 165Hz',
      'Graphics': 'NVIDIA RTX 3060 6GB',
      'Battery': '8 hours',
      'Weight': '2.3 kg',
      'OS': 'Windows 11 Home'
    },
    features: [
      'Per-key RGB keyboard',
      'ROG Intelligent Cooling',
      'Dolby Atmos audio',
      'Fast charging',
      'Multiple display modes'
    ],
    colors: ['Black']
  }
];
