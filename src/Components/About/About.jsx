import React from 'react'
import './About.css'
import img from '../../images/about.png'
import BtnContact from '../BtnContact/BtnContact';
export default function About() {
    return (
        <div className='About'>
            <img src={img} alt="image about" />
            <div className='abouText'>
                <h3>ABOUT OUR COMPANY</h3>
                <h1>52 YEARS OF EXPERIENCE IN HAIR CUTTING!</h1>
                <p>Brook presents its services with flexible, convenient and cdpoe designs. You can select your favorite designs and elements to create ts with unlimited customization possibilities. Pixel reproduction of designers is intended.</p>
                <BtnContact />
            </div>
        </div>
    )
}
