import React from "react";
import "./Card.css";


export default function Card({ image, name, id, continent }){
  return (
    <React.Fragment>                                           
    <div className="card">
      <div className="cardHeader">
        <img src={image} alt="img not found"/>
        <button className="span">{name}</button>
        <div className="cardBody0">{id}</div>
        <div className="cardBody">Continent:<br></br>{continent}</div>
      </div>
    </div>
    </React.Fragment>
  );
}