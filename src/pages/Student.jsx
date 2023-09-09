import React from "react";
import '../pages/css/Login.css';
import user from '../img/user.png';
import password from '../img/password.png';

const Student = () => {
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
          <input type="text" placeholder="Register Number" required />
        </div>
        <div className="input">
          <img src={password} alt="" />
          <input type="password" placeholder="Password" required/>
        </div>
      </div>
      <div className="forgot-pass">Forgot Password?<span>Click Here</span></div>
      <div className="submit-cont">
        <div className="submit">Login</div>
      </div>
      </div>
    </div>
  );
};
export default Student;
