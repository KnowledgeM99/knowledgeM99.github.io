import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Cart.css';

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(savedCart);
  }, []);

  // Remove a specific item (matching id, size, color)
  const handleRemove = (itemToRemove) => {
    const updatedCart = cartItems.filter(item =>
      !(
        item.id === itemToRemove.id &&
        item.selectedSize === itemToRemove.selectedSize &&
        item.selectedColor === itemToRemove.selectedColor
      )
    );
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Increase or decrease quantity for specific item
  const updateQuantity = (itemToUpdate, action) => {
    const updated = cartItems.map(item => {
      if (
        item.id === itemToUpdate.id &&
        item.selectedSize === itemToUpdate.selectedSize &&
        item.selectedColor === itemToUpdate.selectedColor
      ) {
        const newQty = action === 'inc' ? item.quantity + 1 : item.quantity - 1;
        return { ...item, quantity: newQty > 0 ? newQty : 1 };
      }
      return item;
    });
    setCartItems(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  // Navigate to checkout page
  const handleCheckout = () => {
    navigate('/checkout');
  };

  // Calculate total price
  const total = cartItems.reduce((acc, item) => {
    const price = typeof item.price === 'string' 
      ? parseFloat(item.price.replace('R', '')) 
      : item.price;
    return acc + price * item.quantity;
  }, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty. Go shop for something nice!</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map(item => (
              <div
                key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
                className="cart-item"
              >
                <img src={item.image} alt={item.name} className="cart-item-img" />
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p>Price: R{item.price}</p>
                  <div className="qty-controls">
                    <button onClick={() => updateQuantity(item, 'dec')}>−</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item, 'inc')}>+</button>
                  </div>
                  {item.selectedSize && <p>Size: <strong>{item.selectedSize}</strong></p>}
                  {item.selectedColor && <p>Color: <strong>{item.selectedColor}</strong></p>}
                  <button className="remove-btn" onClick={() => handleRemove(item)}>Remove</button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Total: R{total.toFixed(2)}</h3>
            <button className="checkout-btn" onClick={handleCheckout}>Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
