import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import '../styles/Clothing.css'; // Reusing the same style as clothing
import blanketProducts from '../data/blanketProducts';

function Blankets() {
  return (
    <div className="clothing-wrapper">
      <h1 className="clothing-title">Shop Blankets</h1>
      <div className="clothing-grid">
        {blanketProducts.map(product => (
          <Link key={product.id} to={`/product/${product.id}`} className="product-card">
            <img src={product.image} alt={product.name} className="product-img" />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-desc">{product.description}</p>
            <p className="product-price">R{product.price}</p>
            <p className="product-size">Sizes: {product.size}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Blankets;
