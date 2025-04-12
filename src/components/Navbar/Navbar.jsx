import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'



const navbar = ({setShowLogin}) => {
    const [menu,setMenu] = useState("home")
  return (
    <div className='nav'>
      <img src={assets.logo} alt="" className="logo" />
      <ul className="nav-menu">
        <Link to ='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
        <a href='#exp-menu' onClick={()=>setMenu("menu")}  className={menu==="menu"?"active":""}>Menu</a>
        <a href='#app-Download' onClick={()=>setMenu("mobile")}  className={menu==="mobile"?"active":""}>Mobile App</a>
        <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact Us</a>
      </ul>
      <div className="nav-right">
        <img src={assets.search_icon} alt="" className="search" />
        <div className="nav-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button onClick={()=>setShowLogin(true)} >Sign In</button>
      </div>
    </div>
  )
}

export default navbar
