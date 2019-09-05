import React from 'react';
import {Link} from 'react-router-dom';

class PurpleFwModule extends React.Component {
    render() {
        return (
            <div>
                <h1 style={{ color: 'purple'}}>Purple Framework Module</h1>
                <Link to='/blue'>To Blue (FW to FW)</Link>
            </div>
        );
    }
}

export default PurpleFwModule;