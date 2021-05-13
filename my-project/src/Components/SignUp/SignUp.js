import React,{ } from 'react';
import './signup.css';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {firstname: '', lastname: '',address:'',phoneNumber:'',email:'',username:'',password:'',confirmPassword:'',errorMsg:''};
    this.handleChange = this.handleChange.bind(this);
  }

 handleChange(event) {
    switch(event.target.id) {
    case 'firstname': 
      this.setState({firstname: event.target.value});
      break;
    case 'lastname': 
      this.setState({lastname: event.target.value});
      break;
    case 'address': 
      this.setState({address: event.target.value});
      break;
    case 'phoneNumber': 
      this.setState({phoneNumber: event.target.value});
      break;
    case 'email': 
      this.setState({email: event.target.value});
      break;
    case 'username': 
      this.setState({username: event.target.value});
      break;
    case 'password': 
      this.setState({password: event.target.value});
      break;
    case 'confirmPassword': 
      this.setState({confirmPassword: event.target.value});
      break;
    default:
      break;
  }

 }

 isValidInformation () {
    return (
      this.state.firstname.length > 0 &&
      this.state.lastname.length > 0 &&
      this.state.address.length > 0 &&
      this.state.phoneNumber.length > 0 &&
      this.state.email.length > 0 &&
      this.state.username.length > 0 &&
      this.state.password.length > 0 &&
      this.state.confirmPassword.length > 0 &&
      this.state.password === this.state.confirmPassword
    );
  };

  signUpClicked(){
      
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      
      var raw = JSON.stringify(this.state);
      
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      
      fetch("/csc105_backend_war_exploded/signup",requestOptions)
      .then(response => response.json())
    .then(result => result?window.location.href="/":"")
    .catch(error => console.log('error', error));
  
  };

  render() {
    return <div>
      <div className="logo">
        Daily Deal
        <p>your best shopping centre</p>
      </div>
      <div className="signup">
        <p>Sign Up</p>
        <input
          type="text"
          placeholder="Name"
          id="firstname"
          value={this.state.firstname}
          onChange={this.handleChange}
          required
        />
        <input
          type="text"
          placeholder="surname"
          id="lastname"
          value={this.state.lastname}
          onChange={this.handleChange}
          required
        />
        <input
          type="text"
          placeholder="Address"
          id="address"
          value={this.state.address}
          onChange={this.handleChange}
          required
        />
        <input
          type="text"
          placeholder="Email"
          id="email"
          value={this.state.email}
          onChange={this.handleChange}
          required
        />
        
        <input
          type="text"
          placeholder="Phone No."
          id="phoneNumber"
          value={this.state.phoneNumber}
          onChange={this.handleChange}
          required
        /><input
          type="text"
          placeholder="Username"
          id="username"
          value={this.state.username}
          onChange={this.handleChange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={this.state.password}
          onChange={this.handleChange}
          required
        />
        <input
          type="password"
          placeholder="Confirm - Password"
          id="confirmPassword"
          value={this.state.confirmPassword}
          onChange={this.handleChange}
          required
        />
          {this.isValidInformation() ? (
          <div>
            <button className="signup-button" onClick={() => { this.signUpClicked() }}>
              Sign Up 
            </button>
            <span className="error-msg">{this.state.errorMsg}</span>
          </div>
        ) : (
          <div>
            <button className="disabled-signup-button">Sign Up</button>
          </div>
        )}
      </div>
    </div>
  }
}
export default SignUp;