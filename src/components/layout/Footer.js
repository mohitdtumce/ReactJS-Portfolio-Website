import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="row">

                <div className="col-six tab-full pull-right social">
                    <ul className="footer-social">
                        <li><a href="https://www.facebook.com/mohitdtumce" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/mohitdtumce/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a></li>
                        <li><a href="https://github.com/burningdzire" aria-label="Github" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a></li>
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