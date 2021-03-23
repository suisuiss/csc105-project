import React, { Component } from 'react';
import App from './App';
import { BrowserRouter, Router,Route, Link } from "react-router-dom";
import {browserHistory} from 'react-router';
import ReactDOM ,{render} from 'react-dom';
import LogIn from"./Components/LogIn/LogIn";
import SignUp from"./Components/SignUp/SignUp";
import Shop from './Components/Shop/Shop';



ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
  <App/>
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

