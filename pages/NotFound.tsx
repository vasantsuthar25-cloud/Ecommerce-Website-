import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-32 text-center space-y-10">
       <div className="text-sm text-gray-500 text-left">
         <span>Home</span> / <span className="text-black font-medium">404 Error</span>
      </div>
      
      <h1 className="text-[100px] font-medium leading-none">404 Not Found</h1>
      <p className="text-gray-600">Your visited page not found. You may go home page.</p>
      
      <Link to="/" className="inline-block bg-primary text-white px-10 py-3 rounded hover:bg-red-600 transition-colors">Back to home page</Link>
    </div>
  );
};
