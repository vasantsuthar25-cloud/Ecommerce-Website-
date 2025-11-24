import React from 'react';
import { useShop } from '../context/ShopContext';
import { getProductById } from '../services/mockData';
import { ProductCard } from '../components/ProductCard';
import { Trash2 } from 'lucide-react';
import { Product } from '../types';

export const Wishlist: React.FC = () => {
  const { wishlist, toggleWishlist, addToCart } = useShop();
  
  const wishlistProducts = wishlist.map(id => getProductById(id)).filter((p): p is Product => !!p);

  return (
    <div className="container mx-auto px-4 py-20">
       <div className="flex justify-between items-center mb-10">
          <h2 className="text-xl font-medium">Wishlist ({wishlist.length})</h2>
          <button 
            onClick={() => wishlistProducts.forEach(p => addToCart(p))}
            className="border border-gray-300 px-8 py-3 rounded font-medium hover:bg-gray-50 transition-colors"
          >
            Move All To Bag
          </button>
       </div>

       {wishlist.length === 0 ? (
           <div className="py-20 text-center text-gray-500">Your wishlist is empty.</div>
       ) : (
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-20">
              {wishlistProducts.map(p => (
                 <div key={p.id} className="relative group">
                     {/* Overlay trash icon specifically for wishlist view */}
                     <button 
                        onClick={() => toggleWishlist(p.id)}
                        className="absolute top-3 right-3 z-10 bg-white p-1.5 rounded-full shadow hover:bg-primary hover:text-white transition-colors"
                     >
                        <Trash2 className="w-5 h-5" />
                     </button>
                     <ProductCard product={p} />
                 </div>
              ))}
           </div>
       )}
       
       <div className="flex items-center gap-4 mb-10">
          <div className="w-5 h-10 bg-primary rounded-sm"></div>
          <span className="text-xl font-medium">Just For You</span>
          <button className="ml-auto border border-gray-300 px-8 py-3 rounded font-medium hover:bg-gray-50 transition-colors">See All</button>
       </div>
       
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
           {/* Placeholder for 'Just For You' - reusing products 9-12 */}
           <ProductCard product={getProductById(9)!} />
           <ProductCard product={getProductById(3)!} />
           <ProductCard product={getProductById(1)!} />
           <ProductCard product={getProductById(2)!} />
       </div>
    </div>
  );
};
