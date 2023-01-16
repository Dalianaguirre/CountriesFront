import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getCountryDetail, rebootDetail } from "../../redux/actions";
//import Loading from '../Loading/Loading';
import "./Detail.css";

export default function Detail(props) {
  console.log(props)
  const dispatch = useDispatch();
  let { id } = useParams();

  useEffect(() => {                                           //traigo el detalle según el id del pais               
    dispatch(getCountryDetail(id));
    dispatch(rebootDetail())                                 //limpio mi ruta para que no aparezca el detail anterior
  }, [dispatch]);

  let myCountry = useSelector((state) => state.detail);       //traigo mi pais "detalle" del reducer
  
  return (
    <div>
        <div className="containerr">
            <header className="header">
            <h1 className="title">COUNTRY</h1>
            </header>
            <div className="cardDetail">

                <div className="cardLeft">
                    <img className="imgDetail" src={myCountry.flag} alt = ""/>
                </div>

                <div className="cardRight">
                    <h1 className="titleDetail">{myCountry.name}</h1>
                    <ul>
                      <li>Id: {myCountry.id}</li>
                      <li>Continent: {myCountry.continent}</li>
                      <li>Capital: {myCountry.capital}</li>
                      <li>Subregion: {myCountry.subregion}</li>
                      <li>Area: {myCountry.area} km²</li>
                      <li>Population: {myCountry.population} people</li>
                    </ul>
                    
                    <div> {myCountry.activities?.map(act => {
                      return (
                        <div>
                          <h1 className="titleDetail">Tourist activity</h1>
                          <ul>
                            <li>Name: {act.name}</li>
                            <li>Difficulty: {act.difficulty}</li>
                            <li>Duration: {act.duration} minutes</li>
                            <li>Season: {act.season}</li>
                          </ul>
                        </div>
                      )
                    })}
                    </div>
                </div>

            </div>
        </div>
        <Link to="/home">
            <button className="backButtonDet">Back home</button>
        </Link>
    </div>
);
}


