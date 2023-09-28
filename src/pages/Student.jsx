import React from "react";
import { useState } from "react";
import "../pages/css/Login.css";
import user from "../img/user.png";
import passwordImg from "../img/password.png";
import Navbarmenu from "../Components/Navbarmenu";

const Student = () => {
  const [regno, setRegno] = useState();
  const [password, setPassword] = useState();

  async function Login(event) {
    event.preventDefault();

    const res = await fetch(`http://localhost:7777/api/login-student`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        regno,
        password,
      }),
    });
    console.log(res);
    const data = await res.json();
    console.log(data);
    if (data) {
      alert("success");
      window.location.href = "/student-dashboard";
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
            <div className="text">Student Login</div>
            <div className="underline"></div>
          </div>
          <form>
            <div className="inputs">
              <div className="input">
                <img src={user} alt="" />
                <input
                  value={regno}
                  onChange={(e) => setRegno(e.target.value)}
                  type="text"
                  placeholder="Register Number"
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
            <div className="forgot-pass">
              Forgot Password?<span>Click Here</span>
            </div>
            <div onClick={Login} className="submit-cont">
              <div className="submit">Login</div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Student;
