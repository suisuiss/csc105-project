import React from 'react';
import "./MyInfo.css";
export const MyInfo = () => {
    return (
        <div>
            <div className="logo">
          Daily Deal
          <p>your best shopping centre</p>
          <div className="myInfo">
              <p>My Info</p>
              <div className="name">Name 
              <div id="name">
              </div>
              </div>
              <div className="surname">Surname 
              <div id="surname">
              </div>
              <div className="address">Address 
              <div id="address">
              </div>
              </div>
              <div className="phoneNo">Phone No. 
              <div id="phoneNo">
              </div>
              </div>
              <div className="email">Email 
              <div id="email">
              </div>
              </div>
              <button id="editInfo"><a href="/editInfo">Edit Info</a>
          </button>
          </div>
        </div>
        </div>
        </div>
    )
}
