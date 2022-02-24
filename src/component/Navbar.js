import React from 'react'
import './Insta.css'
import imglogo from './img/logo.PNG'
import home from './img/home.PNG'
import messenger from './img/messenger.PNG'
import add from './img/add.PNG'
import explore from './img/explore.PNG'
import like from './img/like.PNG'

function Navbar() {
  return (
    <div className="navbar">
        <div className="nav-wrapper">
            <img src={imglogo} className="brand-img" alt="" />
            <input type="text" name=""  className="search-box" id="" placeholder="search" />
            <div className="nav-items">
                <img src={home} className="icon" alt="" />
                <img src={messenger} className="icon" alt="" />
                <img src={add} className="icon" alt="" />
                <img src={explore} className="icon" alt="" />
                <img src={like} className="icon" alt="" />
                <div className="icon user-profile">
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar;