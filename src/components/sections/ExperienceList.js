import React from 'react'
import Experience from "./Experience";

const ExperienceList = ({ experience }) =>
    <div className="row resume-timeline">
        <div className="col-twelve resume-header">
            <h2>Experience</h2>
        </div>
        <div className="col-twelve">
            <div className="timeline-wrap">
                {experience.map(exp =>
                    <Experience key={exp.id} exp={exp} />
                )}
            </div>
        </div>
    </div>

export default ExperienceList;