import React from "react";
// react timeline
import {
    VerticalTimeline,
    VerticalTimelineElement,

} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Education = () => {
    return (
        <div style={{ backgroundColor: "#e3e3e3" }} className="mt-5">
            <h2 className="text-center py-4 fw-bolder">
                Education & Experience
            </h2>
            <div>
                <VerticalTimeline>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        // contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                        // contentArrowStyle={{
                        //   borderRight: "7px solid  rgb(33, 150, 243)",
                        // }}
                        date="2016 - 2020"
                        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}

                    // icon={}
                    >
                        <h3 className="vertical-timeline-element-title">
                            Diploma in CSE
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            Chandpur PolyTechnic Institute
                        </h4>
                        <p>CGPA: 3.37 (out of 4.00)</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        // contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                        // contentArrowStyle={{
                        //   borderRight: "7px solid  rgb(33, 150, 243)",
                        // }}
                        date="2016"
                        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                    // icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">
                            Secondary School Certificate
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            Bhaberchar Wazir Ali High School
                        </h4>
                        <p>GPA:4.28 (out of 5.00)</p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </div>
    );
};

export default Education;
