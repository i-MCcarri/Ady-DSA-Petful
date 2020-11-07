import React from 'react';
import { withRouter } from 'react-router-dom';
import Applicants from './Applicants';
import Pets from './Pets';

class PetDisplay extends React.Component {
    render() {
        return (
            <div>
                <h2>Adopt Now</h2>
                <h3>Furry Friends</h3>
                <Pets />
                <h3>Applicant Queue</h3>
                <Applicants />
            </div>
        );
    }
}
export default withRouter(PetDisplay);