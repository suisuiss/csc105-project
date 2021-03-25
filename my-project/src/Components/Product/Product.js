import React from "react";
import "./Product.css";
import products from "../../Products.json";

const ProductItem = ({ product, setToCart }) => {
  const { id, name, image, price, description } = product;
  return (
    <div key={id} id={id} className="product-item">
      <img src={image} alt={name} />
      <div className="product-item-detail">
        <h2>
          {name}
          <span
            style={{
              fontWeight: "bold",
              fontSize: "16px",
              marginLeft: "1rem",
            }}
          >
            {price} Baht
          </span>
        </h2>
        <pre>{description}</pre>
        <a href={`/details/products/${id}`} id={id}>
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
  const { search, setToCart } = props;
  return (
    <div className="product-container">
      <h2 id="recommend">Recommended Product</h2>
      {products
        .filter((product) =>
          product.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )
        .map((product) => (
          <ProductItem product={product} setToCart={setToCart} />
        ))}
        
    </div>
  );
};