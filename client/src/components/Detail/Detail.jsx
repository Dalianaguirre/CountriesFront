import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getCountryDetail } from "../../redux/actions";
import Loading from '../Loading/Loading';
import "./Detail.css";

export default function Detail(props) {
  console.log(props)
  const dispatch = useDispatch();
  let { id } = useParams();

  useEffect(() => {                                           //traigo el detalle según el id del pais               
    dispatch(getCountryDetail(id));
  }, [dispatch, id]);

  let myCountry = useSelector((state) => state.detail);     //traigo mi pais "detalle" del reducer
  
  return (
    
      <div className="containerr">
        <h1 className="title">COUNTRY</h1>
        <div className="cardDetailL">
        
        { myCountry[0] ? 
        <div className="cardRight">
          <img src={myCountry[0]?.flag} alt={myCountry[0]?.flag}/>
          <h1>{myCountry[0].name}</h1>
          <h4>Continent:{myCountry[0].continent}</h4>
          <h4>Capital:{myCountry[0].capital}</h4>
          <h4>Subregion:{myCountry[0].subregion}</h4>
          <h4>Area:{myCountry[0].area + " km2"}</h4>
          <h4>Population:{myCountry[0].population}</h4>
          <h3>Id:{myCountry[0].id}</h3>
        </div>
          : 
          <Loading />
        }

        <div>
              {
                myCountry[0]?.activities.map(a => 
                  <div key={a.name}>
                    <h2>{a.name}</h2>
                    <h4>difficulty:{a.difficulty}</h4>
                    <h4>duration:{a.duration} hours</h4>
                    <h4>season:{a.season}</h4>
                  </div>
                )
              }
        </div>

          <Link to="/home" className="backButton">
            <button>Back</button>
          </Link>

          </div>
      </div>

  );
}
