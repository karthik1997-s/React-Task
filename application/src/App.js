import React  from 'react';
import './App.css';
import Header from './component/header';
import { Routes, Route } from 'react-router-dom';
import Home from '../src/component/Home';
import Products from "../src/component/products";
import Login from './component/Login.js';
import Register from './component/registerpage.js';

class App extends React.Component{
  render(){
    return(
      <div>
        {window.location.pathname !== "/login" && window.location.pathname !== "/register" ? <Header /> : null}
      <Routes>
      <Route path='/' element={<Home />} />
       <Route path='/Home' element={<Home />} />
       <Route path="/product" element={<Products/>} />
       <Route path="/login" element={<Login/>} />
       <Route path="/register" element={<Register/>} />
       </Routes> 
       </div>
     )
  }
}
 export default App