import React from "react";
import "./Cart.css";
import { Confirm } from 'react-st-modal';

const onClick = async (cart,clearCart) => {
  const isConfirm = await Confirm(
    'Are you sure you want to pay this item?'
  );

  if (isConfirm) {
    clearCart(cart);
  }
};


const Summary = ({ totalPrice, clearCart,cart }) => {
  
  return (
    <div className="page-summary-container">
      <div className="page-summary-details">
        <h1>Total</h1>
        <span style={{ alignSelf: "center" }}>{totalPrice} THB</span>
      </div>
      <button onClick={() => onClick(cart,clearCart)} className="page-summary-pay-button">
        PAY
      </button>
    </div>
  );
};

const CartItem = ({ cart, index }) => {
  const { productId, productName, productPics, productPrice, productDescription } = cart;
  return (
    <tr key={`${productId}-${index}`}>
      <td>
        <img className="page-cart-item-image" src={productPics} alt={productName} />
      </td>
      <td style={{ padding: "3rem 0", textAlign: "center" }}>
        <span className="page-cart-item-name">{productId}</span>
      </td>
      <td className="page-cart-item-details">
        <div>
          <span>{productDescription}</span>
        </div>
      </td>
      <td style={{ textAlign: "right" }}>1</td>
      <td style={{ textAlign: "right" }}>{productPrice} THB</td>
    </tr>
  );
};

const Cart = ({ cart, clearCart }) => {
  const totalPrice = cart.map((c) => +c.productPrice).reduce((a, b) => a + b, 0);
  return (
    <div>
      {cart.length === 0 ? (
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
          <a style={{ display: "block" }} href="/shop/product">
            Back
          </a>
        </div>
      ) : (
        <div className="page-cart-container">
          <table className="page-cart-table">
            <thead>
              <tr>
                <th>Image</th>
                <th style={{ width: "20%" }}>Product ID</th>
                <th>Descriptions</th>
                <th style={{ width: "10%", textAlign: "right" }}>Quantity</th>
                <th style={{ width: "15%", textAlign: "right" }}>Price</th>
              </tr>
            </thead>
            <tbody>
              {cart &&
                cart.map((c, index) => <CartItem cart={c} index={index} />)}
            </tbody>
          </table>
          <Summary totalPrice={totalPrice} clearCart={clearCart} cart={cart}/>
        </div>
      )}
    </div>
  );
};

export default Cart;