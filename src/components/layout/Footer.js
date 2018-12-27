import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="row">

                <div className="col-six tab-full pull-right social">
                    <ul className="footer-social">
                        <li><a href="https://www.facebook.com/mohitdtumce"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/mohitdtumce/"><i className="fa fa-linkedin"></i></a></li>
                        <li><a href="https://github.com/burningdzire"><i className="fa fa-github"></i></a></li>
                    </ul>
                </div>

                <div className="col-six tab-full">
                    <div className="copyright">
                        <span>© Copyright Burningdzire 2018</span>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer;