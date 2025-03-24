import React from 'react';
import {useHistory} from "react";
import { useNavigate } from 'react-router-dom';

function Hero (){
    const navigate = useNavigate();

    const clickHandler = () =>{
        navigate('/booking');
    };

    return(
        <section>
        <h1>Welcome to Our Little Lemon Restaurant</h1>
        <p>Chicago</p>
        <p>Enjoy our delicious menu and cozy ambiance.</p>
        <button onClick = {clickHandler}> Book Now! </button>
        </section>
    );
}

export default Hero;