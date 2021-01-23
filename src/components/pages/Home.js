import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import ShortDescription from '../ShortDescription';
import Footer from '../Footer';
import Experience from '../Experience';
import Faq from '../Faq';
//import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from '../Data';

function Home() {
    return (
        <>
            <HeroSection />
            <ShortDescription />
            <Experience />
            <Faq />
            <Footer />
        </>
    );
}

export default Home;