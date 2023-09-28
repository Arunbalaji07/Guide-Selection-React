import React, { useState } from "react";
import "../pages/css/Login.css";
import user from "../img/user.png";
import passwordImg from "../img/password.png";
import Navbarmenu from "../Components/Navbarmenu";

const Admin = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function Login(event) {
    event.preventDefault();

    const res = await fetch(`http://localhost:7777/api/login-admin`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    console.log(res);
    const data = await res.json();
    console.log(data);
    if (data) {
      alert("success");
      window.location.href = "/admin-dashboard";
    } else {
      alert("error");
    }

    // console.log(data);
  }

  return (
    <div>
      <Navbarmenu />
      <div className="sec__one">
        <div className="form">
          <div className="header">
            <div className="text">Admin Login</div>
            <div className="underline"></div>
          </div>
          <form>
            <div className="inputs">
              <div className="input">
                <img src={user} alt="" />
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email Address"
                  required
                />
              </div>
              <div className="input">
                <img src={passwordImg} alt="" />
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                  required
                />
              </div>
            </div>
            <div className="submit-cont">
              <div onClick={Login} className="submit">
                Login
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admin;
