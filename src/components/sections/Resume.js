import React from 'react'
import ExperienceList from "./ExperienceList";
import EducationList from "./EducationList";
import ResponsiblityList from "./ResponsiblityList";

const Resume = ({ experience, education, responsiblity }) => {
    return (
        <section id="resume" className="grey-section">

            <div className="row section-intro">
                <div className="col-twelve">
                    <h5>Resume</h5>
                    <h1>Know more about me</h1>
                </div>
            </div>

            <ExperienceList experience={experience} />

            <EducationList education={education} />

            <div className="row resume-timeline">
                <div className="col-twelve resume-header">
                    <h2>Awards &amp; Distinctions</h2>
                </div>
                <div className="col-twelve">
                    <div className="timeline-wrap">

                        <div className="timeline-block">
                            <div className="timeline-ico">
                                <i className="fas fa-code"></i>
                            </div>
                            <div className="timeline-header">
                                <h3>Competitive Coding</h3>
                            </div>
                            <div className="timeline-content">
                                <p>Bug Trail, SITE - DTU 2018, Rank 1.<br />BITS, IEEE Troika 2017, Rank 1.<br />Ranked 723 in ACM ICPC 2014 Amritapuri region. </p>
                            </div>

                        </div>

                        <div className="timeline-block">
                            <div className="timeline-ico">
                                <i className="fas fa-people-carry"></i>
                            </div>
                            <div className="timeline-header">
                                <h3>Social Work</h3>
                            </div>
                            <div className="timeline-content">
                                <p>Winner of International Youth Achievers Award for excellent work in Social Sector</p>
                            </div>

                        </div>

                        <div className="timeline-block">
                            <div className="timeline-ico">
                                <i className="fas fa-award"></i>
                            </div>
                            <div className="timeline-header">
                                <h3>Academics</h3>
                            </div>
                            <div className="timeline-content">
                                <p>Consistently ranked among top 15 students in a class of 99 in Mathematics & Computing Dept.<br />Conferred with Indira Award by Honourable Chief minister for exemplary performance in class 10th</p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        <ResponsiblityList responsiblity={responsiblity}/>
        </section>
    )
}

export default Resume;
