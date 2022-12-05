import axios from 'axios';

// Despacho mis tipos de acciones

export function getCountries(){
  return async function(dispatch){
    let json = await axios.get("http://localhost:3001/countries");     // puedo omitir el .get
    return dispatch({
      type: 'GET_COUNTRIES',
      payload: json.data
    })
  }
};

export function searchNameCountry(name){             //lo que me llega por query
  return async function (dispatch){
    try{
      let json = await axios.get(`http://localhost:3001/countries?name=${name}`);
      return dispatch({
        type: 'SEARCH_NAME_COUNTRY',
        payload: json.data
      })
    } catch(error) {
      console.log(error)
    }
  }
};

export function filterCountriesByContinent(payload){
  return {
    type: 'FILTER_BY_CONTINENT',
    payload
  }
};

export function getActivities() {
  return async function (dispatch) {
      try {
          let json = await axios.get("http://localhost:3001/activities");
          return dispatch({
            type: 'GET_ACTIVITIES', 
            payload: json.data
          })
      } catch(err) {
          console.log(err)
      }
  }
};

export function filterCountriesByActivity(payload){
  return {
    type: 'FILTER_BY_ACTIVITY',
    payload
  }
};

export function orderCountriesByName(payload){
  return {
    type: 'ORDER_BY_NAME',
    payload
  }
};

export function orderCountriesByPopulation(payload){
  return {
    type: 'ORDER_BY_POP',
    payload
  }
};

export function getCountryDetail(id) {
  return async function (dispatch) {
    try {
      let json = await axios.get(`http://localhost:3001/countries/${id}`);
      return dispatch({
        type: 'GET_DETAIL',
        payload: json.data
      })
    } catch(err) {
      console.log(err)
    }
  }
};






