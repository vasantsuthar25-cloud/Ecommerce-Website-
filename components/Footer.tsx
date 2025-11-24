import React from 'react';
import { Send, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
        
        {/* Subscribe */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Exclusive</h3>
          <p className="font-medium">Subscribe</p>
          <p className="text-sm opacity-80">Get 10% off your first order</p>
          <div className="flex items-center border border-white rounded py-2 px-3 max-w-[220px]">
            <input type="email" placeholder="Enter your email" className="bg-transparent outline-none text-sm w-full placeholder-gray-500" />
            <Send className="w-5 h-5" />
          </div>
        </div>

        {/* Support */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Support</h3>
          <p className="text-sm opacity-80 max-w-[180px]">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p className="text-sm opacity-80">exclusive@gmail.com</p>
          <p className="text-sm opacity-80">+88015-88888-9999</p>
        </div>

        {/* Account */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Account</h3>
          <ul className="space-y-2 text-sm opacity-80">
            <li className="cursor-pointer hover:text-primary">My Account</li>
            <li className="cursor-pointer hover:text-primary">Login / Register</li>
            <li className="cursor-pointer hover:text-primary">Cart</li>
            <li className="cursor-pointer hover:text-primary">Wishlist</li>
            <li className="cursor-pointer hover:text-primary">Shop</li>
          </ul>
        </div>

        {/* Quick Link */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Quick Link</h3>
          <ul className="space-y-2 text-sm opacity-80">
            <li className="cursor-pointer hover:text-primary">Privacy Policy</li>
            <li className="cursor-pointer hover:text-primary">Terms Of Use</li>
            <li className="cursor-pointer hover:text-primary">FAQ</li>
            <li className="cursor-pointer hover:text-primary">Contact</li>
          </ul>
        </div>

        {/* App Download */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Download App</h3>
          <p className="text-xs opacity-70">Save $3 with App New User Only</p>
          <div className="flex gap-2">
            <div className="bg-white p-1 w-20 h-20 flex items-center justify-center">
                {/* QR Code Placeholder */}
                <div className="w-full h-full bg-black"></div> 
            </div>
            <div className="flex flex-col gap-2 justify-center">
                <div className="w-28 h-8 bg-white/10 border border-white/40 rounded flex items-center justify-center text-xs">Google Play</div>
                <div className="w-28 h-8 bg-white/10 border border-white/40 rounded flex items-center justify-center text-xs">App Store</div>
            </div>
          </div>
          <div className="flex gap-6 pt-2">
            <Facebook className="w-5 h-5 cursor-pointer hover:text-primary" />
            <Twitter className="w-5 h-5 cursor-pointer hover:text-primary" />
            <Instagram className="w-5 h-5 cursor-pointer hover:text-primary" />
            <Linkedin className="w-5 h-5 cursor-pointer hover:text-primary" />
          </div>
        </div>

      </div>
      
      <div className="border-t border-white/10 pt-4 text-center text-white/40 text-sm">
        &copy; Copyright Rimel 2022. All right reserved
      </div>
    </footer>
  );
};
