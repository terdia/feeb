import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';

const Dashboard = () => <h2>Dashboard Page</h2>
const SurveyNew = () => <h2>Create a new survey</h2>

class App extends Component {

    componentDidMount() {
        this.props.getAuthUser();
    }

    render() {
        return (
            <div> 
                <BrowserRouter>
                    <div className="container">
                        <Header />
                        <Route path="/" component={Landing} exact={true} />
                        <Route path="/surveys" component={Dashboard} exact={true} />
                        <Route path="/surveys/new" component={SurveyNew} />
                    
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null, actions)(App);