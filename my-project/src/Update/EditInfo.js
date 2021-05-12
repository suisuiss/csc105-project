import React, { } from "react";
import "./EditInfo.css";
class EditInfo extends React.Component  {
  
    constructor(props) {
    super(props);
    this.state = {  userId:localStorage.getItem('userId'),
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
      fetch("/csc105_backend_war_exploded/user/information?userID="+this.state.userId)
        .then(response => response.json())
      .then(result => this.setState({email:result.email,
                                     firstname:result.firstname,
                                     lastname:result.lastname,
                                     username:result.username,
                                     password:result.password,
                                     address:result.address,
                                     phoneNumber:result.phoneNumber}) )
      .catch(error => console.log('error', error));
  }

  edituser(){
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var raw = JSON.stringify(this.state);
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      
      fetch("/csc105_backend_war_exploded/user/update",requestOptions)
      .then(response => response.json())
    .then(result => console.log(result),window.location.href="/myInfo")
    .catch(error => console.log('error', error));
  }

  render() {
  
    return (
      <div>
        <div className="logo">
          Daily Deal
          <p>your best shopping centre</p>
        </div>
        <div className="editInfo">
          <p>Edit My Info</p>
          <input
            type="text"
            placeholder="Name"
            id="firstname"
            value={this.state.firstname}
            onChange={this.handleChange}
           
          />
          
          <input
            type="text"
            placeholder="Surname"
            id="lastname"
            value={this.state.lastname}
            onChange={this.handleChange}
            
          />
          <input
            type="text"
            placeholder="Address"
            id="address"
            value={this.state.address}
            onChange={this.handleChange}
           
          />
          <input
            type="text"
            placeholder="Email"
            id="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
         
          <input
            type="text"
            placeholder="Phone No."
            id="phoneNumber"
            value={this.state.phoneNumber}
            onChange={this.handleChange}
            
          />
         
            <div>
              <button className="editInfo-button" onClick={() => { this.edituser() }} >
                Update New Info
              </button>
              
            </div>
            </div>
            </div>
       )   
    }
  };
  
  export default EditInfo;