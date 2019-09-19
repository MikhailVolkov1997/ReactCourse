import React from 'react';
import Product from './product';
import Basket from './basket';
import {BrowserRouter, Route} from "react-router-dom"
import Home from './Home';
import AddProduct from './addProduct';




function App() {
  return (
  <BrowserRouter>
      <Route path='/' component={Home} />
      <Route path='/product'  component={Product}  />
      <Route path='/basket'  component={Basket}  />
      <Route path='/addproduct' component={AddProduct}/>

  </BrowserRouter>
  )
}

export default  App;