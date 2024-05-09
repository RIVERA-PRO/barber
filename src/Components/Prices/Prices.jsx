import React from 'react'
import './Prices.css'
import img from '../../images/price.png'
import price from '../price'
export default function Prices() {
    return (
        <div className='Prices'>
            <img src={img} alt="image" />

            <div className='PriceText'>
                <h3> OUR BEST PRICE</h3>
                <h1>WE OFFER THE BEST PRICE IN TOWN!</h1>
                <div className='pricesGrap'>
                    {
                        price.map(item => (
                            <h5>{item.title}. . . . . . . . . .<span>${item.price}</span></h5>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
