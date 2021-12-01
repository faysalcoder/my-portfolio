import React from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import './info.css';
import Typewriter from 'typewriter-effect';


const Info = () => {
    return (

        <div style={{ color: '#1F2937', backgroundColor: '#fb7e113a' }} data-aos="fade-up">

            <Container>


                <Row data-aos="fade-up" >

                    <Col >
                        <Navbar collapseOnSelect expand="lg" style={{ color: "#1E1E1E" }}>
                            <Container>
                                <Navbar.Brand href="#home"></Navbar.Brand>
                                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav className="ms-auto">
                                        <Nav.Link href="#home">Home</Nav.Link>
                                        <Nav.Link href="#about">About Me</Nav.Link>
                                        <Nav.Link href="#projects">Projects</Nav.Link>

                                    </Nav>

                                </Navbar.Collapse>
                            </Container>
                        </Navbar>

                    </Col>
                </Row>
                <Row xs={1} md={2}>
                    <Col style={{ margin: ' auto 0', textAlign: 'left' }}>
                        <h6 style={{ marginBottom: '40px' }}>Hi There 👋 I'm </h6>
                        <h1 style={{ fontSize: '60px', color: '#1F2937' }} >FAYSAL SIKDER</h1>

                        <h4>
                            <Typewriter
                                options={{
                                    strings: ['Full Stack Developer', 'MERN Stack Developer'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h4>
                        <h6 style={{ marginBottom: '40px' }}>I’m a professional Full stack Developer with sweetable skills based in React.</h6>


                        <a href="https://drive.google.com/uc?export=download&id=1h5_VS6RcpT-cY20vZOfiqyiZv6hS7pij"> <button className="classic-btn2"> Download CV</button></a>
                        <a href="#contact"><button className="classic-btn"> Hire Me</button></a>


                    </Col>
                    <Col>
                        <img src="https://i.ibb.co/0Zf9Hnr/vector-potriat1-ai.png" style={{ width: '100%' }} alt="" />

                    </Col>
                </Row>



            </Container>

        </div>
    );
};

export default Info;