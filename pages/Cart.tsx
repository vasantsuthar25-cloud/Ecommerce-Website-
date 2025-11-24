import React from 'react';
import { useShop } from '../context/ShopContext';
import { Link } from 'react-router-dom';
import { X, ChevronUp, ChevronDown } from 'lucide-react';

export const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useShop();

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <h2 className="text-4xl font-bold mb-4">Your Cart is Empty</h2>
        <Link to="/" className="inline-block bg-primary text-white px-8 py-3 rounded">Return to Shop</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-20">
       <div className="flex text-sm text-gray-500 mb-10 gap-2">
         <span>Home</span> / <span className="text-black font-medium">Cart</span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px] mb-8">
          <thead className="shadow-sm">
            <tr className="text-left h-16">
              <th className="pl-8 w-1/3">Product</th>
              <th className="w-1/6">Price</th>
              <th className="w-1/6">Quantity</th>
              <th className="w-1/6 text-right pr-8">Subtotal</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
             {cart.map(item => (
                <tr key={item.id} className="h-24 group">
                   <td className="pl-8 relative">
                      <div className="flex items-center gap-4">
                         <button onClick={() => removeFromCart(item.id)} className="absolute left-0 -ml-2 text-primary hover:text-red-700 p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <X className="w-4 h-4" />
                         </button>
                         <img src={item.image} alt={item.name} className="w-12 h-12 object-contain" />
                         <span className="font-medium">{item.name}</span>
                      </div>
                   </td>
                   <td>${item.price}</td>
                   <td>
                      <div className="flex items-center border border-gray-300 w-16 rounded px-2 py-1 justify-between">
                         <span>{item.quantity}</span>
                         <div className="flex flex-col">
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}><ChevronUp className="w-3 h-3" /></button>
                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}><ChevronDown className="w-3 h-3" /></button>
                         </div>
                      </div>
                   </td>
                   <td className="text-right pr-8 font-medium">${item.price * item.quantity}</td>
                </tr>
             ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between mb-16">
         <Link to="/" className="px-8 py-3 border border-gray-300 rounded font-medium hover:bg-gray-50 transition-colors">Return To Shop</Link>
         <button className="px-8 py-3 border border-gray-300 rounded font-medium hover:bg-gray-50 transition-colors">Update Cart</button>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-8 items-start">
         <div className="flex gap-4 w-full md:w-auto">
            <input type="text" placeholder="Coupon Code" className="border border-gray-300 rounded px-4 py-3 outline-none w-full md:w-64" />
            <button className="bg-primary text-white px-8 py-3 rounded whitespace-nowrap hover:bg-red-600 transition-colors">Apply Coupon</button>
         </div>
         
         <div className="border border-gray-400 rounded p-6 w-full md:w-96">
            <h3 className="font-medium text-lg mb-4">Cart Total</h3>
            <div className="space-y-3 text-sm border-b border-gray-300 pb-4 mb-4">
               <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>${cartTotal}</span>
               </div>
               <div className="flex justify-between">
                  <span>Shipping:</span>
                  <span>Free</span>
               </div>
            </div>
            <div className="flex justify-between font-medium mb-4">
               <span>Total:</span>
               <span>${cartTotal}</span>
            </div>
            <div className="text-center">
               <button className="bg-primary text-white py-3 px-8 rounded hover:bg-red-600 transition-colors">Procees to checkout</button>
            </div>
         </div>
      </div>
    </div>
  );
};
