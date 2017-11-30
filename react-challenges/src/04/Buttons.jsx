//Create the <Button> and <Buttons> components from the notes. Once you're done, update it so that it displays four <Button>s. Make sure only one of them can be turned on at once.


import React, { Component } from "react"; //this is importing react and using Components
import Button from "./Button"; //this is importing the child (controlled component-maybe-I'll look that up) jsx file so the parent (container component - this file) can control its state.

class Buttons extends Component { //class which uses components
    constructor(props) { //creating the initial states
        super(props);//we have to use to enable this.state this.props, render, all the functionality that react uses to do stuff
        this.state = { selected: 1 };//this is the intial state, setting up the state, we've used numbers because it allows for more things to happen, this is an object literal, using key and value key: value

        this.clicked = this.clicked.bind(this); //binding this to the class as it's been lost somewhere (we don't actually need this)
    }

    clicked(anyNumber) { //method
        this.setState({ selected: anyNumber }) //when the button is clicked 
    }

    render() { //everything you pass to a component is a prop...these props in green have functions inside of them
        return (
        	<div>
            	<Button name="Hello" selected={ this.state.selected === 1 } onClick={ () => this.clicked(1) }></Button> 
            	<Button name="Hello" selected={ this.state.selected === 2 } onClick={ () => this.clicked(2) }></Button>
            	<Button name="Hello" selected={ this.state.selected === 3 } onClick={ () => this.clicked(3) }></Button>
            	<Button name="Hello" selected={ this.state.selected === 4 } onClick={ () => this.clicked(4) }></Button>
            </div>
        );
    } //all the buttons need to have unique numbers that match on selected and onClick so that only one can be red at a time.
}

export default Buttons;