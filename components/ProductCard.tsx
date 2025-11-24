import React from 'react';
import { Heart, Eye, Star } from 'lucide-react';
import { Product } from '../types';
import { useShop } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, toggleWishlist, isInWishlist } = useShop();
  const navigate = useNavigate();
  const isWishlisted = isInWishlist(product.id);

  // Render stars
  const stars = Array(5).fill(0).map((_, i) => (
    <Star 
      key={i} 
      className={`w-4 h-4 ${i < Math.round(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
    />
  ));

  return (
    <div className="group flex flex-col gap-3 relative">
      <div className="relative bg-[#F5F5F5] rounded p-4 h-64 flex items-center justify-center overflow-hidden">
        
        {/* Badges */}
        {product.discount && (
          <span className="absolute top-3 left-3 bg-primary text-white text-xs px-3 py-1 rounded">
            -{product.discount}%
          </span>
        )}
        {product.isNew && (
          <span className="absolute top-3 left-3 bg-[#0F6] text-white text-xs px-3 py-1 rounded">
            NEW
          </span>
        )}

        {/* Action Icons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button 
            onClick={() => toggleWishlist(product.id)}
            className={`p-1.5 rounded-full bg-white shadow-sm hover:bg-primary hover:text-white transition-colors ${isWishlisted ? 'text-primary' : ''}`}
          >
            <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
          </button>
          <button 
            onClick={() => navigate(`/product/${product.id}`)}
            className="p-1.5 rounded-full bg-white shadow-sm hover:bg-primary hover:text-white transition-colors"
          >
            <Eye className="w-5 h-5" />
          </button>
        </div>

        <img 
          src={product.image} 
          alt={product.name} 
          className="max-h-48 max-w-full object-contain mix-blend-multiply cursor-pointer transition-transform duration-300 group-hover:scale-105"
          onClick={() => navigate(`/product/${product.id}`)}
        />

        {/* Add to Cart - Slide up on hover */}
        <button 
          onClick={() => addToCart(product)}
          className="absolute bottom-0 left-0 w-full bg-black text-white py-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300 font-medium text-sm"
        >
          Add To Cart
        </button>
      </div>

      <div className="flex flex-col gap-1">
        <h3 
          className="font-medium truncate cursor-pointer hover:text-primary transition-colors"
          onClick={() => navigate(`/product/${product.id}`)}
        >
          {product.name}
        </h3>
        <div className="flex gap-3 text-sm font-medium">
          <span className="text-primary">${product.price}</span>
          {product.originalPrice && (
            <span className="text-gray-500 line-through decoration-1">${product.originalPrice}</span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <div className="flex">{stars}</div>
          <span className="text-gray-500 text-xs font-semibold">({product.reviews})</span>
        </div>
        {product.colors && (
            <div className="flex gap-1 mt-1">
                {product.colors.map((c, i) => (
                    <div key={i} className="w-4 h-4 rounded-full border border-gray-300" style={{ backgroundColor: c }}></div>
                ))}
            </div>
        )}
      </div>
    </div>
  );
};
