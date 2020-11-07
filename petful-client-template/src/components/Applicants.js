import React from 'react';
import { withRouter } from 'react-router-dom';

class Applicants extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          people: []
        };
    }

    render() {
        const applicant_queue = this.state.people.map(name => 
            <li key={name}>
                <div id='displayQueue'>{name}</div>
            </li>)
        return (
            <div>
                <ol id='appQueue'>
                    {/* {applicant_queue} */}
                    <li key='1'>
                        <div id='displayQueue'>Somebody</div>
                    </li>
                    <li key='2'>
                        <div id='displayQueue'>Somebody</div>
                    </li>
                    <li key='3'>
                        <div id='displayQueue'>Somebody</div>
                    </li>
                    <li key='4'>
                        <div id='displayQueue'>Somebody</div>
                    </li>
                    <li key='5'>
                        <div id='displayQueue'>Somebody</div>
                    </li>
                    <li key='6'>
                        <div id='displayQueue'>Somebody</div>
                    </li>
                </ol>
            </div>
        );
    }
}
export default withRouter(Applicants);