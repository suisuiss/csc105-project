import React from "react";
import "./shop.css";

class Menu extends React.Component  {

  constructor(props) {
    super(props);
    this.state = {menu:[],props:props};
  }

  componentDidMount() {
    fetch("/csc105_backend_war_exploded/product/menu")
      .then(response => response.json())
    .then(result => this.setState({menu:result}) )
    .catch(error => console.log('error', error));
  }

  render() {
    const { menu } = this.state;
    return (
      <div className="categories">
          <h2>Your Options</h2>
          <div className="cat-list">
            {null != menu && menu.length > 0 ? menu.map((menu) => (
            <a className="" href={menu}>
              {menu}
            </a>
          )):"Menu Not found"}
          </div>
        </div>
    );
  }
};

export default Menu;