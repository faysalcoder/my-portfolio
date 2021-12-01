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
import Navbar from './Navbar/Navbar';
import Service from './Service/Service';
import ContactMe from './ContactMe/ContactMe';



const Home = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])
    return (
        <div>


            <div >
{/* <Navbar></Navbar> */}
                <DeveloperBanner></DeveloperBanner>
                <Service></Service>
                <Info></Info>
                {/* <About></About> */}
                <Education></Education>

                <ImageSlider></ImageSlider>
                {/* <Contact></Contact>
                 */}
                 <ContactMe></ContactMe>
            </div>



        </div>
    );
};

export default Home;