import React from "react";
import bg from "../img/background.jpg";
import Navbarmenu from "../Components/Navbarmenu";
const Home = () => {
  return (
    <div>
      <Navbarmenu />
      <img src={bg} alt="background-image" />
    </div>
  );
};
export default Home;
