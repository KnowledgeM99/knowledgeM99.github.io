import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Clothing from './pages/Clothing';
import ProductView from './pages/ProductView';
import  './App.css';
import Blankets from './pages/Blankets';
import Gadgets from './pages/Gadgets';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import ThankYou from './pages/ThankYou';
import MyOrders from './pages/MyOrders';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clothing" element={<Clothing />} />
          <Route path="/product/:id" element={<ProductView />} />
          <Route path="/blanket" element={<Blankets/>} />
          <Route path='/gadget' element={<Gadgets/>}/>
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/orders" element={<MyOrders />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
