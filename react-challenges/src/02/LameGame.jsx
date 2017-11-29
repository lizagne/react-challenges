//Create a <LameGame aim={ x }> component. When a "Start" button is pressed it displays "{ aim } seconds" and shows a "Now" button. The idea is to click the "Now" button as close to aim seconds after you pressed "Start". Once you click on "Now" it should tell you how close you were in 1/10ths of a second. The "Start" and "Now" buttons should only show when relevant.


import React, { Component } from "react";

class LameGame extends Component {
	constructor(props) { //constructing the properties

		super(props); //this makes Component work

		this.state = { //this is an object literal
			counter: 0, //this should always be a comma not a semi-colon 
		}

		this.start = this.start.bind(this);
		this.now = this.now.bind(this);
	}

	start () { //this is the method
		if(this.state.counter < this.props.max ) { //the conditional
			this.setState({
				counter: this.state.counter + 1,
			});
		}
	}

	render () { //this is where you set up the JSX and what comes out to the page
		return (
			<div>
				<p> { this.state.counter } </p>
				<button
					onClick={ this.clickPlus }>
					Start
				</button>
				<button
					onClick={ this.clickMinus }> 
					Now
				</button>
			</div>
		);
	}
};

export default Counter;
