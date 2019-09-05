import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class TopNav extends Component {

    render() {
        const tabs = this.props.components.map(component =>
            <NavLink to={component.path}>{component.name}</NavLink>
        );

        return (
            <div>
                {tabs}
            </div>
        );
    }
}

export default TopNav;