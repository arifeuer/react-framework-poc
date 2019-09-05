import React from 'react';
import { Link } from 'react-router-dom';

import './redBizModule.css'

class RedBizModule extends React.Component {
    render() {
        return (
            <div>
                <h1 className="red">Red Business Module</h1>
                <Link to='/purple'>To Purple (C to FW)</Link>
                <br />
                <Link to='/blue'>To Blue (C to FW)</Link>
            </div>
        );
    }
}

export default RedBizModule;