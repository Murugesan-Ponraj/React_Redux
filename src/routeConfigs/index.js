import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "../components/login/App.js";
import Dashboard from "../components/dashboard";
import history from '../store/history'
import NotFound from '../sharedComponents/pageNotFound'

class RouteConfig extends React.Component {
    render() {
        return (
            <Router history={history} > 
                <Route path="/" exact component={App} />
                <Route path="/dashboard" exact component={Dashboard} />
               
            </Router>
        );
    }
}

export default RouteConfig;

 