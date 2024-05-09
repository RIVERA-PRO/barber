import React from 'react';
import Nabvar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import TitleSection from '../Components/TitleSection/TitleSection'
import Banners from '../Components/Banners/Banners'
import Servicios from '../Components/Servicios/Servicios';
import About from '../Components/About/About';
import Prices from '../Components/Prices/Prices';
import BtnWhatsapp from '../Components/BtnWhatsapp/BtnWhatsapp';
export default function IndexLayout() {




    return (
        <div >
            <Nabvar />
            <Banners />
            <Servicios />
            <About />
            <Prices />
            <TitleSection section="Our Services" />
            <Footer />
            <BtnWhatsapp />
        </div>
    );
}
