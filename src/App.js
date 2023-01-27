// import { useState,creatContext } from "react";
import Home from './components/Home';
// import Header from "./components/Header";
// import Footer from './components/Footer';
// import userContext from "./components/userContext";
import {BrowserRouter , Routes, Route} from 'react-router-dom';
// import Header from './components/Header';
import Register from './components/Register';
import Cart from './components/Cart';
import Products from './components/Products';
import Login from './components/Login';
import Wishlist from './components/Wishlist';


function App(){
  
  return(
  
   <div>
    <BrowserRouter>
    <Routes>
      <Route path='/register'  element={<Register/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/Wishlist' element={<Wishlist/>}/>
    </Routes>
    </BrowserRouter>
   </div>
    );
}
export default App;