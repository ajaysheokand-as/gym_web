import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import { rtj,  } from '../data/reasonToJoin';
const Join = () => {
  return (


    <div className='join'>

      <div className='upr-prt'>
        <h1>Reasons to join</h1></div>
      <div className='lower-part'>

    {   rtj.map((item,index)=>{
      return(
        <div key={index} className='box'>
          <img src={item.img} alt="" />
          <div className='small-box'>
          <h6>{item.title}</h6>
          <p>{item.description}</p>
          </div>
        </div>
      )
    })
    }
          </div>
        </div>

  )
}

export default Join
