import React, {Component} from 'react';
import Auth from '../auth';
import MainPage from '../mainPage';
import { Route, Switch, Redirect } from 'react-router-dom';

import './routes.css';


export default class Routes extends Component {
    render() {
        if (this.props.isAuthenticated) {
            return (
                <Switch>
                    <Route path = '/' exact component={MainPage}/>
                    <Redirect to = '/' />
                </Switch>
            )
        }
        return (
            <Switch>
                <Route path = '/' exact component={Auth}/>
                <Redirect to = '/' />
            </Switch>
        )
    }
}
