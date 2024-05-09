import React from 'react'
import './TitleSection.css'
export default function TitleSection({ section, text }) {
    return (
        <div className='titleSection'>

            <h3> {section}</h3>
            <p>{text}</p>

        </div>
    )
}
