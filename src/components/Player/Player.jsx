// import React from 'react';
import './Player.css';

const Player = (prop) => {
    console.log(prop.player)
     const {img,name,Position,price,age,currentClub}=prop.player;
    return (
        <div className="player">
            <img src={img} alt="player"/>
            <div className="PlayerDetails">
                <h4>Name: {name}</h4>
                <p>Age: {age}</p>
                <p>Position: {Position}</p>
                <p>Current Club: {currentClub}</p>
                <p>Price: {price}</p>
            </div>
        </div>
    );
};

export default Player;