import React from 'react';
import {Container } from 'react-bootstrap';
import { Fade, Reveal } from 'react-reveal';

const Service = () => {
    return (
        <div>
             <section className="work_area" id="service">
            <Container>
                <div className="section_title text-center mb_60">
                <Reveal  effect="fadeInUp"><h2 className="mb_0 title_h2 t_color">What I'm Doing</h2></Reveal>
                <Reveal  effect="fadeInUp" duration={1500}><p className="mb_0 title_p">I love what I do. I take great pride in what I do.</p></Reveal>
                <Reveal  effect="fadeInLeft" duration={2000}><span className="bottom_line"></span></Reveal>
            </div>
                   
                    <Fade bottom cascade duration={1000}>
                        <div className="row">
                           
                                        <div className="col-lg-4 col-sm-6">
                                            <div className="work_item wow fadeInUp" data-wow-delay="0.1s">
                                            <i class="fas fa-pencil-ruler"></i>
                                                <a href=".#"><h2 className="t_color">Web Design</h2></a>
                                                <p> "There are many variations of pssages of Lorm available, bu in some form, Lorem Ipsum is simply dummy text."</p>
                                            </div>
                                        </div>
                                        
                                        <div className="col-lg-4 col-sm-6">
                                            <div className="work_item wow fadeInUp" data-wow-delay="0.1s">
                                            <i class="fas fa-pencil-ruler"></i>
                                                <a href=".#"><h2 className="t_color">Web Design</h2></a>
                                                <p> "There are many variations of pssages of Lorm available, bu in some form, Lorem Ipsum is simply dummy text."</p>
                                            </div>
                                        </div>
                                        
                                        <div className="col-lg-4 col-sm-6">
                                            <div className="work_item wow fadeInUp" data-wow-delay="0.1s">
                                            <i class="fas fa-pencil-ruler"></i>
                                                <a href=".#"><h2 className="t_color">Web Design</h2></a>
                                                <p> "There are many variations of pssages of Lorm available, bu in some form, Lorem Ipsum is simply dummy text."</p>
                                            </div>
                                        </div>
                                        
                                        <div className="col-lg-4 col-sm-6">
                                            <div className="work_item wow fadeInUp" data-wow-delay="0.1s">
                                            <i class="fas fa-pencil-ruler"></i>
                                                <a href=".#"><h2 className="t_color">Web Design</h2></a>
                                                <p> "There are many variations of pssages of Lorm available, bu in some form, Lorem Ipsum is simply dummy text."</p>
                                            </div>
                                        </div>
                                        
                                        <div className="col-lg-4 col-sm-6">
                                            <div className="work_item wow fadeInUp" data-wow-delay="0.1s">
                                            <i class="fas fa-pencil-ruler"></i>
                                                <a href=".#"><h2 className="t_color">Web Design</h2></a>
                                                <p> "There are many variations of pssages of Lorm available, bu in some form, Lorem Ipsum is simply dummy text."</p>
                                            </div>
                                        </div>
                                        
                                        <div className="col-lg-4 col-sm-6">
                                            <div className="work_item wow fadeInUp" data-wow-delay="0.1s">
                                            <i class="fas fa-pencil-ruler"></i>
                                                <a href=".#"><h2 className="t_color">Web Design</h2></a>
                                                <p> "There are many variations of pssages of Lorm available, bu in some form, Lorem Ipsum is simply dummy text."</p>
                                            </div>
                                        </div>
                                        
                                    
                                
                            
                        </div>
                    </Fade>
                    </Container>
            </section>
        </div>
    );
};

export default Service;