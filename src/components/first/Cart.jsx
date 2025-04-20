import React from 'react';
import { FaTimes, FaPlus, FaMinus, FaShoppingCart } from 'react-icons/fa';

const Cart = ({ cart, onClose, onRemove, onIncrease }) => {
  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="cart-overlay">
      <div className="cart-container">
        <div className="cart-header">
          <div className="cart-title">
            <FaShoppingCart className="cart-icon" />
            <h2>Your Medicine Cart</h2>
          </div>
          <button className="close-btn" onClick={onClose}>
            {/* <FaTimes /> */}
            X
          </button>
        </div>
        
        {cart.length === 0 ? (
          <div className="empty-cart">
            <FaShoppingCart className="empty-icon" />
            <p>Your cart is empty</p>
            <button className="continue-shopping" onClick={onClose}>
              Browse Medicines
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items-container">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="item-details">
                    <h3 className="item-name">{item.name}</h3>
                    <p className="item-desc">{item.description}</p>
                    <div className="price-quantity">
                      <span className="item-price">₹{item.price}</span>
                      <div className="quantity-controls">
                        <button 
                          className="quantity-btn minus"
                          onClick={() => onRemove(item.id)}
                        >
                        -
                        </button>
                        <span className="quantity">{item.quantity}</span>
                        <button 
                          className="quantity-btn plus"
                          onClick={() => onIncrease(item.id)}
                        >
                        +
                        </button>
                      </div>
                      <span className="item-total">₹{(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                  <button 
                    className="remove-item"
                    onClick={() => onRemove(item.id)}
                  >
                    +
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <div className="summary-row">
                <span>Subtotal</span>
                <span>₹{cartTotal.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>FREE</span>
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <span>₹{cartTotal.toFixed(2)}</span>
              </div>
              
              <button className="checkout-btn">
                Proceed to Checkout
              </button>
              
              <button className="continue-shopping" onClick={onClose}>
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;