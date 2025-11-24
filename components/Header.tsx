import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Heart, ShoppingCart, User, Menu, X } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const Header: React.FC = () => {
  const { cart, wishlist } = useShop();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-black text-white text-xs sm:text-sm py-3 px-4 text-center">
        <div className="container mx-auto flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-2">
          <p className="flex-1 text-center">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! 
            <span className="font-bold underline ml-2 cursor-pointer">ShopNow</span>
          </p>
          <div className="hidden sm:block">
            <select className="bg-black text-white border-none outline-none cursor-pointer">
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="border-b border-gray-200 sticky top-0 bg-white z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold tracking-wide">Exclusive</Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="hover:underline underline-offset-4 decoration-black">Home</Link>
            <Link to="/contact" className="hover:underline underline-offset-4 decoration-black">Contact</Link>
            <Link to="/about" className="hover:underline underline-offset-4 decoration-black">About</Link>
            <Link to="/signup" className="hover:underline underline-offset-4 decoration-black">Sign Up</Link>
          </nav>

          {/* Search & Icons */}
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="hidden sm:flex items-center bg-secondary rounded py-2 px-4 w-60">
              <input 
                type="text" 
                placeholder="What are you looking for?" 
                className="bg-transparent text-sm outline-none w-full"
              />
              <Search className="w-5 h-5 text-gray-500" />
            </div>
            
            <div className="flex items-center gap-4">
              <button onClick={() => navigate('/wishlist')} className="relative">
                <Heart className="w-6 h-6" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </button>
              <button onClick={() => navigate('/cart')} className="relative">
                <ShoppingCart className="w-6 h-6" />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </button>
              <Link to="/account" className="hidden sm:block hover:bg-primary hover:text-white rounded-full p-1 transition-colors">
                <User className="w-6 h-6" />
              </Link>
              <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                 {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b py-4 px-4 flex flex-col gap-4">
           <Link to="/" className="block py-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
           <Link to="/contact" className="block py-2" onClick={() => setIsMenuOpen(false)}>Contact</Link>
           <Link to="/about" className="block py-2" onClick={() => setIsMenuOpen(false)}>About</Link>
           <Link to="/signup" className="block py-2" onClick={() => setIsMenuOpen(false)}>Sign Up</Link>
           <div className="flex items-center bg-secondary rounded py-2 px-3">
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-transparent text-sm outline-none w-full"
              />
              <Search className="w-5 h-5 text-gray-500" />
            </div>
        </div>
      )}
    </header>
  );
};
