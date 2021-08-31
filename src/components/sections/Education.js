import React from 'react'

const Education = ({ edu }) => {
    return (
        <div key={edu.counter} className="timeline-block">
            <div className="timeline-ico">
                <i className="fa fa-briefcase"></i>
            </div>
            <div className="timeline-header">
                <h3>{edu.degree}</h3>
                <p>{edu.duration}</p>
            </div>
            <div className="timeline-content">
                <h4>{edu.institution}</h4>
                <p>{edu.work.join(" ")}</p>
            </div>
        </div>
    )
}

export default Education;
