import React from 'react'

const Responsibility = ({ resp }) => {
    return (
        <div key={resp.id} className="timeline-block">
            <div className="timeline-ico">
                <i className="fas fa-hands-helping"></i>
            </div>
            <div className="timeline-header">
                <h3>{resp.position}</h3>
                <p>{resp.duration}</p>
            </div>
            <div className="timeline-content">
                <h4>{resp.organization}</h4>
                <p>{resp.work.join(" ")}</p>
            </div>

        </div>
    )
}

export default Responsibility;
