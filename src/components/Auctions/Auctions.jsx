// import React from 'react';
import { useState } from 'react';
import './Auctions.css';
import { useEffect } from 'react';
import Player from '../Player/Player';

const Auctions = () => {
    const [players,setPlayers] = useState([])
    useEffect(()=>{
        fetch('players.json')
        .then(response => response.json())
        .then(data => setPlayers(data));
    },[])
    console.log(players);
    return (
        <div className="Auctions">

            <div className="Players">
                {
                    players.map(player => <Player
                    player={player}
                    key={player.id}
                    ></Player> )
                }
                 
            </div>
            <div className="SignedCart">
                
            </div>
            
        </div>
    );
};

export default Auctions;