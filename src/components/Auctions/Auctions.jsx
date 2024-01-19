// import React from 'react';
import { useState } from 'react';
import './Auctions.css';
import { useEffect } from 'react';
import Player from '../Player/Player';
import Signed from '../Signed/Signed';
import {AddToCart, getpreviousCart} from '../../utilities/utilities'

const Auctions = () => {
    const [players,setPlayers] = useState([])
    const [playerCart,setPlayerCart]=useState([])

    useEffect(()=>{
        fetch('players.json')
        .then(response => response.json())
        .then(data => setPlayers(data));
    },[])


    useEffect(()=>{
        const previousCart=getpreviousCart();
        const savedCart=[];

        for(const id in previousCart){
            const savedPalyer=players.find(p => p.id === id)
            if(savedPalyer){
                // setPlayerCart(savedCart)
                savedCart.push(savedPalyer);
                // console.log(savedPalyer);
            }
        }
        setPlayerCart(savedCart)
    },[players])


    const SignedToCart=(player)=>{
        for(const cartPayer of playerCart){
            if(cartPayer.id === player.id){
                alert('Player Already Signed!!');
                return;
            }
        }
       const newPlayerCart=[...playerCart,player];
       setPlayerCart(newPlayerCart); 
       AddToCart(player.id);
   }

   const ClearCart=()=>{
    localStorage.removeItem('playerCart');
    setPlayerCart([])

   }
    return (
        <div className="Auctions">

            <div className="Players">
                {
                    players.map(player => <Player
                    player={player}
                    SignedToCart={SignedToCart}
                    key={player.id}
                    ></Player> )
                }
                 
            </div>
            <div className="SignedCart">
             <Signed playerCart={playerCart}
             ClearCart={ClearCart}
             ></Signed>
            </div>
            
        </div>
    );
};

export default Auctions;