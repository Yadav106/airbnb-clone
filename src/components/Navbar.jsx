import React from "react";
import logo from "../../public/images/airbnb-logo.png"
import './Navbar.css'

export default function Navbar() {
    return (
        <div className="nav">
            <img src={logo} className='nav--logo'/>
        </div>
    )
}