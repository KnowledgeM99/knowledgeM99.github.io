import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import '../styles/Clothing.css'; // Reusing the same style as clothing
import gadgetProducts from '../data/gadgetProducts';

function Gadgets(){
return (
    <div className="clothing-wrapper">
      <h1 className="clothing-title">Shop Gadgets</h1>
      <div className="clothing-grid">
        {gadgetProducts.map(product => (
          <Link key={product.id} to={`/product/${product.id}`} className="product-card">
            <img src={product.image} alt={product.name} className="product-img" />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-desc">{product.description}</p>
            <p className="product-price">{product.price}</p>
            <p className="product-size">Sizes: {product.size}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Gadgets;