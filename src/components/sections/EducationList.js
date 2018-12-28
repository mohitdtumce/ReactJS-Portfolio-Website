import React from 'react'
import Education from "./Education";

const EducationList = ({ education }) =>
    <div className="row resume-timeline">
        <div className="col-twelve resume-header">
            <h2>Education</h2>
        </div>
        <div className="col-twelve">
            <div className="timeline-wrap">
                {education.map(edu =>
                    <Education key={edu.id} edu={edu} />
                )}
            </div>
        </div>
    </div>

export default EducationList;