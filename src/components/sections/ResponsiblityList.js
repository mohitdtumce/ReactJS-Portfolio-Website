import React from 'react'
import Responsiblity from "./Responsibility";

const ResponsiblityList = ({ responsiblity }) =>
    <div className="row resume-timeline">
        <div className="col-twelve resume-header">
            <h2>Position of Responsibility</h2>
        </div>
        <div className="col-twelve">
            <div className="timeline-wrap">
                {responsiblity.map(resp =>
                    <Responsiblity key={resp.id} resp={resp} />
                )}
            </div>
        </div>
    </div>

export default ResponsiblityList;