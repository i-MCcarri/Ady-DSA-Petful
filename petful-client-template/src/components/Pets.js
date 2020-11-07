import React from 'react';
import { withRouter } from 'react-router-dom';

class PetDisplay extends React.Component {
    render() {
        return (
            <div id='petsWrapper'>
                <div id='catContainer'>
                    <h3>The Feline</h3>
                    <p>physical description</p>

                    <p>
                        <img 
                            src="smiley.gif" 
                            alt="description" 
                            // style="float:left;width:42px;height:42px;"
                        />
                        name and details
                    </p>
                    <label htmlFor='adoptCat'></label>
                    <button id='adoptCat' onClick={this.adopt}>Adopt</button>
                </div>  
                <div id='dogContainer'>
                    <h3>The Canine</h3>
                    <p>physical description</p>

                    <p>
                        <img 
                            src="smiley.gif" 
                            alt="description" 
                            // style="float:left;width:42px;height:42px;"
                        />
                        name and details
                    </p>
                    <label htmlFor='adoptDog'></label>
                    <button id='adoptDog' onClick={this.adopt}><a href='/'>Adopt</a></button>
                </div>
            </div>
        );
    }
}
export default withRouter(PetDisplay);