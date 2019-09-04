import React, { Component } from 'react';

class TopNav extends Component {

    render() {
        const tabs = this.props.components.map(component =>
            <div style={{display:'inline-block', margin: '10px'}}>
                {component.name}
            </div>
        );

        return (
            <div>
                {tabs}
            </div>
        );
    }
}

export default TopNav;