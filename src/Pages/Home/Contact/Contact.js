import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Contact = () => {
    return (
        <div style={{ backgroundColor: "#3A6882", marginTop: '50px' }} data-aos="fade-up">
            <Container className="text-light">
                <Row xs={1} md={2}>

                    <Col style={{ margin: 'auto 0' }}>
                        <h4 style={{ fontSize: '60px' }}>Contact Me</h4>
                        <p>Please feel free to contact me ,  I shall get back to you as soon as possible.</p>
                    </Col>
                    <Col>
                        <div className=" d-flex flex-column justify-content-around px-5  py-4" >


                            <input className="my-2" style={{ padding: "10px", border: "none", borderRadius: "5px" }} type="text" placeholder="Enter your name" />
                            <input className="my-2" style={{ padding: "10px", border: "none", borderRadius: "5px" }} type="email" placeholder="Enter your email adress" />
                            <textarea className="my-2" name="" id="" cols="30" rows="5" style={{ padding: "10px", border: "none", borderRadius: "5px" }} type="email" placeholder="Enter your message"></textarea>
                            <button className="my-2" style={{ padding: "10px", border: "none", borderRadius: "5px", backgroundColor: "#FFB87B", color: "white", fontWeight: "bold", letterSpacing: "3px" }}>Send Messsge</button>

                        </div></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;