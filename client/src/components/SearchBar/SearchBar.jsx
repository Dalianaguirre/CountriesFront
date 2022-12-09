import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchNameCountry } from "../../redux/actions";
import "./SearchBar.css";


export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");      //estado local
  

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);                 //el value del input toma el value del setName del useState
    console.log(name);                       //console el estado name
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    if (name.length === 0) return alert('You should introduce a country name');
    dispatch(searchNameCountry(name));       //despacho la accion con el name que escribe el usuario
    setName("")                              //LIMPIO LA CASILLITA DEL INPUT CUANDO CAMBIO EL ESTADO POR EJ. CUANDO REFRESCO ALLCOUNTRIES
  }

  return (
    <div className="container">

      <input className="search" onChange={(e) => handleInputChange(e)} type="text" value={name} placeholder="Country name..."/>
      <button className="buttonSrc" onClick={(e) => handleOnSubmit(e)} type="submit">
        Search
      </button>

    </div>
  );
}