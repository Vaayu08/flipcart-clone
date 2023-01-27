import React from "react";
import { useState } from "react";
// import userContext from'./userContext';
import { useEffect } from "react";
import "./Header.css";

const Header = ({}) => {
  const [userName, setUserName] = useState();

  // useEffect(()=>{
  //   const dbUser = JSON.parse(localStorage.getItem("userData"))
  //   if(dbUser){
  //     setUserName(dbUser.name);
  //   }
  // },[]);
  return (
    <div id="Navbar">
        <div>
            <a href="">home</a>
            <a href="">kids</a>
            <a href="">mens</a>
        </div>
      <div>
        <i class="fa-solid fa-magnifying-glass"></i>
        <input placeholder="Search For Anything" search for anything />
      </div>
      <div>
        <button>
          <a href="./Products">products</a>
        </button>
        <button>
          <a href="./Cart">cart</a>
          <i class="fa-solid fa-cart-shopping fa-xl"></i>
        </button>
        <button>
          <a href="./wishlist">wishlist</a>
          <i class="fa-solid fa-cart-shopping fa-xl"></i>
        </button>
      </div>
    </div>
  );
};

export default Header;
