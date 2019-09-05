import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class TopNav extends Component {

    render() {
        const tabs = this.props.components.map(component =>
            <NavLink to={component.path} style={{margin:'10px'}}>{component.name}</NavLink>
        );

        return (
            <div style={{margin:'10px'}}>
                {tabs}
            </div>
        );
    }
}

export default TopNav;