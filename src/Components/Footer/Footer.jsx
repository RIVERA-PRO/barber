import React, { useEffect, useState, useRef } from 'react';
import './Footer.css'
import { Link as Anchor } from 'react-router-dom';
import logo from '../../images/logo.png'
export default function Footer() {



    return (
        <div className='FooterContain'>


            <div className='Footer'>
                <div className='footerText'>
                    <h3>About</h3>
                    <Anchor to='' >Home</Anchor>
                    <Anchor to='' >About Us</Anchor>
                    <Anchor to='' >Contact Us</Anchor>
                    <Anchor to='' >Career</Anchor>
                    <Anchor to='' >Terms and Conditions</Anchor>
                    <Anchor to='' >Privacy Policy</Anchor>

                </div>
                <div className='footerText'>
                    <h3>Services</h3>
                    <Anchor to='' >Mobile App Development</Anchor>
                    <Anchor to='' >Website Development</Anchor>
                    <Anchor to='' >Blockchain Solution</Anchor>
                    <Anchor to='' >Artificial Intelligence</Anchor>
                    <Anchor to='' >Enterprise DevOps</Anchor>
                    <Anchor to='' >Cloud Transformation</Anchor>
                    <Anchor to='' ></Anchor>
                </div>
                <div className='footerText'>
                    <h3>Industries</h3>
                    <Anchor to='' >Fintech</Anchor>
                    <Anchor to='' >Healthcare</Anchor>
                    <Anchor to='' >Insurance</Anchor>
                    <Anchor to='' >Logistics</Anchor>
                    <Anchor to='' >Aviation</Anchor>
                    <Anchor to='' >Social Networking</Anchor>
                    <Anchor to='' >On-Demand App Development</Anchor>

                </div>
                <div className='footerText'>
                    <h3>Resources</h3>
                    <Anchor to='' >App Development</Anchor>
                    <Anchor to='' >Web3.0</Anchor>
                    <Anchor to='' >Artificial Intelligence</Anchor>
                    <Anchor to='' >Cryptocurrency</Anchor>
                    <Anchor to='' >Game Development</Anchor>
                    <Anchor to='' >IDO Launchpad</Anchor>
                    <Anchor to='' >Metaverse</Anchor>

                </div>


            </div>


            <div className='Footer2'>

                <Anchor to='' target="_blank">   <img src={logo} alt="logo" /></Anchor>

                <div className='socials'>
                    <Anchor to={``} target="_blank"><i className='fa fa-instagram'></i></Anchor>
                    <Anchor to={``} target="_blank"><i className='fa fa-whatsapp'></i></Anchor>
                    <Anchor to={``} target="_blank"><i className='fa fa-facebook'></i></Anchor>

                </div>

                <p>© COPYRIGHT 2024 - SDLC Corp - Transform Digital DMCC</p>
                <Anchor  >
                    Privacy Policy
                </Anchor>
                <Anchor  >
                    Terms and Conditions
                </Anchor>
            </div>
        </div>
    )
}
