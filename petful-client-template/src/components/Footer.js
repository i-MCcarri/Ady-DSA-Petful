import React from 'react';
import { FaHome, FaStopwatch, FaTools } from 'react-icons/fa';

export default class Footer extends React.Component {
    render() {
        return (
            <div id='footer'>
                <label htmlFor='home'></label>
                <button id='home'><a href='../'>Home</a></button>
                <label htmlFor='adopt'></label>
                <button id='adopt'><a href='../adopt'>Adopt</a></button>
                <label htmlFor='pets'></label>
                <button id='pets'><a href='../pets'>Pets</a></button>
            </div>
        );
    }
}