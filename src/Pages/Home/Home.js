import React, { useEffect } from 'react';
import About from './About/About';
import Contact from './Contact/Contact';
import Info from './Info/Info';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Projects from './Projects/Projects';
import ImageSlider from './Slider/Slider';
import ParticleConfig from './ParticaleConfig/ParticleConfig';
import Education from './Education/Education';
import DeveloperBanner from './DeveloperBanner/DeveloperBanner';


const Home = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])
    return (
        <div>


            <div >

                <DeveloperBanner></DeveloperBanner>
                <Info></Info>
                {/* <About></About> */}
                <Education></Education>

                <ImageSlider></ImageSlider>
                <Contact></Contact>
            </div>



        </div>
    );
};

export default Home;