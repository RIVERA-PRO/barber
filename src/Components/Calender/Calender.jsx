import React from 'react';
import './Calender.css';
import TitleSection from '../TitleSection/TitleSection';
export default function Calendar() {
    // Days of the week and barber shop hours
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const hours = ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'];



    return (
        <div className="calendar-container">
            <TitleSection section="Our Calendar" text="Discover the operating hours of our barber shop. Explore the weekly schedule to plan your appointments and ensure you never miss a moment to refresh your look and relax with us." />
            <table className="calendar-table">
                <thead>
                    <tr>
                        <th >Schedule</th>
                        {days.map((day, index) => (
                            <th key={index} className='titleTh'>{day}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {hours.map((hour, hourIndex) => (
                        <tr key={hourIndex}>
                            <td >{hour}</td>
                            {days.map((day, dayIndex) => (
                                <td key={dayIndex}>
                                    {day === 'Sunday' ? 'Closed' : 'Open'}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
