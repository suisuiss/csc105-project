
import React from 'react';
import './signup.css'
const SignUp=()=> {
    return (
        <div>
        
        
        <div className="logo">Daily Deal
          <p>your best shopping centre</p>
        </div>
        <div className="signup">
          <p>Sign Up</p>
          <input type="text" placeholder="Name" name="name" required />
          <input type="text" placeholder="Surname" name="surname" required />
          <input type="text" placeholder="Address" name="address" required />
          <input type="text" placeholder="Email" name="email" required />
          <input type="text" placeholder="Phone No." name="phone" required />
          <input type="password" placeholder="Password" name="passwordd" required />
          <input type="password" placeholder="Confirm - Password" name="ppassword" required />
          <a href="./"><input type="submit" defaultValue="Sign Up" /></a>
        </div>
      </div>
    );
}

export default SignUp;