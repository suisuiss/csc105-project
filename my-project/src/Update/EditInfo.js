import React, { useState } from "react";
import "./EditInfo.css";
const EditInfo = () => {
    const [user, setUser] = useState({
      name: "",
      surname: "",
      address: "",
      phoneno: "",
      email: "",
     
    
    });
  
  
    const inputChanged = (type, value) => {
      setUser((prev) => {
        return {
          ...prev,
          [type]: value,
        };
      });
    };
  
   
  
      
  
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
            id="name"
            onChange={(e) => inputChanged("name", e.target.value)}
           
          />
          
          <input
            type="text"
            placeholder="Surname"
            id="surname"
            onChange={(e) => inputChanged("surname", e.target.value)}
            
          />
          <input
            type="text"
            placeholder="Address"
            id="address"
            onChange={(e) => inputChanged("address", e.target.value)}
           
          />
          <input
            type="text"
            placeholder="Email"
            id="email"
            onChange={(e) => inputChanged("email", e.target.value)}
            
          />
         
          <input
            type="text"
            placeholder="Phone No."
            id="phone"
            onChange={(e) => inputChanged("phoneno", e.target.value)}
            
          />
         
            <div>
              <button className="editInfo-button" ><a href="/shop">
                Update New Info</a>
              </button>
              
            </div>
            </div>
            </div>
       )   
  };
  
  export default EditInfo;