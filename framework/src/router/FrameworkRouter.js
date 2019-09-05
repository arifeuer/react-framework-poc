import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import FrameworkContainer from '../components/FrameworkContainer/FrameworkContainer';

class FrameworkRouter extends Component {

    render() {
        return (
            <div>
                <Router>
                    <Route path='/' render={routeProps =>
                        <FrameworkContainer {...routeProps} components={this.props.components} />}
                    >
                    </Route>
                </Router>
            </div>
        )
    }
}

export default FrameworkRouter;

