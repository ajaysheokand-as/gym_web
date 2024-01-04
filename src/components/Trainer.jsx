import React from 'react'
import { ts } from '../data/TrainerStaff'
const Trainer = () => {
    return (


        <>
            <div className='staff'>
                <h1 >Trainers staff</h1>
                <div className='trainers'>
                    {
                        ts.map((item,index)=>{
                            return(
                                <div key={index} className='staff1'>
                                    <img src={item.img} alt="" />
                                    <p className='name'>{item.name}</p>
                                    <p className='icons'>{item.account}</p>
                                </div>
                            )
                        })
                    }
                </div>
                </div>
        </>

    )
}

export default Trainer
