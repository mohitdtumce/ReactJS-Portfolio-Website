import React from 'react'
const Intro = () => {
    return (
        <section id="intro">
            <div className="intro-overlay"></div>
            <div className="intro-content">
                <div className="row">
                    <div className="col-twelve">
                        <h5>Hey Everyone!</h5>
                        <h1>I'm Mohit Sharma</h1>
                        <p className="intro-position">
                            <span>Software Developer</span>
                            <span>Machine Learning Enthusiast </span>
                        </p>
                        <a className="button stroke smoothscroll" href="#about" title="">About Me</a>
                    </div>
                </div>
            </div>

            <ul className="intro-social">
                <li><a href="https://www.facebook.com/mohitdtumce"><i className="fa fa-facebook"></i></a></li>
                <li><a href="https://www.linkedin.com/in/mohitdtumce/"><i className="fa fa-linkedin"></i></a></li>
                <li><a href="https://github.com/burningdzire"><i className="fa fa-github"></i></a></li>
            </ul>

        </section>
    )
}

export default Intro;