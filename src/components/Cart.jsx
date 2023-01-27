import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
// import "./Cartstyle.css";
import Header from './Header';
const Cart = () => {
  const [cartProducts, setCartProducts] = useState();
  const router = useNavigate();

  useEffect(() => {
    const cartProFromStorage = JSON.parse(localStorage.getItem("cartProducts"));

    if (cartProFromStorage) {
      setCartProducts(cartProFromStorage);

    } else {
      toast.error("No Products Found")
    }
  }, []);
  // ------------------------usrlogin nassl tr login la ptu tyla---------------------------

  // useEffect(()=>{
  //   const isUserLogged = JSON.parse(localStorage.getItem("userData"));

  //   if(!isUserLogged){
  //     router('/login');
  //   }
  // })
  return (
    <div className='CartContainer'>
     
      <div id='CartpageDiveScond'>
    <h6>From Saved Addresses</h6>
     <button>Enter Delivery Pincode</button>
      </div>
      <div id='CartContainer'>
        {cartProducts && cartProducts.map((e, i) => (
          <div key={i}>
            <div id='keyCartPro'>
              <div className='left'>
                 <img src={e.image} alt="Loading" />
              </div>
              <div className='right'>
                <div className='Carttitle'>
                  <h3>{e.title}</h3>
                </div>
                <div className='Carblock'>
                  <div className='categoryCart'>
                    <p><span style={{color:"red"}}>Category:- </span>{e.category}</p>
                  </div>
                  <div className='priceCart'>
                    <p><span style={{color:"red"}}>Price:- </span>{e.price}</p>
                  </div >
                  <div className='idCart'>
                    <p><span style={{color:"red"}}>Id:- </span>{e.id}</p>
                    {/* <p><span style={{color:"red"}}>Id:- </span>{e.description}</p> */}
                  </div >
                  {/* <div className='idCart'>
                    <p>{e.description}</p>
                  </div > */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cart

