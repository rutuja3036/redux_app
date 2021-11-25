import { configureStore } from '@reduxjs/toolkit';
import React, { useReducer } from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import useReducer from "./features/user";
import themeReducer from "./features/user";

 
const store = configureStore({
  reducer:{
    user:useReducer,
    theme:themeReducer,
  },
})
ReactDOM.render(
  <React.StrictMode>
    <Provider>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
