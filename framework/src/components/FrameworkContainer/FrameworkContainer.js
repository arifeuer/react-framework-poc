import React, { Component } from 'react';
import TopNav from '../TopNav/TopNav';

class FrameworkContainer extends Component {

    render() {
        return (
            <div>
                <TopNav components={this.props.components} />
            </div>
        );
    }

}

export default FrameworkContainer;