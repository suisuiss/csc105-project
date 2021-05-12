import React from "react";
// import products from "../../Products.json";
// import accessories from "../../accessories.json";
// import gadgets from "../../Gadgets.json";
// import menclothes from "../../Menclothes.json";
// import snacks from "../../Snack.json";
// import womenclothes from "../../WomenClothes.json";
import "./Details.css";

class Details extends React.Component {

  constructor(props) {
    super(props);
    this.state = {productName:'',productId:0,productPics:null,productPrice:0.0,productDescription:'',productDetails:'',props:props};
  }
   componentDidMount() {
     const {id} = this.props.match.params; 
    fetch('/csc105_backend_war_exploded/product/info?productID='+id,{
      method:'GET',
      headers:{"Content-type":"application/json;charset=UTF-8"}
    }).then(res => res.json())
      .then(data => this.setState({productName:data.productName,productId:data.productId,productPics:data.productPics,productPrice:data.productPrice,productDescription:data.productDescription,productDetails:data.productDetails}));
  }

  render() {
    return (
      <div className="page-details-container">
        <img className="page-details-image" src={this.state.productPics} alt={this.state.productPics} />
        <div className="page-details-info">
          <span className="page-details-info-name" style={{ display: "block" }}>
            {this.state.productName}{" "}
          </span>
          <span className="page-details-info-price" style={{ display: "block" }}>
            Price: {this.state.productPrice} Baht
          </span>
          <span className="page-details-info-id" style={{ display: "block" }}>
            ID: {this.state.productId}
          </span>
          <div style={{ marginTop: "1rem" }}>
            <label style={{ display: "block", fontSize: "14px" }}>
              Description
            </label>
            <p className="page-details-info-description">{this.state.productDescription}</p>
          </div>
          <p className="page-details-info-details">{this.state.productDetails}</p>
        </div>
      </div>
    );
  }
};

export default Details;