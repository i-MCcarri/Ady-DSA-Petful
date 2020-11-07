import React from 'react';
import Adoption from './Adoption';
import Applicants from './Applicants';


export default class Adopt extends React.Component {
    render() {
        return (
            <div id='adopt'>
                <h2>Ready to Adopt</h2>
                <div id='appForm'>
                    <Adoption />
                </div>
                <h2>Current Applicants</h2>
                <div id='applicantQueue'>
                    <Applicants />
                </div>
            </div>
        );
    }
}