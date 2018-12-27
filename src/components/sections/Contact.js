import React from 'react'

export default function Contact() {
  return (
    <section id="contact">

      <div className="row section-intro">
        <div className="col-twelve">
          <h5>Contact</h5>
          <h1>I'd <span>&#128147;</span> To Hear From You.</h1>
        </div>
      </div>

      <div className="row contact-info">

        <div className="col-four tab-full">

          <div className="icon">
            <i className="icon-pin"></i>
          </div>

          <h5>Where to find me</h5>

          <p>
            Bangalore, India
            </p>

        </div>

        <div className="col-four tab-full collapse">

          <div className="icon">
            <i className="icon-mail"></i>
          </div>

          <h5>Email Me At</h5>
          <p>mohitdtumc@gmail.com
			   </p>

        </div>

        <div className="col-four tab-full">

          <div className="icon">
            <i className="icon-phone"></i>
          </div>

          <h5>Call Me At</h5>

          <p>+91 0123456789</p>

        </div>

      </div>

    </section>
  )
}
