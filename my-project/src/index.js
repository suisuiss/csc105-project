import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LogIn from"./Components/LogIn/LogIn";
import SignUp from"./Components/SignUp/SignUp";
import Shop from './Components/Shop/Shop'

ReactDOM.render(
  <React.StrictMode>
  <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

