import React from "react";
import '../pages/css/Login.css';
import user from '../img/user.png';
import password from '../img/password.png';

const Admin = () => {
  return (
    <div className="sec__one">
      <div className="form">
        <div className="header">
          <div className="text">Login</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src={user} alt="" />
            <input type="email" placeholder="Email Address" required />
          </div>
          <div className="input">
            <img src={password} alt="" />
            <input type="password" placeholder="Password" required />
          </div>
        </div>
        <div className="submit-cont">
          <div className="submit">Login</div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
