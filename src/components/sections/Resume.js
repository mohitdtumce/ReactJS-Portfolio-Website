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
        </section>
    )
}
