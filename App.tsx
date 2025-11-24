import React from 'react';
import { HashRouter as Router, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import { ShopProvider } from './context/ShopContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Login, Signup } from './pages/Login';
import { ProductDetails } from './pages/ProductDetails';
import { Cart } from './pages/Cart';
import { Wishlist } from './pages/Wishlist';
import { NotFound } from './pages/NotFound';

// Layout wrapper to ensure header/footer presence
const Layout = () => {
  const { pathname } = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ShopProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="cart" element={<Cart />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="product/:id" element={<ProductDetails />} />
            <Route path="contact" element={<div className="p-20 text-center">Contact Page Placeholder</div>} />
            <Route path="about" element={<div className="p-20 text-center">About Page Placeholder</div>} />
            <Route path="account" element={<div className="p-20 text-center">My Account Placeholder</div>} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </ShopProvider>
  );
};

export default App;
