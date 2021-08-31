import React from 'react'

const Projects = ({project}) => {
    return (
        <div className="bgrid folio-item">
            <div className="item-wrap">
                <img src={"images/portfolio/project-0"+ project.id +".webp"} alt="Liberty" />
                <div className="overlay">
                    <br />
                    <div className="folio-item-table">
                        <div className="folio-item-cell">
                            <ul className="folio-content"><li>{project.work.join(" ")}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;