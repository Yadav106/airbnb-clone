import React from "react"
import grid from '../../public/images/photo-grid.png'
import './Hero.css'

export default function Hero() {
    return (
        <div className="hero">
            <img src={grid} className="hero--img"/>
            <h1 className="hero--title">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}