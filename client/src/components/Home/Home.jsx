import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, getActivities, filterCountriesByContinent, filterCountriesByActivity, orderCountriesByName, orderCountriesByPopulation } from "../../redux/actions";
import { Link } from 'react-router-dom';
import Card from "../Card/Card";
import Pagination from '../Pagination/Pagination';
import SearchBar from "../SearchBar/SearchBar";
import "./Home.css";

export default function Home(){

  const dispatch = useDispatch()
  // con useSelector traigo todo lo que tenga el estado que me interesa
  const allCountries = useSelector((state) => state.countries)                
  const activities = useSelector((state) => state.activities)
  // estado local para ordenamiento
  const [order, setOrder] = useState("")                                       
  // estado local para paginado
  const [currentPage, setCurrentPage] = useState(1)                            
  const [countriesPerPage, setCountriesPerPage] = useState(10)                 
  const iOfLastCountry = currentPage * countriesPerPage                        // 10*1 = 10
  const iOfFirstCountry = iOfLastCountry - countriesPerPage                    // 10-10 = 0
  const currentCountries = allCountries.slice(iOfFirstCountry, iOfLastCountry) // currentCountries tiene los 10 paises que estan en la página actual, corto el array allCountries de a 10
                                                   //0             //10
  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  // Despacho las acciones o pedidos de orden / filtros cada vez que se actualiza uno de sus values y/o cuando se hace click en la option 
  useEffect(() => {                                                            // traigo del estado los countries cuando el componente se monta
    dispatch(getCountries());                                                  // despacho la accion
    dispatch(getActivities());
  }, [dispatch])                                                               // se monta y ejecuta cuando se le pase o suceda un dispatch

  // Recargar todos los countries
  function handleClick(e) {
    e.preventDefault()
    dispatch(getCountries())
  };

  // Filtrar por continente
  function handleFilterContinent(e){
    dispatch(filterCountriesByContinent(e.target.value))
  };

  // Filtrar por actividad
  function handleFilterActivity(e){
    e.preventDefault();
    if (e.target.value === "Filter by activity") {
        dispatch(getCountries());
    }else {
        dispatch(filterCountriesByActivity(e.target.value));
        setCurrentPage(1);         //seteo la pág en la 1
    }
  };

  // Ordenar alfabetica/
  function handleOrderAlphabetically(e){
    e.preventDefault();
    dispatch(orderCountriesByName(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordered ${e.target.value}`)            //modifico el estado local y renderizo
  };

  // Ordenar por población/
  function handleOrderPopulation(e){
    e.preventDefault();
    dispatch(orderCountriesByPopulation(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordered ${e.target.value}`)            //modifico el estado local y renderizo
  };




  return (
    <div className="home">
      <h1 className="title">COUNTRIES</h1>

      <div className="create">
        <Link to= '/activities' className="createTitle">Create tourist activity</Link>
      </div>
      
      <div className="btnReload">
        <button className="button" onClick={handleClick}>Reload all countries</button>
      </div>

      <SearchBar/>

      <div>
      <select className="selectBar" onChange={(e) => handleOrderAlphabetically(e)}>
          <option defaultValue>Order A-Z / Z-A</option>
          <option value='asc'>Ascending</option>
          <option value='desc'>Descending</option>
        </select>

        <select className="selectBar" onChange={(e) => handleOrderPopulation(e)}>
          <option defaultValue>Order by population</option>
          <option value='lower'>Lower to higher</option>
          <option value='higher'>Higher to lower</option>
        </select>

        <select className="selectBar" onChange={(e) => handleFilterContinent(e)}>
          <option defaultValue>Filter by continent</option>
          <option value="Africa">Africa</option>
          <option value="Antarctica">Antarctica</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="North America">North America</option>
          <option value="Oceania">Oceania</option>
          <option value="South America">South America</option>
        </select>

        <select className="selectBar" onChange={(e) => handleFilterActivity(e)}>
          <option value="Filter by activity">Filter by activity</option>
          {activities?.map((e) => 
          <option value={e.name} id={e.id}>{e.name}</option>)}
        </select>
      </div>
      
      <div className="cardContainer">
        {allCountries.length > 0 ? currentCountries.map((el) => { 
          return ( 
            <Link className="linkTodet" key={el.id} to={`countries/${el.id}`}>
              <Card
              key={el.id} 
              id={el.id} 
              name={el.name} 
              continent={el.continent} 
              image={el.flag}/>
            </Link>
          ) 
        }) : <div className="loading">
          <p> loading... </p>
            </div>
        }
      </div>

      <Pagination
        countriesPerPage={countriesPerPage}
        allCountries={allCountries.length}
        pagination={pagination}
        currentPage={currentPage}
      />

      <div class="barra-footer">
          &copy; Soy Henry - 2022
      </div>
    </div>


  )
  
}
