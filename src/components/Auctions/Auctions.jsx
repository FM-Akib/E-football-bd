// import React from 'react';
import { useState } from 'react';
import './Auctions.css';
import { useEffect } from 'react';
import Player from '../Player/Player';
import Signed from '../Signed/Signed';

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
             <Signed></Signed>
            </div>
            
        </div>
    );
};

export default Auctions;