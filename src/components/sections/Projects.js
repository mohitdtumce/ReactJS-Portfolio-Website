import React from 'react'

const Projects = () => {
    return (
        <section id="portfolio">
            <div className="row section-intro">
                <div className="col-twelve">
                    <h5>Projects</h5>
                    <h1>Because passion makes life</h1>
                </div>
            </div>
            <div className="row portfolio-content">
                <div className="col-twelve">
                    <div id="folio-wrapper" className="block-1-2 block-mob-full stack">
                        <div className="bgrid folio-item">
                            <div className="item-wrap">
                                <img src="images/portfolio/project-01.jpg" alt="Liberty" />
                                <div className="overlay">
                                    <br />
                                    <div className="folio-item-table">
                                        <div className="folio-item-cell">
                                            <ul className="folio-content">
                                                <li>Executed Long Short Term Memory (LSTM) and Gated Recurrent Units
                                            (GRU) to predict price of cryptocurrency.</li>
                                                <li>Determined closing price of cryptocurrency for 30 days with mean
                                            absolute error percentage 7.37%.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bgrid folio-item">
                            <div className="item-wrap">
                                <img src="images/portfolio/project-02.jpg" alt="Liberty" />
                                <div className="overlay">
                                    <br />
                                    <div className="folio-item-table">
                                        <div className="folio-item-cell">
                                            <ul className="folio-content">
                                                <li>Implemented Extreme Gradient Boosting in Python to predict probability of default of customer with 87.13% accuracy. </li>
                                                <li>Envisaged potential improvement in risk management & superior oversight of banking organizations</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div><div className="bgrid folio-item">
                            <div className="item-wrap">
                                <img src="images/portfolio/project-03.jpg" alt="Liberty" />
                                <div className="overlay">
                                    <br />
                                    <div className="folio-item-table">
                                        <div className="folio-item-cell">
                                            <ul className="folio-content"><li>Worked in a team of two and created a C# based fully functional animated virtual assistant which can interact with user through its self-triggered actions.</li><li>
                                                Action and transitions between states is random and based on Transition Probability Matrix(TPM)</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div><div className="bgrid folio-item">
                            <div className="item-wrap">
                                <img src="images/portfolio/project-04.jpg" alt="Liberty" />
                                <div className="overlay">
                                    <br />
                                    <div className="folio-item-table">
                                        <div className="folio-item-cell">
                                            <ul className="folio-content"><li>Implemented Artificial Neural Network (ANN) based IDS model in MATLAB to detect and classify malicious attacks. </li><li>
                                                Employed feedforward and back propagation algorithms to minimize overall computational overhead, and achieved and accuracy of over 89%</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;