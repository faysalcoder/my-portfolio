import React from "react";
import TrackVisibility from "react-on-screen";

import Pagetitle from "../../../Shared/Pagetitle";
import Skill from "../../../Shared/Skill";

const aboutContent = {
    name: "Bolby",
    avatarImage: "/images/avatar-2.svg",
    content:
        "I am A motivated full stack developer with experience in front end development and database. Strong collaboration skills and proven history of development with Javascript and Others programming languages.",
};

const progressData = [
    {
        id: 1,
        title: "Full-stack",
        percantage: 85,
        progressColor: "#FFD15C",
    },
    {
        id: 2,
        title: "Front-end",
        percantage: 95,
        progressColor: "#FF4C60",
    },
    {
        id: 3,
        title: "Using Libraries",
        percantage: 80,
        progressColor: "#6C6CE5",
    },
];



function AboutMe() {
    return (
        <section id="about">
            <div className="container">
                <Pagetitle title="About Me" />
                <div className="row">
                    <div className="col-md-3">
                        <div className="text-center text-md-left">
                            <img src="https://i.ibb.co/N9bPXkX/faysal.jpg" alt="" />
                        </div>
                        <div className="spacer d-md-none d-lg-none" data-height="30"></div>
                    </div>

                    <div className="col-md-9 triangle-left-md triangle-top-sm">
                        <div className="rounded bg-white shadow-dark padding-30">
                            <div className="row">
                                <div className="col-md-6 " style={{ textAlign: 'start' }}>
                                    <p>{aboutContent.content}</p>
                                    <div className="mt-3">
                                        <a href="!#" className="btn btn-default">
                                            Download CV
                                        </a>
                                    </div>
                                    <div
                                        className="spacer d-md-none d-lg-none"
                                        data-height="30"
                                    ></div>
                                </div>
                                <div className="col-md-6">
                                    {progressData.map((progress) => (
                                        <TrackVisibility
                                            once
                                            key={progress.id}
                                            className="progress-wrapper"
                                        >
                                            <Skill progress={progress} />
                                        </TrackVisibility>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default AboutMe;
