import React, { Component } from 'react';
import LogIn from './Components/LogIn/LogIn';
import Shop from './Components/Shop/Shop';
import SignUp from './Components/SignUp/SignUp';
import {Route} from 'react-router-dom';
import { Menclothes } from './Components/Shop/Menclothes/Menclothes';
class App extends Component {
  render(){
  return (
    <div>
    <Route exact path ="/" component ={LogIn}/>
    <Route path ='/shop' component = {Shop}/> 
    <Route path ='/signup' component = {SignUp}/>
    <Route path ='/menclothes' component = {Menclothes}/>
    </div>
  );
}
}
export default App;
