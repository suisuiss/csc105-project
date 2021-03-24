import React, { Component } from 'react';
import LogIn from './Components/LogIn/LogIn';
import Shop from './Components/Shop/Shop';
import SignUp from './Components/SignUp/SignUp';
import { Route } from 'react-router-dom';
import { Menclothes } from './Components/Shop/Menclothes/Menclothes';
import { Womenclothes } from './Components/Shop/WomenClothes/WomenClothes';
import { Accessories } from './Components/Shop/Accessories/Accessories';
import { Gadgets } from './Components/Shop/Gadgets/Gadgets';
import { Snacks } from './Components/Shop/Snacks/Snacks';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={LogIn} />
        <Route path='/shop' component={Shop} />
        <Route path='/signup' component={SignUp} />
        <Route path='/menclothes' component={Menclothes} />
        <Route path='/womenclothes' component={Womenclothes} />
        <Route path='/accessories' component={Accessories} />
        <Route path='/gadgets' component={Gadgets} />
        <Route path='/snacks' component={Snacks}/>
      </div>
    );
  }
}
export default App;
