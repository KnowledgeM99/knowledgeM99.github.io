import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import clothingProducts from '../data/clothingProducts';
import gadgetProducts from '../data/gadgetProducts';
import blanketProducts from '../data/blanketProducts';
import '../styles/ProductView.css';

function ProductView() {
  const { id } = useParams();
  const productId = parseInt(id, 10);
  const allProducts = [...clothingProducts, ...gadgetProducts, ...blanketProducts];
  const navigate = useNavigate();

  const product = allProducts.find(item => item.id === productId);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [cart, setCart] = useState([]);

  // Load cart from localStorage on first render
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  // Save to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  if (!product) {
    return <div className="product-view-container">Product not found.</div>;
  }

  const availableSizes = product.size.split('-');
  const colors = ['Black', 'White', 'Blue', 'Cream']; // Customize as needed

const handleAddToCart = () => {
  if (!selectedSize || !selectedColor) {
    alert('Please select a size and color.');
    return;
  }

  // Check if item exists in cart
  const existingIndex = cart.findIndex(item =>
    item.id === product.id &&
    item.selectedSize === selectedSize &&
    item.selectedColor === selectedColor
  );

  let updatedCart;
  if (existingIndex >= 0) {
    updatedCart = [...cart];
    updatedCart[existingIndex].quantity += 1;
    setCart(updatedCart);
    alert(`Increased quantity of ${product.name} (Size: ${selectedSize}, Color: ${selectedColor}) in cart.`);
  } else {
    const newItem = {
      ...product,
      selectedSize,
      selectedColor,
      quantity: 1
    };
    updatedCart = [...cart, newItem];
    setCart(updatedCart);
    alert(`${product.name} (Size: ${selectedSize}, Color: ${selectedColor}) added to cart.`);
  }

  // Update localStorage and trigger storage event manually
  localStorage.setItem('cart', JSON.stringify(updatedCart));
  window.dispatchEvent(new Event('storage'));
};

  return (
    <>
      <button onClick={() => navigate(-1)} className="back-btn">← Back</button>
      <div className="product-view-container">
        <div className="product-image-wrap">
          <img src={product.image} alt={product.name} className="product-image" />
        </div>
        <div className="product-details">
          <h1 className="product-name">{product.name}</h1>
          <p className="product-description">{product.description}</p>
          <p className="product-price">R{product.price}</p>

          <div className="selectors">
            <div className="size-selector">
              <div className="selector-label">Select Size:</div>
              <div className="selector-group">
                {availableSizes.map(size => (
                  <div
                    key={size}
                    className={`selector-radio ${selectedSize === size ? 'selected' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>

            <div className="color-selector">
              <div className="selector-label">Select Color:</div>
              <div className="selector-group">
                {colors.map(color => (
                  <div
                    key={color}
                    className={`selector-radio ${selectedColor === color ? 'selected' : ''}`}
                    onClick={() => setSelectedColor(color)}
                  >
                    {color}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button className="add-to-cart-btn" onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </>
  );
}

export default ProductView;
