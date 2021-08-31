import React from 'react'

const Experience = ({ exp }) => {
    return (
        <div key={exp.id} className="timeline-block">
            <div className="timeline-ico">
                <i className="fa fa-briefcase"></i>
            </div>
            <div className="timeline-header">
                <h3>{exp.position}</h3>
                <p>{exp.duration}</p>
            </div>
            <div className="timeline-content">
                <h4>{exp.company}</h4>
                <p>{exp.work.join(" ")}</p>
            </div>

        </div>
    )
}

export default Experience;
