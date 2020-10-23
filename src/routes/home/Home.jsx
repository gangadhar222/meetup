import React from 'react';
import homeImage from '../../Images/homeImage.jpeg'
import { Link } from "react-router-dom";
import Button from '../../components/button/Button'
import './home.css'

export default function HomePage() {
    return (
        <div className="home">
                <div className="row1">
                    <h1><b>Book your slot for the upcoming ReactJS meetup</b></h1>
                    <Link to="/registration" ><Button label='Book your slot' /></Link>
                </div>
                <div className="row2">
                    <img src={homeImage} alt="img" />
                </div>
        </div>
    )
}