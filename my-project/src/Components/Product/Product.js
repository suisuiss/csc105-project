import React from "react";
import "./Product.css";
import products from "../../Products.json";

const ProductItem = ({ id, image, price, description }) => {
  return (
    <div key={id} id={id} className="product-item">
      <img src={image} />
      <div className="product-item-detail">
        <h1>{price} Baht</h1>
        <pre>{description}</pre>
        <a href={`/details/${id}`} id={id}>
          see more details
        </a>
      </div>
      <div className="product-button-container">
        <div className="wrap-product-button-container">
          <button>Add To Shopping Cart</button>
        </div>
      </div>
    </div>
  );
};

export const Product = () => {
  return (
    <div className="product-container">
      <h2 id="recommend">Recommended Product</h2>
      {products.map((product) => ProductItem(product))}
    </div>
  );
};