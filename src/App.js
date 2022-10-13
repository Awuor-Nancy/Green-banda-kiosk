import React from "react";
import { BrowserRouter,Route, Switch } from "react-router-dom";
import Navbar from './Navbar';
import Fruits from './Fruits';
import Veggies from './Veggies';
import Products from './Fetchproducts';
import Form from "./Form";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path to='/'>
      <Form />
      </Route>

      <Route path ='/products'> 
      <Products />
      </Route>

      <Route path ='/fruits'>
      <Fruits />
      </Route>

      <Route path ='/veggies' >
      <Veggies />
      </Route>

      </Switch> 
  </BrowserRouter>
  </div>
  );
}

export default App;