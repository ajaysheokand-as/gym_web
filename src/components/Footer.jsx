import React from 'react'
import { FoooterMiddle, FooterLeft, FooterRight } from '../data/Footer';
const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='footer-right'>{
                    FooterRight.map((item, index) => {
                        return (
                            <div key={index}>
                                <h1>{item.title}</h1>
                                <p>{item.information}</p>
                            </div>
                        )
                    })}
                </div>
                <div className='footer-middle'>
                    {
                        FoooterMiddle.map((item, index) => {
                            return (
                                <div key={index}>
                                    <h1>{item.title}</h1>
                                    <p>{item.information}</p>
                                </div>
                            )
                        })}
                </div>
                <div className='footer-left'>
                    {FooterLeft.map((item, index) => {
                        return (
                            <div key={index}>
                                <h1>{item.title}</h1>
                                <p className='mail'>
                                    {item.information}
                                </p>
                                <span className='icons2'>{item.icons}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Footer
