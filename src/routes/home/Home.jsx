import React from 'react';
import homeImage from '../../Images/homeImage.jpeg'
import './home.css'

export default function HomePage() {
    return (
        <div className="home">
                <div className="row1">
                    <h1><b>Book your slot for the upcoming ReactJS meetup</b></h1>
                    <button className="btn">Book your slot</button>
                </div>
                <div className="row2">
                    <img src={homeImage} />
                </div>
        </div>
    )
}