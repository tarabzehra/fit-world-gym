import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Pricing from '../Pricing';
import Courses from '../Courses';
import Cards from '../Cards';

function About() {
    return (
        <>
            <HeroSection />
            <Pricing />
            <Cards />
            <Courses />
            <Footer />
        </>
    );
}

export default About;