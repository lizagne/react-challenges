//Create a component <Squares> that displays two of your <Square> components. The first <Square>s border colour should always be the opposite of the second one. 


import React, { Component } from "react"; //this is importing react and using Components

import Square from "./Square"; //this is importing the child (controlled component-maybe-I'll look that up) jsx file so the parent (container component - this file) can control its state.

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