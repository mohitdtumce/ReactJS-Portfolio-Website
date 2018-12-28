import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as dataAction from "../store/actions/dataAction";

// Importing components
import { Navbar, Intro, About, Resume, ProjectList, Contact, Footer } from "../components";

class App extends Component {
    componentWillMount() {
        this.props.actions.fetchData();
    }
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar />
                    <Intro />
                    <About />
                    <Resume experience={this.props.experience} education={this.props.education} responsiblity={this.props.responsibility} />
                    <ProjectList projects={this.props.projects} />
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

const mapStateToProps = (state) => {
    return {
        experience: state.dataReducer.experience,
        education: state.dataReducer.education,
        responsibility: state.dataReducer.responsibility,
        awards: state.dataReducer.awards,
        projects: state.dataReducer.projects
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(dataAction, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
