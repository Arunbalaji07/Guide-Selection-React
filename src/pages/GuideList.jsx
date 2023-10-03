import React from "react";
import "./css/GuideList.css";
import Navbarmenu from "../Components/Navbarmenu";
import Subhashini from "../img/subhashini.jpg";
import Revathy from "../img/revathy.jpg";
import MaryGlandance from "../img/mary-gladance.jpg";
import Geetha from "../img/geetha.jpg";
import SundaraVelRani from "../img/sundara-velrani.jpg";
import Ramalakshmi from "../img/ramalakshmi.jpg";
import Sathyaraj from "../img/sathyaraj.jpeg";
import RaviKarthick from "../img/ravi-karthick.jpeg";
import RubyAngel from "../img/ruby-angel.jpg";
import Sageengrana from "../img/sageengrana.jpeg";
import SivaSakthi from "../img/sivasakthi.jpg";
import Jenitha from "../img/jenitha.jpg";
import Jeyanthi from "../img/jeyanthi.jpg";
import Rajasekar from "../img/Rajasekar.jpeg";
import Kamtchi from "../img/Kamtchi.jpeg";

const Guides = [
  {
    img: Subhashini,
    name: "Dr.R.Subhashini",
    description: "AI, Machine Learning, Deep Learning",
    id: 1,
  },
  {
    img: Revathy,
    name: "Dr.S.Revathy",
    description: "AI, Machine Learning, Deep Learning",
    id: 2,
  },
  {
    img: MaryGlandance,
    name: "Dr.L.Mary Gladence",
    description: "AI, Machine Learning",
    id: 3,
  },
  {
    img: Jeyanthi,
    name: "Dr.P.Jeyanthi",
    description: "Image Mining, Cloud Computing, AI",
    id: 4,
  },
  {
    img: Geetha,
    name: "Ms.C.Geetha",
    description: "Data Mining",
    id: 5,
  },
  {
    img: SundaraVelRani,
    name: "Dr.K.Sundaravel Rani",
    description: "Network secrurity",
    id: 6,
  },
  {
    img: Rajasekar,
    name: "Dr.Rajasekar",
    description: "Cloud Computing",
    id: 7,
  },
  {
    img: Kamtchi,
    name: "Dr.Kamtchi K S",
    description: "Cyber Security, AI, IOT",
    id: 8,
  },
  {
    img: Ramalakshmi,
    name: "Ms.D.Ramalakshmi",
    description: "Data Mining",
    id: 9,
  },
  {
    img: Jenitha,
    name: "Ms.J.Merlin Mary Jenitha",
    description: "AI, Machine Learning, Deep Learning",
    id: 10,
  },
  {
    img: Sathyaraj,
    name: "Dr.A.Sathiyaraj",
    description: "Networking, Data Science ",
    id: 11,
  },
  {
    img: Sageengrana,
    name: "Ms.Sageengrana",
    description: "AI, Machine Learning, Deep Learning",
    id: 12,
  },
  {
    img: SivaSakthi,
    name: "Dr.D.Adhimuga Sivasakthi",
    description: "Wireless Communication",
    id: 13,
  },
  {
    img: RaviKarthick,
    name: "Mr.R.Ravi Karthick",
    description: "Wireless Networks",
    id: 14,
  },
  {
    img: RubyAngel,
    name: "Ms. T G Ruby Angel",
    description: "Cloud Computing",
    id: 15,
  },
];

const GuideList = () => {
  return (
    <>
      <Navbarmenu />
      <h2 className="title">Guides</h2>
      <div className="guides">
        {Guides.map((guide) => {
          return <Guide {...guide}></Guide>;
        })}
      </div>
    </>
  );
};

const Guide = (props) => {
  const { img, name, description } = props;
  return (
    <>
      <div className="guide">
        <img src={img} alt={name}></img>
        <h2 id="s-name">{name}</h2>
        <h2 id="s-desc">{description}</h2>
      </div>
    </>
  );
};

export default GuideList;
