const initialState = {
  countries : [],
  allCountries: [],
  activities: [],
  detail: [],
}

//lógica siempre antes del return
function rootReducer (state= initialState, action){
  switch(action.type) {
    case 'GET_COUNTRIES':
      return{
        ...state,
        countries: action.payload,             // en mi estado cou. que al inicio es un array vacio, mando todo lo que me envie la accion GET_COUNTRIES y su payload
        allCountries: action.payload
      };

    case 'SEARCH_NAME_COUNTRY':
      return {
        ...state,
        countries: action.payload
      };


    case 'FILTER_BY_CONTINENT':
      const allCountries = state.allCountries   // para que mi filtro se ejecute siempre sobre allCountries y no sobre el filtro que ya se realizó
      const continentFiltered = action.payload === 'Filter by continent' 
          ? allCountries 
          : allCountries.filter(el => el.continent === action.payload)
      return{
        ...state,
        countries: continentFiltered
      };


    case 'GET_ACTIVITIES': 
      return {
        ...state,
        activities: action.payload
      };


    case 'FILTER_BY_ACTIVITY':
      const allCountries2 = state.allCountries;
      const activityFiltered = action.payload === 'Filter by activity' 
          ? allCountries2.filter((el) => el.activities.length > 0)
          : allCountries2.filter((el) => el.activities && el.activities.map((ac) => ac.name).includes(action.payload));
      return {
      ...state,
      countries: activityFiltered
      };


    case 'ORDER_BY_NAME':
      let countriesSorted = action.payload === "asc"
          ? state.countries.sort(function (a, b) {
              if (a.name > b.name) {return 1}       //lo ubico a la derecha
              if (b.name > a.name) {return -1}      //lo ubico a la izquierda
            return 0;                               //si son iguales lo dejo como está
          })
          : state.countries.sort(function (a, b) {  //sino es descendente
              if (a.name > b.name) {return -1}
              if (b.name > a.name) {return 1}
            return 0;
          })
      return {
        ...state,
        countries: countriesSorted,
      }; 


    case 'ORDER_BY_POP':
      let countriesSortedByPop = action.payload === "lower"
          ? state.countries.sort(function (a, b) {
              if (a.population > b.population) {return 1}       //lo ubico a la derecha
              if (b.population > a.population) {return -1}      //lo ubico a la izquierda
            return 0;                          
          })
          : state.countries.sort(function (a, b) {
              if (a.population > b.population) {return -1}
              if (b.population > a.population) {return 1}
            return 0;
          })
      return {
        ...state,
        countries: countriesSortedByPop,
      };


    case 'GET_DETAIL':
      return {
        ...state,
        detail: action.payload,
      };

    case 'RESET':
        return {
          ...state,
          detail: []
        }

    case 'POST_ACTIVITY':                 // no hace nada, me devuelve el estado como está
      return {
        ...state
      }


      default:
        return state;
  }
}

export default rootReducer;