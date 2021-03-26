import React from "react";
import "./Gadgets.css";
import gadgets from "../../../Gadgets.json";

const GadgetsItem = ({  item, setToCart  }) => {
  const { name, id, image, price, description } = item;
  return (
    <div key={id} id={id} className="gadget-page-item">
      <img src={image} alt={name}></img>
      <div className="gadget-page-item-detail">
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
        <a href={`/details/gadgets/${id}`} id={id}>
          see more details
        </a>
      </div>
      <div className="gadget-page-button-container">
        <div className="wrap-gadget-page-button-container">
        <button onClick={() => setToCart(item)}>Add To Shopping Cart</button>
        </div>
      </div>
    </div>
  );
};

export const Gadgets = (props) => {
  const { setToCart } = props;
  return (
    <div style={{ width: "85%", margin: "auto" }}>
      <h1 id="gadgets">Gadgets</h1>
      {gadgets.map((a) => (
        <GadgetsItem item={a} setToCart={setToCart} />
      ))}
    </div>
  );
};