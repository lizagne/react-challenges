//Create a component <Password label="Password"> that contains an <input> with a <label>. 

//Inside a <SignUp minimumLength={ 12 }> component put two <Password> components: one should have the label "Password" and the other "Confirm Password". 

//Both <Password> components should have a red border unless they are longer than minimumLength and match each other.


import React, { Component } from "react"; //this is importing react and using Components

import Password from "./Square"; //this is importing the child (controlled component-maybe-I'll look that up) jsx file so the parent (container component - this file) can control its state.

class Squares extends Component { //class which uses components
    constructor(props) { //creating the initial states
        super(props);//we have to use to enable this.state this.props, render, all the functionality that react uses to do stuff
    
        this.state = { //this is an object literal
			selected: true, 
		} 
    }

    clicked(square) { //method
        this.setState({ selected: !this.state.selected }) //when the button is clicked 
    }

    render() { //everything you pass to a component is a prop...these props in green have functions inside of them
        return (
        	<div>
            	<Square 
            		selected={ this.state.selected === true } 
            		onClick={ () => this.clicked(true) }> 
            	</Square> 

            	<Square 
            		selected={ this.state.selected === false } 
            		onClick={ () => this.clicked(false) }>
            	</Square>
            </div>
        );
    } 
}

export default Squares;