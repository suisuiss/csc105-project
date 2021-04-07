import React from "react";
import "./Snacks.css";
import snacks from "../../../Snack.json";

const SnacksItem = ({ item, setToCart}) => {
  const { name, id, image, price, description } = item;
  return (
    <div key={id} id={id} className="snack-page-item">
      <img src={image} alt={name}></img>
      <div className="snack-page-item-detail">
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
        <a href={`/details/snacks/${id}`} id={id}>
          see more details
        </a>
      </div>
      <div className="snack-page-button-container">
        <div className="wrap-snack-page-button-container">
        <button onClick={() => setToCart(item)}>Add To Shopping Cart</button>
        </div>
      </div>
    </div>
  );
};

export const Snacks = (props) => {
  const { search,setToCart } = props;

  return (
    <div className="product-container">
    <h1 id="snacks">Snacks</h1>
    {snacks
   .filter((a) =>
   a.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
 )
    .map((a) => (
      <SnacksItem item={a} setToCart={setToCart} />
    ))}
  </div>
  );
};