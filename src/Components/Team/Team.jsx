import React from 'react';
import './Team.css';
import team1 from '../../images/team1.png';
import team2 from '../../images/team2.png';
import team3 from '../../images/team3.png';
import BtnContact from '../BtnContact/BtnContact';
import TitleSection from '../TitleSection/TitleSection';
export default function Team() {

    const teamData = [
        {
            image: team1,
            title: 'Juan Pérez',
            text: 'Barbero experimentado con más de 10 años de experiencia.'
        },
        {
            image: team2,
            title: 'María García',
            text: 'Estilista especializada en cortes de cabello modernos y tendencias de moda.'
        },
        {
            image: team3,
            title: 'Luis Rodríguez',
            text: 'Maestro en el arte del afeitado clásico y cuidado de la barba.'
        }
    ];
    return (
        <div className='Team'>
            <TitleSection section="OUR AWARD-WINNING HAIRCUT EXPARTS FOR YOU" text="Let that wise man, who praises our present offices, have a desire to gain, anyone and anything. By the services of those who praise, the flight to pleasure is spurred, let error flee from those who are easy and often flee, blessed is anyone who does so." />
            <div className='cards_team'>
                {teamData.map((team, index) => (
                    <div className='cardTeam' key={index}>
                        <img src={team.image} alt={`Equipo ${index + 1}`} />
                        <div className='cardTeamText'>
                            <h3>{team.title}</h3>
                            <p>{team.text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <BtnContact />
        </div>
    );
}
