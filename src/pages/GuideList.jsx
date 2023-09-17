import React from "react";
import person from "../img/person.jpeg";
import "./css/GuideList.css";
import Navbarmenu from "../Components/Navbarmenu"

const Guides = [
  {
    img: person,
    name: "Staff 1",
    description: "Specilization",
    id: 1,
  },
  {
    img: person,
    name: "Staff 2",
    description: "Specilization",
    id: 2,
  },
  {
    img: person,
    name: "Staff 3",
    description: "Specilization",
    id: 3,
  },
  {
    img: person,
    name: "Staff 4",
    description: "Specilization",
    id: 4,
  },
  {
    img: person,
    name: "Staff 5",
    description: "Specilization",
    id: 5,
  },
  {
    img: person,
    name: "Staff 6",
    description: "Specilization",
    id: 6,
  },
  {
    img: person,
    name: "Staff 7",
    description: "Specilization",
    id: 7,
  },
  {
    img: person,
    name: "Staff 8",
    description: "Specilization",
    id: 8,
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
