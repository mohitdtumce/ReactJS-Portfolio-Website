import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";

// Importing components
import { Navbar, Intro, About, Resume, Projects, Contact, Footer } from "../components";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar />
                    <Intro />
                    <About />
                    <Resume />
                    <Projects />
                    <Contact />
                    {/* <Switch>
                    <Route exact path="/" component={} />
                    <Route path="/task/:id" component={TaskDetails} />
                    <Route path="/sign-in" component={SignIn} />
                    <Route path="/sign-up" component={SignUp} />
                    <Route path="/create" component={CreateTask} />
                </Switch> */}
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
