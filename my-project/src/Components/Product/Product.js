import React from "react";
import "./Product.css";
import products from "../../Products.json";

const ProductItem = ({ product, setToCart }) => {
  const { id, name, image, price, description } = product;
  return (
    <div key={id} id={id} className="product-item">
      <img src={image} />
      <div className="product-item-detail">
        <h1>
          {name}
          <span
            style={{
              fontWeight: "normal",
              fontSize: "16px",
              marginLeft: "1rem",
            }}
          >
            {price} Baht
          </span>
        </h1>
        <pre>{description}</pre>
        <a href={`/details/${id}`} id={id}>
          see more details
        </a>
      </div>
      <div className="product-button-container">
        <div className="wrap-product-button-container">
          <button onClick={() => setToCart(product)}>
            Add To Shopping Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export const Product = (props) => {
  const { setToCart } = props;
  return (
    <div className="product-container">
      <h2 id="recommend">Recommended Product</h2>
      {products.map((product) => (
        <ProductItem product={product} setToCart={setToCart} />
      ))}
    </div>
  );
};