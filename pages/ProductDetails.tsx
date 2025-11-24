import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../services/mockData';
import { useShop } from '../context/ShopContext';
import { Star, Heart, Truck, RefreshCw, Minus, Plus } from 'lucide-react';

export const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const product = getProductById(Number(id));
  const { addToCart, toggleWishlist, isInWishlist } = useShop();
  const [qty, setQty] = useState(1);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  useEffect(() => {
    if (product?.colors?.length) setSelectedColor(product.colors[0]);
    // Default sizes for mock
    setSelectedSize('M');
  }, [product]);

  if (!product) return <div className="p-20 text-center">Product Not Found</div>;

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="flex text-sm text-gray-500 mb-10 gap-2">
         <span>Account</span> / <span>{product.category}</span> / <span className="text-black font-medium">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        
        {/* Images */}
        <div className="flex gap-4 col-span-1 lg:col-span-2">
           <div className="flex flex-col gap-4">
              {[1,2,3,4].map(i => (
                 <div key={i} className="bg-[#F5F5F5] p-2 w-32 h-32 flex items-center justify-center rounded cursor-pointer hover:border border-primary">
                    <img src={product.image} className="w-full h-full object-contain mix-blend-multiply" />
                 </div>
              ))}
           </div>
           <div className="flex-1 bg-[#F5F5F5] h-[500px] flex items-center justify-center rounded">
              <img src={product.image} className="max-w-full max-h-full object-contain mix-blend-multiply p-8" />
           </div>
        </div>

        {/* Details */}
        <div className="flex flex-col gap-6">
           <h1 className="text-2xl font-bold tracking-wide">{product.name}</h1>
           
           <div className="flex items-center gap-4 text-sm">
              <div className="flex text-yellow-400">
                 {Array(5).fill(0).map((_, i) => <Star key={i} className={`w-4 h-4 ${i < product.rating ? 'fill-current' : 'text-gray-300'}`} />)}
              </div>
              <span className="text-gray-500">({product.reviews} Reviews)</span>
              <span className="text-green-500">| In Stock</span>
           </div>

           <div className="text-2xl font-medium">${product.price}.00</div>
           
           <p className="text-sm text-gray-600 leading-relaxed border-b border-gray-300 pb-6">
             {product.description || "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive."}
           </p>

           <div className="flex gap-6 items-center">
              <span className="text-lg">Colours:</span>
              <div className="flex gap-2">
                {product.colors ? product.colors.map(c => (
                   <button 
                     key={c} 
                     onClick={() => setSelectedColor(c)}
                     className={`w-5 h-5 rounded-full border border-gray-300 ${selectedColor === c ? 'ring-2 ring-primary ring-offset-2' : ''}`} 
                     style={{ backgroundColor: c }}
                   />
                )) : (
                    <>
                    <div className="w-5 h-5 rounded-full bg-[#A0BCE0]"></div>
                    <div className="w-5 h-5 rounded-full bg-[#E07575]"></div>
                    </>
                )}
              </div>
           </div>

           <div className="flex gap-6 items-center">
              <span className="text-lg">Size:</span>
              <div className="flex gap-2">
                 {['XS', 'S', 'M', 'L', 'XL'].map(s => (
                    <button 
                        key={s} 
                        onClick={() => setSelectedSize(s)}
                        className={`w-8 h-8 rounded border text-sm font-medium transition-colors ${selectedSize === s ? 'bg-primary text-white border-primary' : 'border-gray-300 hover:border-primary'}`}
                    >
                        {s}
                    </button>
                 ))}
              </div>
           </div>

           <div className="flex items-center gap-4 pt-4">
              <div className="flex items-center border border-gray-300 rounded overflow-hidden">
                 <button className="px-3 py-2 hover:bg-primary hover:text-white transition-colors" onClick={() => qty > 1 && setQty(qty - 1)}><Minus className="w-4 h-4" /></button>
                 <span className="px-4 font-medium w-12 text-center">{qty}</span>
                 <button className="px-3 py-2 hover:bg-primary hover:text-white transition-colors" onClick={() => setQty(qty + 1)}><Plus className="w-4 h-4" /></button>
              </div>
              
              <button 
                onClick={() => addToCart(product, qty, selectedColor, selectedSize)}
                className="flex-1 bg-primary text-white py-2.5 rounded hover:bg-red-600 font-medium transition-colors"
              >
                Buy Now
              </button>
              
              <button 
                onClick={() => toggleWishlist(product.id)}
                className={`p-2 border border-gray-300 rounded hover:border-primary transition-colors ${isInWishlist(product.id) ? 'bg-primary text-white border-primary' : ''}`}
              >
                <Heart className="w-6 h-6" />
              </button>
           </div>

           <div className="border border-gray-300 rounded mt-4 divide-y divide-gray-300">
              <div className="flex items-center gap-4 p-4">
                 <Truck className="w-8 h-8" />
                 <div>
                    <h5 className="font-medium">Free Delivery</h5>
                    <p className="text-xs text-gray-600 underline">Enter your postal code for Delivery Availability</p>
                 </div>
              </div>
              <div className="flex items-center gap-4 p-4">
                 <RefreshCw className="w-8 h-8" />
                 <div>
                    <h5 className="font-medium">Return Delivery</h5>
                    <p className="text-xs text-gray-600">Free 30 Days Delivery Returns. <span className="underline">Details</span></p>
                 </div>
              </div>
           </div>
        </div>
      </div>

      {/* Related Items (Simple Mock) */}
      <div className="mt-20">
         <div className="flex items-center gap-4 mb-8">
            <div className="w-5 h-10 bg-primary rounded-sm"></div>
            <span className="text-primary font-bold text-xl">Related Item</span>
         </div>
         {/* Just re-using mock data */}
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {product.id > 1 ? null : <div className="text-gray-400">Loading related items...</div>}
         </div>
      </div>

    </div>
  );
};
