import React from 'react'

export default function Resume() {
    return (
        <section id="resume" className="grey-section">

            <div className="row section-intro">
                <div className="col-twelve">
                    <h5>Resume</h5>
                    <h1>Know more about me</h1>
                </div>
            </div>

            <div className="row resume-timeline">
                <div className="col-twelve resume-header">
                    <h2>Experience</h2>
                </div>
                <div className="col-twelve">
                    <div className="timeline-wrap">
                        <div className="timeline-block">
                            <div className="timeline-ico">
                                <i className="fa fa-briefcase"></i>
                            </div>
                            <div className="timeline-header">
                                <h3>Software Developer</h3>
                                <p>Jun '18 - Present</p>
                            </div>
                            <div className="timeline-content">
                                <h4>TATA Health</h4>
                                <p>Integrated Mixpanel in TATA Health android app to derive insights of customer behaviour by monitoring actions like clicks and searches.<br />Envisaged efficient integration flow and communicated the suggestions to product team for implementing consumer analytics.</p>
                            </div>

                        </div>

                        <div className="timeline-block">

                            <div className="timeline-ico">
                                <i className="fa fa-briefcase"></i>
                            </div>

                            <div className="timeline-header">
                                <h3>Software Intern</h3>
                                <p>Mar ’18 - May ’18</p>
                            </div>

                            <div className="timeline-content">
                                <h4>Acadview</h4>
                                <p>Worked on various Python &amp; Machine Learning projects.<br /> Created Exploratory Data Analysis (EDA) reports in Python.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="row resume-timeline">
                <div className="col-twelve resume-header">
                    <h2>Education</h2>
                </div>
                <div className="col-twelve">
                    <div className="timeline-wrap">
                        <div className="timeline-block">
                            <div className="timeline-ico">
                                <i className="fa fa-graduation-cap"></i>
                            </div>

                            <div className="timeline-header">
                                <h3>Bachelor Degree</h3>
                                <p>Aug '14 - May '18</p>
                            </div>

                            <div className="timeline-content">
                                <h4>Delhi Technological University</h4>
                                <p>Completed B.Tech in Mathematics and Computing.<br /> Consistently ranked among top 15 Students in a class of 99 in Applied Mathematics &amp; Computing Department.</p>
                            </div>

                        </div>
                    </div>

                    <div className="timeline-block">

                            <div className="timeline-ico">
                                <i className="fa fa-graduation-cap"></i>
                            </div>

                            <div className="timeline-header">
                                <h3>Data Structure & Algorithm</h3>
                                <p>Dec ‘16 - Jan ‘17</p>
                            </div>

                            <div className="timeline-content">
                                <h4>Coding Ninjas</h4>
                                <p>Completed advanced course on Data Structure and Algorithms.</p>
                            </div>
                        </div>
                </div>

            </div>

        </section>
    )
}
