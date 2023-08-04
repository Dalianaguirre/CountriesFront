import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import axios from 'axios'

//axios.defaults.baseURL = 'http://localhost:3001';      //para trabajar de manera local
axios.defaults.baseURL = 'https://countriesback-production-74ac.up.railway.app/';     //cuando queramos debugear o actualizar nuestro deploy del front. se conecta con el deploy del servidor deployado

ReactDOM.render(
  <Provider store={store}>
      <React.StrictMode>
          <App />
      </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
