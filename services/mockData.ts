import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    originalPrice: 160,
    rating: 5,
    reviews: 88,
    image: "https://picsum.photos/id/1/400/400",
    discount: 40,
    category: "Gaming",
    description: "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
    colors: ["#000000", "#DB4444"]
  },
  {
    id: 2,
    name: "AK-900 Wired Keyboard",
    price: 960,
    originalPrice: 1160,
    rating: 4,
    reviews: 75,
    image: "https://picsum.photos/id/2/400/400",
    discount: 35,
    category: "Gaming"
  },
  {
    id: 3,
    name: "IPS LCD Gaming Monitor",
    price: 370,
    originalPrice: 400,
    rating: 5,
    reviews: 99,
    image: "https://picsum.photos/id/3/400/400",
    discount: 30,
    category: "Gaming"
  },
  {
    id: 4,
    name: "S-Series Comfort Chair",
    price: 375,
    originalPrice: 400,
    rating: 4.5,
    reviews: 99,
    image: "https://picsum.photos/id/4/400/400",
    discount: 25,
    category: "Furniture"
  },
  {
    id: 5,
    name: "The North Coat",
    price: 260,
    originalPrice: 360,
    rating: 5,
    reviews: 65,
    image: "https://picsum.photos/id/5/400/400",
    category: "Clothing"
  },
  {
    id: 6,
    name: "Gucci Duffle Bag",
    price: 960,
    originalPrice: 1160,
    rating: 4.5,
    reviews: 65,
    image: "https://picsum.photos/id/6/400/400",
    category: "Bags"
  },
  {
    id: 7,
    name: "RGB Liquid CPU Cooler",
    price: 160,
    originalPrice: 170,
    rating: 4.5,
    reviews: 65,
    image: "https://picsum.photos/id/7/400/400",
    category: "Electronics"
  },
  {
    id: 8,
    name: "Small BookSelf",
    price: 360,
    originalPrice: 0,
    rating: 5,
    reviews: 65,
    image: "https://picsum.photos/id/8/400/400",
    category: "Furniture"
  },
  {
    id: 9,
    name: "ASUS FHD Gaming Laptop",
    price: 700,
    originalPrice: 0,
    rating: 5,
    reviews: 325,
    image: "https://picsum.photos/id/9/400/400",
    category: "Computers"
  },
  {
    id: 10,
    name: "Canon EOS DSLR Camera",
    price: 360,
    originalPrice: 0,
    rating: 4,
    reviews: 95,
    image: "https://picsum.photos/id/10/400/400",
    category: "Camera"
  },
  {
    id: 11,
    name: "Jr. Zoom Soccer Cleats",
    price: 1160,
    originalPrice: 0,
    rating: 5,
    reviews: 35,
    image: "https://picsum.photos/id/11/400/400",
    category: "Sports",
    colors: ["#FFFF00", "#DB4444"]
  },
  {
    id: 12,
    name: "Quilted Satin Jacket",
    price: 660,
    originalPrice: 0,
    rating: 4.5,
    reviews: 55,
    image: "https://picsum.photos/id/12/400/400",
    category: "Clothing",
    colors: ["#000000", "#DB4444"]
  }
];

export const getFlashSaleProducts = () => products.slice(0, 4);
export const getBestSellingProducts = () => products.slice(4, 8);
export const getExploreProducts = () => products.slice(0, 8);
export const getProductById = (id: number) => products.find(p => p.id === id);
