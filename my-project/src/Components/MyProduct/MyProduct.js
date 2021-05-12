import React from "react";
import "./MyProduct.css";
import { Confirm } from 'react-st-modal';

const onClick = async (productId,DeleteProduct) => {
  const isConfirm = await Confirm(
    'Are you sure you want to delete?'
  );

  if (isConfirm) {
    DeleteProduct(productId);
  }
};

const MyProductItem = ({ product, DeleteProduct }) => {
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
      <div className="product-button-container">
        <div className="wrap-product-button-container">
          <button onClick={() => onClick(productId,DeleteProduct)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

class MyProduct extends React.Component  {

  constructor(props) {
    super(props);
    this.state = {products:[],props:props};
  }

  componentDidMount() {

      fetch("/csc105_backend_war_exploded/myProduct?userID="+localStorage.getItem('userId'))
        .then(response => response.json())
      .then(result => this.setState({products:result}),console.log(this.state.products) )
      .catch(error => console.log('error', error));
    
  }

  backBtn(){
    window.location.href=("/shop/product")
  }

  render() {
    const { DeleteProduct } = this.state.props;
    const { products } = this.state;
    return (
      
      <div className="product-container">
        <h1 id="recommend">My Product</h1>
        {(this.state.products.length > 0)? products.map((product) => (
            <MyProductItem product={product} DeleteProduct={DeleteProduct} />
          )):"My Product is Empty"}
        <button onClick={()=>this.backBtn()}>Back</button>
      </div>
    );
  }
};

export default MyProduct;