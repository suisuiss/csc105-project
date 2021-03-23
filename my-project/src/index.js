import React, { Component } from 'react';
import App from './App';
import { BrowserRouter, Router,Route, Link } from "react-router-dom";
import {browserHistory} from 'react-router';
import ReactDOM ,{render} from 'react-dom';




ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
  <App/>
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

