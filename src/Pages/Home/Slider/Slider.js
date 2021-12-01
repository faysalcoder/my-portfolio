
import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Button } from 'react-bootstrap';
import useProjects from '../../../hooks/useProjects';
import { Link } from 'react-router-dom';


function ImageSlider() {
    const { projects } = useProjects();

    const settings = {
        centerMode: true,
        centerPadding: '40px',
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 680,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    }
    return (
        <Container data-aos="fade-up">
            <h1 style={{ borderBottom: '5px solid #FF4522', display: 'inline-block', marginBottom: '30px' }}>Projects</h1>
            <Slider {...settings}>

                {
                    projects.map(project => <div className="card-wrapper">
                        <div className="card">
                            <div className="card-image">
                                <img src={project.img} alt="" />

                                <h2 className="project-title">{project.title}</h2>
                            </div>



                            <ul className="social-icons">
                                <li><Link to={`/project/${project.title}`}><button className="classic-btn2"  >
                                    Details
                                </button></Link></li>



                            </ul>
                            <div className="details">
                                <h2>Bike Zone<span className="job-title d-flex " style={{ justifyContent: 'center' }}><a href={project.preview}><Button variant="outline-danger" style={{ borderRadius: '50px', padding: '5px 20px', margin: '0 5px' }} size="sm">
                                    Preview
                                </Button></a><a href={project.code}>
                                        <Button variant="outline-success" style={{ borderRadius: '50px', padding: '5px 20px' }} size="sm">
                                            Code
                                        </Button>
                                    </a></span></h2>
                            </div>
                        </div>
                    </div>)
                }


                {/* <div className="card-wrapper">
                    <div className="card">
                        <div className="card-image">
                            <img src="https://i.ibb.co/3fsGnvQ/screenshot-poko-delivery-web-app-2021-11-29-22-56-45-1.png" alt="" />

                            <h2 className="project-title">Poko Delivery</h2>
                        </div>



                        <ul className="social-icons">
                            <li><a href="https://bikezone-b0d4c.web.app/"><button className="classic-btn2"  >
                                Details
                            </button></a></li>



                        </ul>
                        <div className="details">
                            <h2>Poko Delivery <span className="job-title d-flex " style={{ justifyContent: 'center' }}><a href="https://poko-delivery.web.app/"><Button variant="outline-danger" style={{ borderRadius: '50px', padding: '5px 20px', margin: '0 5px' }} size="sm">
                                Preview
                            </Button></a><a href="https://github.com/faysalcoder/poko-delivery-client">
                                    <Button variant="outline-success" style={{ borderRadius: '50px', padding: '5px 20px' }} size="sm">
                                        Code
                                    </Button>
                                </a></span></h2>
                        </div>
                    </div>
                </div>

                <div className="card-wrapper">
                    <div className="card">
                        <div className="card-image">
                            <img src="https://i.ibb.co/Y7ZVnMp/screenshot-bikezone-b0d4c-web-app-2021-11-29-23-00-08-1.png" alt="" />

                            <h2 className="project-title">Bike Zone</h2>
                        </div>



                        <ul className="social-icons">
                            <li><a href="https://bikezone-b0d4c.web.app/"><button className="classic-btn2"  >
                                Details
                            </button></a></li>



                        </ul>
                        <div className="details">
                            <h2>John Doe <span className="job-title d-flex " style={{ justifyContent: 'center' }}><a href="https://bikezone-b0d4c.web.app/"><Button variant="outline-danger" style={{ borderRadius: '50px', padding: '5px 20px', margin: '0 5px' }} size="sm">
                                Preview
                            </Button></a><a href="https://github.com/faysalcoder/bike-zone">
                                    <Button variant="outline-success" style={{ borderRadius: '50px', padding: '5px 20px' }} size="sm">
                                        Code
                                    </Button>
                                </a></span></h2>
                        </div>
                    </div>
                </div>
                <div className="card-wrapper">
                    <div className="card">
                        <div className="card-image">
                            <img src="https://i.ibb.co/Y7ZVnMp/screenshot-bikezone-b0d4c-web-app-2021-11-29-23-00-08-1.png" alt="" />

                            <h2 className="project-title">Bike Zone</h2>
                        </div>



                        <ul className="social-icons">
                            <li><a href="https://bikezone-b0d4c.web.app/"><button className="classic-btn2"  >
                                Details
                            </button></a></li>



                        </ul>
                        <div className="details">
                            <h2>John Doe <span className="job-title d-flex " style={{ justifyContent: 'center' }}><a href="https://bikezone-b0d4c.web.app/"><Button variant="outline-danger" style={{ borderRadius: '50px', padding: '5px 20px', margin: '0 5px' }} size="sm">
                                Preview
                            </Button></a><a href="https://github.com/faysalcoder/bike-zone">
                                    <Button variant="outline-success" style={{ borderRadius: '50px', padding: '5px 20px' }} size="sm">
                                        Code
                                    </Button>
                                </a></span></h2>
                        </div>
                    </div>
                </div> */}

            </Slider>
        </Container>
    )
}

export default ImageSlider

