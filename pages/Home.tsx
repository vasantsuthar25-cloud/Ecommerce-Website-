import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { ProductCard } from '../components/ProductCard';
import { getFlashSaleProducts, getBestSellingProducts, getExploreProducts } from '../services/mockData';
import { Smartphone, Monitor, Watch, Camera, Headphones, Gamepad2, ArrowRight, Truck, Headset, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  const flashProducts = getFlashSaleProducts();
  const bestSelling = getBestSellingProducts();
  const exploreProducts = getExploreProducts();

  return (
    <div className="space-y-20 pb-20">
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Categories Sidebar */}
          <div className="hidden md:block w-1/4 border-r border-gray-100 pr-4">
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between cursor-pointer hover:text-primary">Woman's Fashion <ArrowRight className="w-4 h-4"/></li>
              <li className="flex justify-between cursor-pointer hover:text-primary">Men's Fashion <ArrowRight className="w-4 h-4"/></li>
              <li className="cursor-pointer hover:text-primary">Electronics</li>
              <li className="cursor-pointer hover:text-primary">Home & Lifestyle</li>
              <li className="cursor-pointer hover:text-primary">Medicine</li>
              <li className="cursor-pointer hover:text-primary">Sports & Outdoor</li>
              <li className="cursor-pointer hover:text-primary">Baby's & Toys</li>
              <li className="cursor-pointer hover:text-primary">Groceries & Pets</li>
              <li className="cursor-pointer hover:text-primary">Health & Beauty</li>
            </ul>
          </div>

          {/* Slider */}
          <div className="flex-1 bg-black text-white p-12 flex items-center justify-between relative overflow-hidden">
             <div className="space-y-5 z-10 max-w-sm">
               <div className="flex items-center gap-4">
                 <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">🍎</div>
                 <span className="text-sm">iPhone 14 Series</span>
               </div>
               <h1 className="text-5xl font-semibold leading-tight">Up to 10% off Voucher</h1>
               <Link to="/" className="inline-flex items-center gap-2 border-b border-white pb-1 font-medium hover:text-gray-300">
                 Shop Now <ArrowRight className="w-5 h-5"/>
               </Link>
             </div>
             <div className="z-10 relative">
               <img src="https://picsum.photos/id/1/400/300" alt="iPhone" className="object-cover rounded shadow-2xl mix-blend-overlay opacity-80" />
             </div>
             {/* Simple Dots */}
             <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
               <div className="w-3 h-3 bg-primary rounded-full border-2 border-white"></div>
               <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
               <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
             </div>
          </div>
        </div>
      </section>

      {/* Flash Sales */}
      <section className="container mx-auto px-4 border-b border-gray-100 pb-16">
        <SectionHeader title="Flash Sales" subtitle="Today's" timer arrows />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 overflow-x-auto hide-scrollbar">
          {flashProducts.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
        <div className="text-center mt-12">
          <button className="bg-primary text-white py-3 px-12 rounded hover:bg-red-600 transition-colors">View All Products</button>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 border-b border-gray-100 pb-16">
        <SectionHeader title="Browse By Category" subtitle="Categories" arrows />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {[
            { name: 'Phones', icon: Smartphone },
            { name: 'Computers', icon: Monitor },
            { name: 'SmartWatch', icon: Watch },
            { name: 'Camera', icon: Camera, active: true },
            { name: 'HeadPhones', icon: Headphones },
            { name: 'Gaming', icon: Gamepad2 },
          ].map((cat, idx) => (
             <div key={idx} className={`border ${cat.active ? 'bg-primary text-white border-primary' : 'border-gray-200 hover:bg-primary hover:text-white hover:border-primary'} rounded flex flex-col items-center justify-center py-6 gap-3 transition-colors cursor-pointer group`}>
               <cat.icon className={`w-8 h-8 group-hover:text-white ${cat.active ? 'text-white' : 'text-black'}`} strokeWidth={1.5} />
               <span className="text-sm font-medium">{cat.name}</span>
             </div>
          ))}
        </div>
      </section>

      {/* Best Selling */}
      <section className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
           <SectionHeader title="Best Selling Products" subtitle="This Month" />
           <button className="bg-primary text-white py-2 px-8 rounded h-12 hover:bg-red-600 transition-colors">View All</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {bestSelling.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* Music Banner */}
      <section className="container mx-auto px-4">
        <div className="bg-black text-white p-12 rounded flex flex-col md:flex-row items-center justify-between overflow-hidden relative">
          <div className="space-y-8 z-10 max-w-md">
            <span className="text-[#0F6] font-semibold text-sm">Categories</span>
            <h2 className="text-5xl font-semibold leading-tight">Enhance Your Music Experience</h2>
            <div className="flex gap-4">
               {[{val:23, l:'Hours'}, {val:5, l:'Days'}, {val:59, l:'Minutes'}, {val:35, l:'Seconds'}].map((t, i) => (
                 <div key={i} className="bg-white text-black w-16 h-16 rounded-full flex flex-col items-center justify-center leading-none">
                    <span className="font-bold text-lg">{t.val}</span>
                    <span className="text-[10px]">{t.l}</span>
                 </div>
               ))}
            </div>
            <button className="bg-[#0F6] text-white py-3 px-8 rounded font-medium hover:bg-green-600 transition-colors">Buy Now!</button>
          </div>
          
          <div className="relative z-10 mt-8 md:mt-0">
             <div className="absolute inset-0 bg-white/30 blur-3xl rounded-full"></div>
             <img src="https://picsum.photos/id/14/500/300" alt="Speaker" className="relative z-10 object-contain drop-shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Explore Products */}
      <section className="container mx-auto px-4">
        <SectionHeader title="Explore Our Products" subtitle="Our Products" arrows />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 gap-y-12">
           {exploreProducts.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
        <div className="text-center mt-12">
          <button className="bg-primary text-white py-3 px-12 rounded hover:bg-red-600 transition-colors">View All Products</button>
        </div>
      </section>

      {/* New Arrival Grid */}
      <section className="container mx-auto px-4">
        <SectionHeader title="New Arrival" subtitle="Featured" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[600px]">
           <div className="bg-black text-white relative rounded overflow-hidden p-8 flex items-end">
              <img src="https://picsum.photos/id/15/600/600" className="absolute inset-0 w-full h-full object-cover opacity-60" />
              <div className="relative z-10 space-y-3">
                 <h3 className="text-2xl font-semibold">PlayStation 5</h3>
                 <p className="text-sm text-gray-300 max-w-xs">Black and White version of the PS5 coming out on sale.</p>
                 <a href="#" className="inline-block border-b border-white pb-1 font-medium">Shop Now</a>
              </div>
           </div>
           <div className="grid grid-rows-2 gap-8">
              <div className="bg-[#0D0D0D] text-white relative rounded overflow-hidden p-6 flex items-end">
                  <img src="https://picsum.photos/id/16/600/300" className="absolute inset-0 w-full h-full object-cover opacity-60" />
                  <div className="relative z-10 space-y-2">
                     <h3 className="text-xl font-semibold">Women's Collections</h3>
                     <p className="text-xs text-gray-300 max-w-xs">Featured woman collections that give you another vibe.</p>
                     <a href="#" className="inline-block border-b border-white pb-1 font-medium text-sm">Shop Now</a>
                  </div>
              </div>
              <div className="grid grid-cols-2 gap-8">
                 <div className="bg-[#0D0D0D] text-white relative rounded overflow-hidden p-4 flex items-end">
                    <img src="https://picsum.photos/id/17/300/300" className="absolute inset-0 w-full h-full object-cover opacity-60" />
                    <div className="relative z-10 space-y-1">
                       <h3 className="text-lg font-semibold">Speakers</h3>
                       <p className="text-[10px] text-gray-300">Amazon wireless speakers</p>
                       <a href="#" className="inline-block border-b border-white pb-1 font-medium text-xs">Shop Now</a>
                    </div>
                 </div>
                 <div className="bg-[#0D0D0D] text-white relative rounded overflow-hidden p-4 flex items-end">
                    <img src="https://picsum.photos/id/18/300/300" className="absolute inset-0 w-full h-full object-cover opacity-60" />
                    <div className="relative z-10 space-y-1">
                       <h3 className="text-lg font-semibold">Perfume</h3>
                       <p className="text-[10px] text-gray-300">GUCCI INTENSE OUD EDP</p>
                       <a href="#" className="inline-block border-b border-white pb-1 font-medium text-xs">Shop Now</a>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Services */}
      <section className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-center text-center">
        <div className="flex flex-col items-center gap-4">
           <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center border-[10px] border-gray-200">
             <div className="bg-black text-white p-2 rounded-full"><Truck className="w-6 h-6" /></div>
           </div>
           <div>
             <h3 className="font-bold text-lg uppercase">Free and Fast Delivery</h3>
             <p className="text-sm text-gray-600">Free delivery for all orders over $140</p>
           </div>
        </div>
        <div className="flex flex-col items-center gap-4">
           <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center border-[10px] border-gray-200">
             <div className="bg-black text-white p-2 rounded-full"><Headset className="w-6 h-6" /></div>
           </div>
           <div>
             <h3 className="font-bold text-lg uppercase">24/7 Customer Service</h3>
             <p className="text-sm text-gray-600">Friendly 24/7 customer support</p>
           </div>
        </div>
        <div className="flex flex-col items-center gap-4">
           <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center border-[10px] border-gray-200">
             <div className="bg-black text-white p-2 rounded-full"><ShieldCheck className="w-6 h-6" /></div>
           </div>
           <div>
             <h3 className="font-bold text-lg uppercase">Money Back Guarantee</h3>
             <p className="text-sm text-gray-600">We reurn money within 30 days</p>
           </div>
        </div>
      </section>

    </div>
  );
};
