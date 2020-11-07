import React from 'react';
import { withRouter } from 'react-router-dom';

class Adoption extends React.Component {
    render() {
        return (
            <form>
                <label htmlFor='fullName'>Full Name</label><br/>
                <input type='text' id='fullName' name='fullName'/><br/>
                <label htmlFor='petType'>Pet Type:</label><br/>
                <select 
                    name='pet' 
                    id='petType' required  >                                    
                    <option value='na'>----</option>
                    <option value='Cat'>Cat</option>
                    <option value='Dog'>Dog</option>
                </select>
                <label htmlFor='submitAppForm'></label><br/>
                <button 
                    type='submit' 
                    id='submitAppForm' 
                    // onClick={ }
                    >Apply</button>
            </form>
        );
    }
}
export default withRouter(Adoption);