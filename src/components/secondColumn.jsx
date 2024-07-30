import React from "react";
import login from '../images/login.png';

export const SecondColumn = () => {
    return(
        <>
        <div className="second-grid-column">
            <div className="img-container">
                <img src={login} alt="" />
            </div>
            <div className="description">
                <p>To A Brighter Future With Agriculture</p>
            </div>
        </div>
    </>
    )
    
}