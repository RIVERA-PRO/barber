import React, { useEffect, useState, useRef } from 'react';
import Modal from 'react-modal';
import { Link as Anchor } from 'react-router-dom';
import logo from '../../images/logo.png';
import 'swiper/swiper-bundle.css';
import './Navbar.css'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header>
            <nav>

                <Anchor to={`/`} className='logo'>
                    <img src={logo} alt="logo" />
                </Anchor>



                <div className='enlaces'>
                    <Anchor to={`/`}>
                        Home
                    </Anchor>
                    <Anchor to={`/`}>
                        Services
                    </Anchor>
                    <Anchor to={`/`}>
                        About Us
                    </Anchor>
                    <Anchor to={`/`}>
                        Contact Us
                    </Anchor>
                </div>



                <div className='deNoneNav'>
                    <div class="redes-sociales">
                        <Anchor to={`/`}><i class='fa fa-facebook'></i></Anchor>
                        <Anchor to={`/`}><i class='fa fa-instagram'></i></Anchor>
                        <Anchor to={`/`}> <i class='fa fa-linkedin'></i></Anchor>
                    </div>
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
                        <Anchor to={`/`} className='logo'>
                            <img src={logo} alt="logo" />
                        </Anchor>
                        <div className='enlaces2'>
                            <Anchor to={`/`}>
                                Home
                            </Anchor>
                            <Anchor to={`/`}>
                                Services
                            </Anchor>
                            <Anchor to={`/`}>
                                About Us
                            </Anchor>
                            <Anchor to={`/`}>
                                Contact Us
                            </Anchor>
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
