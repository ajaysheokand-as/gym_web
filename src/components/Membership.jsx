import React from 'react';
import { gM } from "../data/gymMem";
import Tick from "../assets/material-symbols_check-circle-outline-rounded.jpg"

const Membership = () => {
    return (
        <>
            <div className='mem'>
                <h1>Gym Membership</h1>
                <div className='membership-card1'>
                    {gM.map((item, index) => (
                        <div key={index} className='card1'>
                            <div>
                                <h3 className='card1-title'>{item.pass}</h3>
                                <h4>{item.price}</h4>


                                {item.info.map((info, infoIndex) => (

                                    <div className='tick'>
                                        <img src={Tick} alt="" />

                                        <p key={infoIndex}>{info}</p></div>
                                ))}

                            </div>

                            <div className='btn'>

                                <button>Buy</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Membership;
