import React from "react";
import "./Cart.css";

const Summary = ({ totalPrice, clearCart }) => {
  return (
    <div className="page-summary-container">
      <div className="page-summary-details">
        <h1>Total</h1>
        <span style={{ alignSelf: "center" }}>{totalPrice} THB</span>
      </div>
      <button onClick={() => clearCart()} className="page-summary-pay-button">
        PAY
      </button>
    </div>
  );
};

const CartItem = ({ cart, index }) => {
  const { id, image, price, description } = cart;
  return (
    <tr key={`${id}-${index}`}>
      <td>
        <img className="page-cart-item-image" src={image} />
      </td>
      <td style={{ padding: "3rem 0", textAlign: "center" }}>
        <span className="page-cart-item-name">{id}</span>
      </td>
      <td className="page-cart-item-details">
        <div>
          <span>{description}</span>
        </div>
      </td>
      <td style={{ textAlign: "right" }}>1</td>
      <td style={{ textAlign: "right" }}>{price} THB</td>
    </tr>
  );
};

const Cart = ({ cart, clearCart }) => {
  const totalPrice = cart.map((c) => +c.price).reduce((a, b) => a + b, 0);

  return (
    <div>
      {cart.length == 0 ? (
        <div
          style={{
            width: "50%",
            margin: "40% auto",
            textAlign: "center",
            transform: "translate(0, -50%)",
          }}
        >
          <h1 style={{ fontSize: "2.5rem" }}>Your shopping cart is EMPTY!</h1>
          <span>Let's add something in your shopping cart.</span>
          <a style={{ display: "block" }} href="/shop">
            Back
          </a>
        </div>
      ) : (
        <div className="page-cart-container">
          <table className="page-cart-table">
            <thead>
              <tr>
                <th>Image</th>
                <th style={{ width: "20%" }}>Name</th>
                <th>Details</th>
                <th style={{ width: "10%", textAlign: "right" }}>Quantity</th>
                <th style={{ width: "15%", textAlign: "right" }}>Price</th>
              </tr>
            </thead>
            <tbody>
              {cart &&
                cart.map((c, index) => <CartItem cart={c} index={index} />)}
            </tbody>
          </table>
          <Summary totalPrice={totalPrice} clearCart={clearCart} />
        </div>
      )}
    </div>
  );
};

export default Cart;