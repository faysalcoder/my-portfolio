import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import myProjects from '../../../Shared/projects';



const ViewDetail = () => {
    const { id } = useParams();
    const projects = myProjects;


    console.log(projects.length, id)





    const [projectView, setProjectView] = useState({});
    const { img, title, metarial, info1, info2, info3 } = projectView;

    console.log(metarial)
    useEffect(() => {
        if (projects.length) {
            const project = projects.find(project => parseInt(id) === parseInt(project.id))
            setProjectView(project)
            console.log(project.id)

        }

    }, [projects, id])

    console.log(projectView)
    return (
        <div className="my-5">
            <Container>
                <Row>

                    <Col md={5} sm={12}>
                        <img src={img} alt="" />

                    </Col>
                    <Col md={7} sm={12}>
                        <h2>{title}</h2>
                        {
                            metarial.map(metarial => <Button variant="secondary" size="sm" style={{ margin: '0 5px' }}>{metarial}</Button>)
                        }
                        <br />
                        <h6 className="my-2 ">{info1}</h6>
                        <h6>{info2}</h6>
                        <h6>{info3}</h6>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ViewDetail;