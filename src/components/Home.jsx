import React,{useEffect , useState} from 'react'
// import React from 'react'
import Footer from './Footer'
import Header from './Header'
// import axios from 'axios'
// import Body from './Body'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const router = useNavigate();
  return (
    <div>
        <Header/>
        {/* <button onClick={()=>router("/Products")} >Click</button> */}
        {/* <Footer/> */}
        {/* <Body/> */}
    </div>

  )
}

export default Home