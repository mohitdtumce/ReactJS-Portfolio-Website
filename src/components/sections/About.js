import React from 'react'

export default function About() {
    return (
        <section id="about">
            <div className="row section-intro">
                <div className="col-twelve">
                    <h5>About Me</h5>
                    <h1>Here is my quick introduction</h1>
                    <div className="intro-info">
                        <img src="images/profile-picture.jpg" alt="Mohit Sharma" />
                    </div>
                </div>
                <div className="col-twelve">
                    <div className="intro-info">
                        <p className="lead">I have done my B.Tech in Mathematics & Computing from Delhi Technological University (formerly known as Delhi College of Engineering) and I am currently a programmer employed at TATA Health, Bangalore.</p>
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
                    <ul className="skill-bars">
                        <li>
                            <div className="progress percent90"><span>90%</span></div>
                            <strong>C/C++</strong>
                        </li>
                        <li>
                            <div className="progress percent80"><span>80%</span></div>
                            <strong>Java</strong>
                        </li>
                        <li>
                            <div className="progress percent80"><span>80%</span></div>
                            <strong>Python</strong>
                        </li>
                        <li>
                            <div className="progress percent65"><span>65%</span></div>
                            <strong>HTML/CSS/JS(ReactJS)</strong>
                        </li>
                    </ul>
                </div>

            </div>

            <div className="row button-section">
                <div className="col-twelve">
                    <a href="#contact" title="Hire Me" className="button stroke smoothscroll">Hire Me</a>
                    <a href="https://drive.google.com/file/d/1I9qI9Jt7CE936j5TCPPz2xmrvE4rScMV/view?usp=sharing" title="Download Resume" className="button button-primary">Download Resume</a>
                </div>
            </div>
        </section>
    )
}
