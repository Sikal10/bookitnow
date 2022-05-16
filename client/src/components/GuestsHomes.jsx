import React from 'react';
import {guestsHomes} from "../properties";

const GuestsHomes = () => {
    return (
        <div className={"guests__home"}>
            {guestsHomes.map((item, index) => <div className={"guests__home-item"}>
                    <img className={"guests__home-item-img"} src={item.img} alt=""/>
                    <h2>{item.name}</h2>
                    <p className={"guest-city"}>{item.city}</p>
                    <p className={"guest-price"}>Starting from ${item.price}</p>
                    <div className={"guest-rating"}>
                        <span>{item.rating} </span>
                        <p>Excellent</p>
                    </div>

            </div>)}
        </div>
    );
};

export default GuestsHomes;