import React from 'react';
import "./MyInfo.css";
class MyInfo extends React.Component  {
    constructor(props) {
    super(props);
    this.state = {userID:sessionStorage.getItem('userId'),
                    email:'',
                    firstname:'',
                    lastname:'',
                    username:'',
                    password:'',
                    address:'',
                    phoneNumber:''       
                 };
    this.handleChange = this.handleChange.bind(this);             
  }

  handleChange(event) {
      switch (event.target.id) {
          case 'email':
              this.setState({ email: event.target.value });
              break;
          case 'firstname':
              this.setState({ firstname: event.target.value });
              break;
          case 'lastname':
              this.setState({ lastname: event.target.value });
              break;
          case 'username':
              this.setState({ username: event.target.value });
              break;
          case 'password':
              this.setState({ password: event.target.value });
              break;
          case 'address':
              this.setState({ address: event.target.value });
              break;
          case 'phoneNumber':
              this.setState({ phoneNumber: event.target.value });
              break;
          default:
              break;
      }
  }

  componentDidMount() {
      fetch("/csc105_backend_war_exploded/user/information?userID="+this.state.userID)
        .then(response => response.json())
      .then(result => this.setState({userID:result.userID,
                                     email:result.email,
                                     firstname:result.firstname,
                                     lastname:result.lastname,
                                     username:result.username,
                                     password:result.password,
                                     address:result.address,
                                     phoneNumber:result.phoneNumber}) )
      .catch(error => console.log('error', error));
  }

  render() {
    return (
        <div>
            <div className="logo">
          Daily Deal
          <p>your best shopping centre</p>
          <div className="myInfo">
              <p>My Info</p>
              <div className="name">Name 
              <input type="text" id="firstname" value={this.state.firstname} onChange={this.handleChange} disabled="disabled" />
              </div>
              <div className="surname">Surname 
              <input type="text" id="lastname" value={this.state.lastname} onChange={this.handleChange} disabled="disabled" />
              <div className="address">Address 
              <input type="text" id="address" value={this.state.address} onChange={this.handleChange} disabled="disabled" />
              </div>
              <div className="phoneNo">Phone No. 
              <input type="text" id="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange} disabled="disabled" />
              </div>
              <div className="email">Email 
              <input type="text" id="email" value={this.state.email} onChange={this.handleChange} disabled="disabled" />
              </div>
              <button id="editInfo"><a href="/editInfo">Edit Info</a></button>
              
          </div>
        </div>
        </div><button id="back"><a href="/shop/product">back</a></button>
        </div>
        
    )
  }
}
export default MyInfo;
