import React from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Navbar from './Navbar';
import Fruits from './Fruits';
import Veggies from './Veggies';
import Fetchproducts from './Fetchproducts';
import Form from "./Form";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/'>
      <Form />
      </Route>

      <Route path='/Fetchproducts' element={<Fetchproducts/>}>
      <Fetchproducts />
      </Route>

      <Route path='/Fruits' element={<Fruits/>}>
      <Fruits />
      </Route>

      <Route path='/Veggies' >
      <Veggies />
      </Route>

      </Routes> 
  </BrowserRouter>
  </div>
  );
}

export default App;