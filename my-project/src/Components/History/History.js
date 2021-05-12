import React from "react";
import "./History.css";

const HistoryItem = ({ product, setToCart }) => {
  const { productId, productName, productPics, productPrice, productDescription } = product;
  return (
    <div key={productId} id={productId} className="product-item">
      <img src={productPics} alt={productPics} />
      <div className="product-item-detail">
        <h2>
          {productName}
          <span
            style={{
              fontWeight: "bold",
              fontSize: "16px",
              marginLeft: "1rem",
            }}
          >
            {productPrice} Baht
          </span>
        </h2>
        <pre>{productDescription}</pre>
        <a href={`/details/products/${productId}`} id={productId}>
          see more details
        </a>
      </div>
    </div>
  );
};

class History extends React.Component  {

  constructor(props) {
    super(props);
    this.state = {products:[],props:props};
  }

  componentDidMount() {

      fetch("/csc105_backend_war_exploded/history?userID="+localStorage.getItem('userId'))
        .then(response => response.json())
      .then(result => this.setState({products:result}) )
      .catch(error => console.log('error', error));
    
  }

  render() {
    const { setToCart } = this.state.props;
    const { products } = this.state;
    return (
      
      <div className="product-container">
        <h1 id="recommend">My History</h1>
        {(this.state.products.length > 0)? products.map((product) => (
            <HistoryItem product={product} setToCart={setToCart} />
          )):"History is Empty"}

      </div>
    );
  }
};

export default History;