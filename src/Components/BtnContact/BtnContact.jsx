import React from 'react'
import { Link as Anchor } from 'react-router-dom';
import './BtnContact.css'
import contact from '../contact';
export default function BtnContact() {
    return (
        <Anchor to={`/`} className='BtnContact'>
            Contact
        </Anchor>

    )
}
