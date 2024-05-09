import React from 'react';
import Nabvar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Banners from '../Components/Banners/Banners'
import Servicios from '../Components/Servicios/Servicios';
import About from '../Components/About/About';
import Prices from '../Components/Prices/Prices';
import BtnWhatsapp from '../Components/BtnWhatsapp/BtnWhatsapp';
import Team from '../Components/Team/Team';
import Calender from '../Components/Calender/Calender';
import Galery from '../Components/Galery/Galery';
export default function IndexLayout() {




    return (
        <div >
            <Nabvar />
            <Banners />
            <Servicios />
            <About />
            <Team />
            <Prices />
            <Calender />
            <Galery />
            <Footer />
            <BtnWhatsapp />
        </div>
    );
}
