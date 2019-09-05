import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import TopNav from '../TopNav/TopNav';

class FrameworkContainer extends Component {

    render() {
        const routes = this.props.components.map(component => 
            <Route path={component.path} component={component.component} />
        );

        return (
            <div>
                <TopNav components={this.props.components} />
                {routes}
            </div>
        );
    }

}

export default FrameworkContainer;