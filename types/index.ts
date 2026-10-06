export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  brand: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  specifications: {
    [key: string]: string;
  };
  features: string[];
  images: string[];
  discount?: number;
  originalPrice?: number;
  colors?: string[];
  sizes?: string[];
}

export interface CartItem extends Product {
  quantity: number;
  selectedColor?: string;
  selectedSize?: string;
}

export interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, options?: { color?: string; size?: string }) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

export interface FilterOptions {
  category: string;
  priceRange: [number, number];
  brand: string;
  rating: number;
  inStock: boolean;
}
