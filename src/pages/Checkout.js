import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Checkout.css';

function Checkout() {
  const [cartItems, setCartItems] = useState([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(savedCart);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !phone || !address || !paymentMethod) {
      alert('Please fill in all fields and select a payment method.');
      return;
    }

    const order = {
      name,
      phone,
      address,
      paymentMethod,
      items: cartItems,
      total: cartItems.reduce((acc, item) => {
        const price = typeof item.price === 'string' ? parseFloat(item.price.replace('R', '')) : item.price;
        return acc + price * item.quantity;
      }, 0),
      date: new Date().toISOString()
    };

    const previousOrders = JSON.parse(localStorage.getItem('orders')) || [];
    localStorage.setItem('orders', JSON.stringify([...previousOrders, order]));

    localStorage.removeItem('cart');
    // alert('Order placed successfully!');
    navigate('/thank-you');
;
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <form className="checkout-form" onSubmit={handleSubmit}>
          <label>
            Full Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </label>

          <label>
            Phone Number:
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          </label>

          <label>
            Delivery Address:
            <textarea value={address} onChange={(e) => setAddress(e.target.value)} required></textarea>
          </label>

          <div className="payment-section">
            <p><strong>Payment Method:</strong></p>
            <label>
              <input
                type="radio"
                name="payment"
                value="Cash on Delivery"
                checked={paymentMethod === 'Cash on Delivery'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Cash on Delivery
            </label>
            <label>
              <input
                type="radio"
                name="payment"
                value="Card (Coming Soon)"
                disabled
              />
              Card (Coming Soon)
            </label>
            <label>
              <input
                type="radio"
                name="payment"
                value="Mobile Wallet (Coming Soon)"
                disabled
              />
              Mobile Wallet (Coming Soon)
            </label>
          </div>

          <h3>Total: R{cartItems.reduce((acc, item) => {
            const price = typeof item.price === 'string' ? parseFloat(item.price.replace('R', '')) : item.price;
            return acc + price * item.quantity;
          }, 0).toFixed(2)}</h3>

          <button type="submit" className="place-order-btn">Place Order</button>
        </form>
      )}
    </div>
  );
}

export default Checkout;
