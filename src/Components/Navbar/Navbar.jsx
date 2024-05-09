import React, { useEffect, useState, useRef } from 'react';
import Modal from 'react-modal';
import { Link as Anchor } from 'react-router-dom';
import logo from '../../images/logo.png';
import 'swiper/swiper-bundle.css';
import './Navbar.css'
import contact from '../contact'
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header>
            <nav>

                <Anchor to={`/`} className='logo'>
                    <img src={logo} alt="logo" />
                </Anchor>



                <div className='enlaces'>
                    <Anchor to={`/`} onClick={() => {
                        document.querySelector('#swiper_container').scrollIntoView({ behavior: 'smooth' });
                    }}>Home</Anchor>
                    <Anchor to={`/`} onClick={() => {
                        document.querySelector('.ServiciosContain').scrollIntoView({ behavior: 'smooth' });
                    }}>Services</Anchor>
                    <Anchor to={`/`} onClick={() => {
                        document.querySelector('.About').scrollIntoView({ behavior: 'smooth' });
                    }}> About Us</Anchor>
                    <Anchor to={`/`} onClick={() => {
                        document.querySelector('.calendar-container').scrollIntoView({ behavior: 'smooth' });
                    }}> Calender</Anchor>
                    <Anchor to={`/`} onClick={() => {
                        document.querySelector('.FooterContain').scrollIntoView({ behavior: 'smooth' });
                    }}> Contact Us</Anchor>

                </div>
                <div className='deNoneNav'>

                    {
                        contact.map(item => (
                            <div class="redes-sociales">
                                <Anchor to={item.instagram} target="_blank"><i className='fa fa-instagram'></i></Anchor>
                                <Anchor to={`tel:${item.telefono}`} target="_blank"><i className='fa fa-whatsapp'></i></Anchor>
                                <Anchor to={item.facebook} target="_blank"><i className='fa fa-facebook'></i></Anchor>
                            </div>
                        ))
                    }
                </div>
                <div className={`nav_toggle  ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <Modal
                    isOpen={isOpen}
                    onRequestClose={() => setIsOpen(false)}
                    className="modalNav"
                    overlayClassName="overlay"
                >
                    <div className="modalNav-content">
                        <div className='bgNav'>

                            <Anchor to={`/`} className='logo'>
                                <img src={logo} alt="logo" />
                            </Anchor>
                        </div>
                        <div className='enlaces2'>
                            <Anchor to={`/`} onClick={() => {
                                document.querySelector('#swiper_container').scrollIntoView({ behavior: 'smooth' });
                                setIsOpen(!isOpen);
                            }} >Home</Anchor>
                            <Anchor to={`/`} onClick={() => {
                                document.querySelector('.ServiciosContain').scrollIntoView({ behavior: 'smooth' });
                                setIsOpen(!isOpen);
                            }}>Services</Anchor>
                            <Anchor to={`/`} onClick={() => {
                                document.querySelector('.About').scrollIntoView({ behavior: 'smooth' });
                                setIsOpen(!isOpen);
                            }}> About Us</Anchor>
                            <Anchor to={`/`} onClick={() => {
                                document.querySelector('.calendar-container').scrollIntoView({ behavior: 'smooth' });
                                setIsOpen(!isOpen);
                            }}> Calender</Anchor>
                            <Anchor to={`/`} onClick={() => {
                                document.querySelector('.FooterContain').scrollIntoView({ behavior: 'smooth' });
                                setIsOpen(!isOpen);
                            }}> Contact Us</Anchor>
                            <div class="redes-sociales">
                                <Anchor to={`/`}><i class='fa fa-facebook'></i></Anchor>
                                <Anchor to={`/`}><i class='fa fa-instagram'></i></Anchor>
                                <Anchor to={`/`}> <i class='fa fa-linkedin'></i></Anchor>
                            </div>
                        </div>

                    </div>
                </Modal>
            </nav>

        </header>
    );
}
