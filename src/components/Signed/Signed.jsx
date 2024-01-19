// import React from 'react';
import './Signed.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faEuroSign } from '@fortawesome/free-solid-svg-icons';
import { faBangladeshiTakaSign } from '@fortawesome/free-solid-svg-icons';
const Signed = (prop) => {
    const playerCart=prop.playerCart;
    const ClearCart = prop.ClearCart;

    let totalPrice=0;
    for(const player of playerCart){
        totalPrice += player.price;
    }

    let taka=totalPrice*(119.47);

    return (
        <div className="SignedContainer">
            <h3>Total Player <FontAwesomeIcon icon={faArrowRight} style={{color: "#ffffff"}} />  {playerCart.length}</h3>
            <h3>Total Price <FontAwesomeIcon icon={faArrowRight} style={{color: "#ffffff"}} />  {totalPrice} <FontAwesomeIcon icon={faEuroSign} style={{color: "#ffffff",}} /></h3>
            <h3>Total Price <FontAwesomeIcon icon={faArrowRight} style={{color: "#ffffff"}} />  {taka.toFixed(2)} <FontAwesomeIcon icon={faBangladeshiTakaSign} style={{color: "#ffffff",}} /></h3>
           
            <button onClick={()=>{ClearCart()}} className="btn-clear btn">Clear Cart  <FontAwesomeIcon icon={faTrash} style={{color: "#ffffff"}} /></button>
            <button className="btn-review btn">Review Signed   <FontAwesomeIcon icon={faArrowAltCircleRight} style={{color: "#ffffff"}} /></button>
        </div>
    );
};

export default Signed;