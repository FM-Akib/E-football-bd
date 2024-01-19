// import React from 'react';
import './Signed.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const Signed = () => {
    return (
        <div className="SignedContainer">
            <h3>Total Player <FontAwesomeIcon icon={faArrowRight} style={{color: "#ffffff"}} /> </h3>
            <h3>Total Price <FontAwesomeIcon icon={faArrowRight} style={{color: "#ffffff"}} /> </h3>
           
            <button className="btn-clear btn">Clear Cart  <FontAwesomeIcon icon={faTrash} style={{color: "#ffffff"}} /></button>
            <button className="btn-review btn">Review Signed   <FontAwesomeIcon icon={faArrowAltCircleRight} style={{color: "#ffffff"}} /></button>
        </div>
    );
};

export default Signed;