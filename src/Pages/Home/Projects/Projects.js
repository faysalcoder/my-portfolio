import React from 'react';
import { Row, Col, Card, Container, Button } from 'react-bootstrap';

const Projects = () => {
    return (
        <div data-aos="fade-up" >
            <Container id="projects">
                <h1 style={{ borderBottom: '5px solid #FF4522', display: 'inline-block', marginBottom: '30px' }}>Projects</h1>
                <Row xs={1} md={2} lg={3} className="g-4" >
                    <Col> <Card className="h-100">
                        <Card.Img variant="top" src="https://i.ibb.co/Y7ZVnMp/screenshot-bikezone-b0d4c-web-app-2021-11-29-23-00-08-1.png" />
                        <Card.Body>
                            <Card.Title>Bike Zone</Card.Title>
                            <Card.Text style={{ textAlign: 'left' }}>
                                • Users can see all the products and customer reviews without login . <br />
                                • A normal user can see all his/her orders on the dashboard and can cancel the order. <br />
                                • An admin role can make another user to an admin, update order status, delete and orders etc. <br />
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <a href="https://bikezone-b0d4c.web.app/">
                                <Button variant="outline-danger" style={{ borderRadius: '50px', padding: '5px 20px' }} size="sm">
                                    Preview
                                </Button>
                            </a>
                            <a href="https://github.com/faysalcoder/bike-zone">
                                <Button variant="outline-success" style={{ borderRadius: '50px', padding: '5px 20px' }} size="sm">
                                    Code
                                </Button>
                            </a>

                        </Card.Footer>
                    </Card></Col>
                    <Col> <Card className="h-100">
                        <Card.Img variant="top" src="https://i.ibb.co/3fsGnvQ/screenshot-poko-delivery-web-app-2021-11-29-22-56-45-1.png" />
                        <Card.Body>
                            <Card.Title>Poko Delivery</Card.Title>
                            <Card.Text style={{ textAlign: 'left' }}>
                                • Users can sign in Google signin system and order a service at a time , if user needed he/she can cancel their orders. <br />
                                • Admin can update the order status and remove an order. <br />
                                • An admin can also add a new courier service and the service show on the home page. <br />
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <a href="https://poko-delivery.web.app/">
                                <Button variant="outline-danger" style={{ borderRadius: '50px', padding: '5px 20px' }} size="sm">
                                    Preview
                                </Button>
                            </a>
                            <a href="https://github.com/faysalcoder/poko-delivery-client">
                                <Button variant="outline-success" style={{ borderRadius: '50px', padding: '5px 20px' }} size="sm">
                                    Code
                                </Button>
                            </a>
                        </Card.Footer>
                    </Card></Col>
                    <Col> <Card className="h-100">
                        <Card.Img variant="top" src="https://i.ibb.co/8s1sLvb/screenshot-relaxo-e6df7-web-app-2021-11-29-23-03-11-1.png" />
                        <Card.Body>
                            <Card.Title>Bike Zone</Card.Title>
                            <Card.Text style={{ textAlign: 'left' }}>
                                • Users can sign in and Login in the website and see the service details. <br />
                                • User use two kind of login or register system one is register and another google signin. <br />
                                • User can’t see the service details without login or register. <br />
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <a href="https://relaxo-e6df7.web.app/">
                                <Button variant="outline-danger" style={{ borderRadius: '50px', padding: '5px 20px' }} size="sm">
                                    Preview
                                </Button>
                            </a>
                            <a href="https://github.com/faysalcoder/relaxo-mental-care">
                                <Button variant="outline-success" style={{ borderRadius: '50px', padding: '5px 20px' }} size="sm">
                                    Code
                                </Button>
                            </a>
                        </Card.Footer>
                    </Card></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Projects;