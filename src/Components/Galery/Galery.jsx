import React from 'react'
import './Galery.css'
import galery1 from '../../images/gallery1.png'
import galery2 from '../../images/gallery2.png'
import galery3 from '../../images/gallery3.png'
import TitleSection from '../TitleSection/TitleSection';
export default function Galery() {
    const galleryData = [

        {
            image: galery2,
        },
        {
            image: galery1,
        },
        {
            image: galery3,
        }
    ];
    return (
        <div className='Galery'>
            <TitleSection section="OUR AWARD-WINNING HAIRCUT EXPARTS FOR YOU" text="Let that wise man, who praises our present offices, have a desire to gain, anyone and anything. By the services of those who praise, the flight to pleasure is spurred, let error flee from those who are easy and often flee, blessed is anyone who does so." />

            <div className='galeryGrap'>
                {galleryData.map((item, index) => (
                    <div key={index}>
                        <img src={item.image} alt={`Gallery ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    )
}
