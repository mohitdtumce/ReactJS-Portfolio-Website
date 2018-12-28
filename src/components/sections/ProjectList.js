import React from 'react'
import Projects from "./Projects"

const ProjectList = ({ projects }) =>

    <section id="portfolio">
        <div className="row section-intro">
            <div className="col-twelve">
                <h5>Projects</h5>
                <h1>Because passion makes life</h1>
            </div>
        </div>
        <div className="row portfolio-content">
            <div className="col-twelve">
                <div id="folio-wrapper" className="block-1-2 block-mob-full stack">
                {projects.map(project =>
                    <Projects key={project.id} project={project} />
                )}
                </div>
            </div>
        </div>
    </section>

export default ProjectList;