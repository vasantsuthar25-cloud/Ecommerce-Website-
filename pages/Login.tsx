import React from 'react';
import { Link } from 'react-router-dom';

export const Login: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-20">
       <div className="w-full md:w-1/2 bg-[#CBE4E8] rounded-r-lg overflow-hidden hidden md:block">
          <img src="https://picsum.photos/id/1/600/600" alt="Shopping" className="w-full h-full object-cover mix-blend-multiply opacity-80" />
       </div>
       
       <div className="w-full md:w-1/3 space-y-8">
          <div>
            <h2 className="text-3xl font-medium tracking-wide mb-2">Log in to Exclusive</h2>
            <p className="text-sm text-gray-600">Enter your details below</p>
          </div>
          
          <form className="space-y-6">
             <input type="text" placeholder="Email or Phone Number" className="w-full border-b border-gray-300 py-2 outline-none focus:border-black transition-colors" />
             <input type="password" placeholder="Password" className="w-full border-b border-gray-300 py-2 outline-none focus:border-black transition-colors" />
             
             <div className="flex items-center justify-between pt-4">
                <button type="button" className="bg-primary text-white px-8 py-3 rounded hover:bg-red-600 transition-colors">Log In</button>
                <a href="#" className="text-primary text-sm hover:underline">Forget Password?</a>
             </div>
          </form>
       </div>
    </div>
  );
};

export const Signup: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-20">
       <div className="w-full md:w-1/2 bg-[#CBE4E8] rounded-r-lg overflow-hidden hidden md:block">
          <img src="https://picsum.photos/id/1/600/600" alt="Shopping" className="w-full h-full object-cover mix-blend-multiply opacity-80" />
       </div>
       
       <div className="w-full md:w-1/3 space-y-8">
          <div>
            <h2 className="text-3xl font-medium tracking-wide mb-2">Create an account</h2>
            <p className="text-sm text-gray-600">Enter your details below</p>
          </div>
          
          <form className="space-y-6">
             <input type="text" placeholder="Name" className="w-full border-b border-gray-300 py-2 outline-none focus:border-black transition-colors" />
             <input type="text" placeholder="Email or Phone Number" className="w-full border-b border-gray-300 py-2 outline-none focus:border-black transition-colors" />
             <input type="password" placeholder="Password" className="w-full border-b border-gray-300 py-2 outline-none focus:border-black transition-colors" />
             
             <button type="button" className="w-full bg-primary text-white py-3 rounded hover:bg-red-600 transition-colors">Create Account</button>
             <button type="button" className="w-full border border-gray-300 py-3 rounded flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
                <span className="font-bold text-lg text-blue-500">G</span> Sign up with Google
             </button>

             <div className="text-center text-gray-600 text-sm">
                Already have account? <Link to="/login" className="text-black font-medium hover:underline ml-2">Log in</Link>
             </div>
          </form>
       </div>
    </div>
  );
};
