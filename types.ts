export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  isNew?: boolean;
  discount?: number; // percentage
  category: string;
  colors?: string[];
  description?: string;
}

export interface CartItem extends Product {
  quantity: number;
  selectedColor?: string;
  selectedSize?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: any; // Lucide icon component
}
