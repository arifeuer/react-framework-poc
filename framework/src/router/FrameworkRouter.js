import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import { createBrowserHistory } from 'history';

import FrameworkContainer from '../components/FrameworkContainer/FrameworkContainer';

class FrameworkRouter extends Component {

    render() {
        const routes = this.props.components.map(component =>
            <Route path={component.path} component={component.component} />
        );

        const customHistory = createBrowserHistory();

        return (
            <div>
                <Router history={customHistory}>
                    <Route path="/" render={(props) => {
                        return <FrameworkContainer {...props} components={this.props.components} />}} >
                        {routes}
                    </Route>
                </Router>
            </div>
        )
    }
}

export default FrameworkRouter;

