// import React from 'react';
import './Player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol } from '@fortawesome/free-solid-svg-icons';
import { faEuroSign } from '@fortawesome/free-solid-svg-icons';

const Player = (prop) => {
    // console.log(prop.player)
     const {img,name,Position,price,age,currentClub}=prop.player;
     const SignedToCart=prop.SignedToCart;
     

    return (
        <div className="player">
            <img src={img} alt="player"/>
            <div className="PlayerDetails">
                <h4>Name: {name}</h4>
                <p>Age: {age}</p>
                <p>Position: {Position}</p>
                <p>Current Club: {currentClub}</p>
                <p>Price: {price} <FontAwesomeIcon icon={faEuroSign} style={{color: "#454440",}} /></p>
               
            </div>
            <button onClick={()=>SignedToCart(prop.player)} className="btn-sign"><FontAwesomeIcon icon={faFutbol} style={{color: "#ffffff"}} /><br></br>S<br></br>I<br></br>G<br></br>N</button>
        </div>
    );
};

export default Player;