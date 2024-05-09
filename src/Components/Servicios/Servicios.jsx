import React from 'react';
import './Servicios.css';
import img from '../../images/icon.png';
import BtnContact from '../BtnContact/BtnContact';
import TitleSection from '../TitleSection/TitleSection';
export default function Servicios() {
    const servicios = [
        { title: 'Stylish haircut', text: 'Sorem sempus sempus the pain is accepted and won, but at such a moment they fall like work.', image: img },
        { title: 'Body massage', text: 'Sorem sempus sempus the pain is accepted and won, but at such a moment they fall like work.', image: img },
        { title: 'Breard style', text: 'Sorem sempus sempus the pain is accepted and won, but at such a moment they fall like work.', image: img },

    ];

    return (
        <div className='ServiciosContain'>

            <TitleSection section="OUR BEST SERVICES WE OFFER YOU" text="They are more difficult to pursue, prevents the choice of any discomfort, repulses the pains and sufferings that accuse" />
            <div className='cards'>
                {servicios.map((servicio, index) => (
                    <div className="servicios-card" key={index}>
                        <img src={servicio.image} alt={servicio.text} />
                        <h3>{servicio.title}</h3>
                        <p>{servicio.text}</p>
                    </div>
                ))}
            </div>
            <BtnContact />
        </div>
    );
}
