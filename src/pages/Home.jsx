import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import '../styles/Home.css'; // Custom CSS for homepage

function Home() {
  return (
    <div className="home-wrapper">
      <div className="hero-section">
        <div className="hero-text">
          <h1>Welcome to Mongoe Shopping</h1>
          <p>Shop trendy clothes, gadgets, and more!</p>
          <button className="hero-button">Start Shopping</button>
        </div>
       <div className="carousel-wrapper">
  <div className="carousel auto-scroll">
    <img src="https://www.pepstores.com/cdn/shop/files/DYJ25_web_PNG.png?v=1741022966" alt="promo" />
    <img src="https://www.pepstores.com/cdn/shop/files/ELJ36_web_PNG.png?v=1746428571" alt="promo" />
    <img src="https://www.pepstores.com/cdn/shop/files/DYN78_web_PNG.png?v=1741017896" alt="promo" />
  </div>
</div>

      </div>

      <div className="featured-section">
        <h2>Featured Categories</h2>
        <div className="categories">
          <div className="category-card">
            <Link to="/clothing"><img src="https://static-01.daraz.pk/p/a17389e9c193040c31760ee95df14d66.jpg" alt="Clothing" />
             <p>Clothing</p> </Link>
          </div>
          <div className="category-card">
            <Link to="/gadget"><img src="https://www.rentnconnect.com/ckfinder/userfiles/files/Best%20Tech%20Gadgets%202020.jpg" alt="Gadgets" />
            <p>Gadgets</p></Link>
          </div>
          <div className="category-card">
            <Link to="/blanket" ><img src="https://www.grabbit.co.za/cdn/shop/products/71-3wONx72L._AC_SX466.jpg?v=1627637866" alt="Blankets" />
            <p>Blankets</p></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;