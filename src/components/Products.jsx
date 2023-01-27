import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Products.css'
import { toast } from 'react-hot-toast';
import Header from './Header';

const Products = () => {
    const [movies, setMovies] = useState();
    const router=useNavigate();
    useEffect(() => {
        async function gettingData() {
            const { data } = await axios.get("https://fakestoreapi.com/products");
            // const { data } = await axios.get("https://fakestoreapi.com/products?sort=desc");
            // const { data } = await axios.get("https://fakestoreapi.com/products?limit=5'");
            // const { data } = await axios.get("https://fakestoreapi.com/products");

            // console.log(data, "data here");
            setMovies(data);
        }
        gettingData();
    }, []);
    // ---------------------Buy buttion subscribe---------------------------

    function addToCart(e){
        console.log(e,"jsx is here");
        // -----------create empty array we can store all data-----------------
        // var proFromLocalStorage =[];
        // undefine assel tar empty aaray set krnar 27 line []
       const proFromLocalStorage = JSON.parse(localStorage.getItem("cartProducts")) || [];
        proFromLocalStorage.push(e);
        localStorage.setItem("cartProducts",JSON.stringify(proFromLocalStorage))
        toast.success("Products added to Cart");
    }


    return (
        <div id='ProCart'>
            <Header/>
            <h1 className='heading'>All PRODUCTS</h1> 
             <button id="CARTButton" onClick={()=>router('/Cart')}>CART</button>
            <div id='ProductsFlex'>
                <div id='ContainerProducts'>
                    FILTER
                  
                
                </div>
               
                <div id='ChildContainer'>
                    {movies && movies.map((e, i) => (
                        <div key={i} id='mainkeyproducts'>
                            <div id='productsAll'>
                                <div>
                                    <img src={e.image} alt="Loading" />
                                </div>
                                <div className='title'>
                                    <h3>{e.title}</h3>
                                </div>
                                <div className='year'>
                                    <p>{e.category}</p>
                                </div>
                                <div className='Runtime'>
                                    <p>{e.price}</p>
                                </div >
                                <div className='Runtime'>
                                    <p>{e.id}</p>
                                </div >
                                {/* <div className='Runtime'>
                                    <p>{e.description}</p>
                                </div > */}
                                <div className='buttion'>
                                    <button onClick={()=>addToCart(e)}>AddCart</button>
                                </div >
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Products