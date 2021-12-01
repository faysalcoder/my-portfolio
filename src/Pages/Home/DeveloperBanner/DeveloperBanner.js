import React from 'react';
import { Reveal } from "react-reveal/";
import {Container, Nav, Navbar} from 'react-bootstrap'
import Typewriter from 'typewriter-effect';

const DeveloperBanner = () => {
    return (
        <div>
           

            <section



                className="frelencer_banner_area developer_banner_area"
                id="home"
                style={{
                    background:
                        "linear-gradient( 1.14deg, rgb(244,247,252) 0%, rgb(255,255,255) 100%)",
                        width:'100%'
                }}
                
            >
                <img
                    className="d_shap"
                    src="https://i.ibb.co/2ghshsG/shap-b41f1706.png"
                    alt=""
                />
                <div className="overlay_color"></div>
                <div className="container" style={{textAlign:'start'}}>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="frelencer_content developer_content">
                                <img
                                    className="d_dot"
                                    src="https://i.ibb.co/BVmMc15/dot.png"
                                    alt=""
                                />

                                <React.Fragment >
                                    <Reveal effect="fadeInUp" duration={500}>
                                        <h4>
                                            <span>FRONT-END DEVELOPER</span>
                                        </h4>
                                    </Reveal>
                                    <Reveal effect="fadeInUp" duration={700}>
                                        <h2 className="t_color">Faysal Sikder</h2>
                                    </Reveal>
                                    <Reveal effect="fadeInUp" duration={900}>
                                    <p style={{fontSize:'36px'}}>
                            <Typewriter
                                options={{
                                    strings: ['Full Stack Developer', 'MERN Stack Developer'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </p>
                                    </Reveal>
                                    <Reveal effect="fadeInUp" duration={1000}>
                                    <a href="https://drive.google.com/uc?export=download&id=1h5_VS6RcpT-cY20vZOfiqyiZv6hS7pij"> <button className="classic-btn2"> Download CV</button></a>
                        <a href="#contact"><button className="classic-btn"> Hire Me</button></a>

                                    </Reveal>
                                </React.Fragment>

                                <div className="developer_skill">
                                    <div className="item">
                                        <p>
                                            <span>12</span> Years <br />
                                            Experence
                                        </p>
                                    </div>
                                    <div className="item">
                                        <p>
                                            <span>165</span> Projects Completed
                                            <br /> on 18 Countries
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="developer_img">
                                <Reveal effect="fadeInLeft" duration={1400}>
                                    <img
                                        className="f_img_one"
                                        src="https://i.ibb.co/jwRqCCL/html.png"
                                        alt=""
                                    />
                                </Reveal>
                                <Reveal effect="fadeInRight" duration={1200}>
                                    <div className="f_img_two">
                                        <img
                                            className=""
                                            src="https://i.ibb.co/9vx2km5/polygon.png"
                                            alt=""
                                        />
                                    </div>
                                </Reveal>
                               
                                <Reveal effect="fadeInDown" duration={1600}>
                                    <img
                                    style={{width:'90%'}}
                                        className="f_img_four"
                                        src="https://i.ibb.co/0Zf9Hnr/vector-potriat1-ai.png"
                                        alt=""
                                    />
                                </Reveal>
                                <Reveal effect="fadeInDown" duration={2000}>
                                    <div className="f_img_five">
                                        <img
                                            className=""
                                            src=" https://i.ibb.co/6F9P4x0/code.png"
                                            alt=""
                                        />
                                    </div>
                                </Reveal>
                                <Reveal effect="fadeInDown" duration={2200}>
                                    <div className="f_img_six">
                                        <img
                                            className=""
                                            src=" https://i.ibb.co/QFj2R5k/mern.png"
                                            alt=""
                                        />
                                    </div>
                                </Reveal>
                                <Reveal effect="fadeInUp" duration={1200}>
                                    <img
                                        className="f_img_eight"
                                        src=" https://i.ibb.co/dBpf4Lx/react.png"
                                        alt=""
                                    />
                                </Reveal>
                            </div>
                        </div>
                    </div>
                    </div>
                  
            </section>
        </div>
    );
};

export default DeveloperBanner;