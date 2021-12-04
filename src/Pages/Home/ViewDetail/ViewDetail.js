import React, { useEffect, useState } from 'react';
import { Carousel, Container, Spinner, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import Navbar from '../Navbar/Navbar';






const ProjectDetails = () => {
    const { id } = useParams();

    const [project, setProject] = useState([]);
    const [loading, setLoading] = useState(false);
    const [findP, setFindP] = useState({})

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])


    useEffect(() => {
        fetch("/project.json")
            .then(res => res.json())
            .then(data => setProject(data));
    }, []);

    useEffect(() => {
        if (project.length) {
            const findProject = project.find(service => parseInt(id) === parseInt(service.id))
            setFindP(findProject)

        }
    }, [id, project])

    const { title, img, metarial, info1, info2, info3, preview, code, type, ss1, ss2 } = findP;

    return (
        <>
            {
                loading ?
                    <div className="loader">
                        <div className="loader-icon">
                            <Spinner className="bg-white" animation="grow" />
                            <h3 className="font-bold text-white">Wait a bit</h3>
                        </div>
                    </div>
                    :
                    <>
                        <Navbar></Navbar>

                        <Container className="py-5 full-width mx-auto px-3 text-start">

                            <h6 className="font-light">{type}</h6>
                            <h1 className="font-bold">{title}</h1>
                            <p></p>
                            <div class="btn-group p-3" role="group">
                                <a className="text-decoration-none me-4" target="_blank" href={preview} rel="noreferrer">
                                    <button type="button" class="btn btn-outline-success shadow"><i className="fas fa-code me-1"></i>Preview</button>
                                </a>
                                {/* {
                                    Server_git ? <a className="text-decoration-none" target="_blank" href="/">
                                        <button type="button" class="btn btn-outline-dark shadow"><i className="fas fa-code me-1"></i>Server code</button>
                                    </a> : ""} */}
                                <a className="text-decoration-none" target="_blank" href={code} rel="noreferrer">
                                    <button type="button" class="btn btn-outline-danger shadow">Client Code<i className="ms-2 fas fa-external-link-alt"></i></button>
                                </a>
                            </div>
                            <div className="my-5 shadow-lg container-sm">
                                <Carousel variant="dark">
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100 h-50"
                                            src={img}
                                            alt="First slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100 h-50"
                                            src={ss1}
                                            alt="Second slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100 h-50"
                                            src={ss2}
                                            alt="Third slide"
                                        />
                                    </Carousel.Item>

                                </Carousel>
                            </div>
                            <div className="pt-3">
                                <h3 className="fw-bold">About this project</h3>
                                <hr className="w-50 me-auto" />
                                {/* <p>{about_header}</p> */}
                                <ul>
                                    {metarial?.split(",").map(list => <Button size="sm" className="mx-2 mt-2"> {list} </Button>)}
                                </ul>
                            </div>
                            <div className="pt-3">
                                <h3 className="fw-bold">Technical Sheet</h3>
                                <p>Code technologies and skills I got involved with while working on this project.</p>
                                <hr className="w-50 me-auto" />
                                <ul>
                                    <li className="mt-2"> {info1} </li>
                                    <li className="mt-2"> {info2} </li>
                                    <li className="mt-2"> {info3} </li>
                                </ul>
                            </div>
                        </Container>

                    </>
            }
        </>
    );
};

export default ProjectDetails;