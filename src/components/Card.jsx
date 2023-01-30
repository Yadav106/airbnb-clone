import React from "react";
import './Card.css'
import star from '../../public/images/star.png'

export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.img} className='card--image'/>
            <div className="card--rating">
                <img src={star} className='card--star'/>
                <p id="stars">{props.stars}</p>
                <p id="rating">({props.rcount})</p>
                <p id="country">{props.location}</p>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><b>From ${props.price}</b>/person</p>
        </div>
    )
}