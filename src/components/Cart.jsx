import React from "react";
import "../Style/Cart.css";
import { FiTrash2 } from "react-icons/fi";

function Cart({ cart = [], setCart }) {

  const handleRemoveFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1 || newQuantity > 10) return;
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  
  const totalItems = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);
  const totalPrice = cart
    .reduce((acc, item) => acc + item.price * (item.quantity || 1), 0)
    .toFixed(2);

  return (
    <div className="cart">
      <h2>Your Cart 🛒</h2>
      {cart.length === 0 ? (
        <p className="empty-cart">Cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.title} />
              <div className="cart-info">
                <h4>{item.title}</h4>
                <p>${item.price}</p>

                <div className="cart-controls">
                  <button
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity - 1)
                    }
                  >
                    −
                  </button>
                  <input
                    type="number"
                    value={item.quantity === 0 ? 1 :item.quantity}
                    readOnly
                    min={1}
                    max={10}
                  />
                  <button
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                  <button
                    className="remove-btn"
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    <FiTrash2 />
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="cart-summary">
            <h3>Cart Summary</h3>
            <p>Total Items: {totalItems}</p>
            <p>Total Price: ${totalPrice}</p>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
