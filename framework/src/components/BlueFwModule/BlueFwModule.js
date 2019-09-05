import React from 'react';
import { Link } from 'react-router-dom'

class BlueFwComponent extends React.Component {
    render() {
        return (
            <div>
                <h1 style={{ color: 'blue' }}>Blue Framework Module</h1>
                <Link to='/purple'>To Purple (FW to FW)</Link>
                <br />
                <Link to='/red'>To Red (FW to C)</Link>
            </div>
        );
    }
}

export default BlueFwComponent;