import React from 'react';
import './Footer.css'
import { Link as Anchor } from 'react-router-dom';
import logo from '../../images/logo.png'
import contact from '../contact'
export default function Footer() {



    return (
        <div className='FooterContain'>
            <div className='Footer'>
                <div className='footerText'>
                    <Anchor to='' target="_blank">   <img src={logo} alt="logo" /></Anchor>

                    {
                        contact.map(item => (
                            <div className='socials'>
                                <Anchor to={item.instagram} target="_blank"><i className='fa fa-instagram'></i></Anchor>
                                <Anchor to={`tel:${item.telefono}`} target="_blank"><i className='fa fa-whatsapp'></i></Anchor>
                                <Anchor to={item.facebook} target="_blank"><i className='fa fa-facebook'></i></Anchor>
                            </div>
                        ))
                    }

                </div>
                <div className='footerText'>
                    <h3>About</h3>
                    <p  >The beatitudes provide for us great pleasures, whence the said easy little pardon of the body of the praisers is bound.</p>
                </div>
                <div className='footerText'>
                    <h3>Contact</h3>
                    {
                        contact.map(item => (
                            <div className='footerText'>
                                <Anchor to={`mailto:${item.email}`} target="_blank">{item.email}</Anchor>
                                <Anchor to={`tel:${item.telefono}`} target="_blank">{item.telefono}</Anchor>
                                <Anchor to={`https://www.google.com/maps?q=${encodeURIComponent(item.direccion)}`} target="_blank">{item.direccion}</Anchor>
                            </div>
                        ))
                    }

                </div>
                <div className='footerText'>
                    <h3>Links</h3>
                    <Anchor to='' >Services</Anchor>
                    <Anchor to='' >About Us</Anchor>
                    <Anchor to='' >Contact Us</Anchor>
                </div>
            </div>
            <p className='COPYRIGHT'>© COPYRIGHT 2024 - SDLC Corp - Transform Digital DMCC</p>
        </div>
    )
}
