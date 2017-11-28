// Create a <StepCounter max="100" step="5" /> component. It should consist of a <p> containing a number (start at 0) and two buttons, + and -. When the user clicks the + button, the number should go up by step. When the user clicks the - button the number should go down by step. The number should not be able to go below 0. Use props to pass in a maximum value for the counter.



import React, { Component } from "react";

class StepCounter extends Component {
	constructor(props) { //constructing the properties

		super(props); //this makes Component work

		this.state = { //this is an object literal
			counter: 0, //this should always be a comma not a semi-colon 
		}

		this.clickPlus = this.clickPlus.bind(this);
		this.clickMinus = this.clickMinus.bind(this);
	}

	clickPlus () { //this is the method
		if(this.state.counter < this.props.max ) { //the conditional
			this.setState({
				counter: this.state.counter + this.props.step,
			});
		}
	}

	clickMinus () { //this is the method
		if(this.state.counter < this.props.max ) { //the conditional
			this.setState({
				counter: this.state.counter - this.props.step,
			});
		}
	}

	render () { //this is a method
		return (
			<div>
				<p> { this.state.counter } </p>
				<button
					onClick={ this.clickPlus }>
					Plus
				</button>
				<button
					onClick={ this.clickMinus }> 
					Minus 
				</button>
			</div>
		);
	}
};

export default StepCounter;
