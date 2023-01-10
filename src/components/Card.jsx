import React from "react";
import './Card.css'
import star from '../../public/images/star.png'

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.img} className='card--image'/>
            <div className="card--rating">
                <img src={star} className='card--star'/>
                <p id="stars">{props.stars}</p>
                <p id="rating">({props.rcount}).</p>
                <p id="country">{props.location}</p>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><b>From ${props.price}</b>/person</p>
        </div>
    )
}