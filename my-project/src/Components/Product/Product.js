import React from "react";
import "./Product.css";

const ProductItem = ({ product, setToCart }) => {
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
          <button onClick={() => setToCart(product)}>
            Add To Shopping Cart
          </button>
        </div>
      </div>
    </div>
  );
};

class Product extends React.Component  {

  constructor(props) {
    super(props);
    this.state = {products:[],props:props,search:''};
    this.changeSearch = this.changeSearch.bind(this);
  }

  componentDidMount() {
    const { category } = this.state.props;
    if(category === 'product'){
      fetch("/csc105_backend_war_exploded/product/list")
        .then(response => response.json())
      .then(result => this.setState({products:result}) )
      .catch(error => console.log('error', error));
    }else{
      fetch("/csc105_backend_war_exploded/product/filter?productCategory="+category)
        .then(response => response.json())
      .then(result => this.setState({products:result}) )
      .catch(error => console.log('error', error));
    }
    
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      if(this.state.search.length > 3){
        fetch("/csc105_backend_war_exploded/product/search?searchTxt="+this.state.search)
        .then(response => response.json())
        .then(result => this.setState({products:(null!=result?result:[])}) )
        .catch(error => console.log('error', error));
      }
    }
  }

  changeSearch(e){
      this.setState({search:e.target.value});
  }

  clearSearch(){
    window.location.href=("/shop/product")
  }

  render() {
    const { setToCart } = this.state.props;
    return (
      
      <div className="product-container">
        <h1 id="recommend">Product <input className="search" id="search"
              type="search"
              value={this.state.search}
              placeholder="What do you want to get?"
              onChange={this.changeSearch}
             
            /> <button onClick={() => this.clearSearch()}>Clear</button></h1>
        {null != this.state.products && this.state.products.length > 0 ? (this.state.products.map((product) => (<ProductItem product={product} setToCart={setToCart} />))):"Not found"}

      </div>
    );
  }
};

export default Product;