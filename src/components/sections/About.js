import React from 'react'

export default function About() {
    return (
        <section id="about">
            <div className="row section-intro">
                <div className="col-twelve">
                    <h5>About Me</h5>
                    <h1>Here is my quick introduction</h1>
                    <div className="intro-info">
                        <img src="images/profile-picture.webp" alt="Mohit Sharma" />
                    </div>
                </div>
                <div className="col-twelve">
                    <div className="intro-info">
                        <p className="lead">I am currently a Software Development Engineer @Flipkart, Bangalore. I have done my B.Tech in Mathematics & Computing from Delhi Technological University (formerly known as Delhi College of Engineering)</p>
                        <p className="lead">I am ardent learner and problem solver. Software development, data science and several domain of mathematics intrigue me. You’ll often find me solving competitive questions from websites like Codeforces, Hackerrank or Hackerearth in my free time. Nothing gives me more satisfaction than a neatly and efficiently written code.</p>

                    </div>
                </div>
            </div>
            <div className="row about-content">
                <div className="col-six tab-full">
                    <h3>Profile</h3>
                    <ul className="info-list">
                        <li>
                            <strong>Name:</strong>
                            <span>Mohit Sharma</span>
                        </li>
                        <li>
                            <strong>Job:</strong>
                            <span>Software Development Engineer</span>
                        </li>
                        <li>
                            <strong>Interests:</strong>
                            <span>Machine Learning, Problem Solving</span>
                        </li>
                        <li>
                            <strong>Hobbies:</strong>
                            <span>Competitive Coding, Reading</span>
                        </li>
                    </ul>

                </div>

                <div className="col-six tab-full">
                    <h3>Skills</h3>
                    <ul className="info-list">
                        <li>
                            <strong>Programming Languages:</strong>
                            <span>C++, Java, Ruby, Python, React JS</span>
                        </li>
                        <li>
                            <strong>Tools/Technologies:</strong>
                            <span>Packaging: Debian, VCS: Git, MessageBroker: Kafka</span>
                        </li>
                        <li>
                            <strong>System:</strong>
                            <span>Unix</span>
                        </li>
                        <li>
                            <strong>Datastore:</strong>
                            <span>MySQL, MongoDB, HBase, Redis</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="row button-section">
                <div className="col-twelve">
                    <a href="#contact" title="Hire Me" className="button stroke smoothscroll">Hire Me</a>
                    <a href="https://drive.google.com/open?id=1SaSpcoPJZVbFOX4kN3YQhRDbFmWAZ1ov" title="Download Resume" className="button button-primary">Download Resume</a>
                </div>
            </div>
        </section>
    )
}
