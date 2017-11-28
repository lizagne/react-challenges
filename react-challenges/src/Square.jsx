//Create a component <Square> that displays a square <div> that is 200×200px and has a red background. You'll need to look at the React docs and how to use the style attribute.

//challenge 2: 
//Update your <Square> component so that it can accept a colour prop, which will change the background colour of the square. Also add a default value for colour.


//Challenge 3:
//Update your <Square colour="hotpink"> component so that the border starts black, but when it is clicked it changes to the passed in colour. It should alternate every time you click.


import React, { Component } from "react";


class Square extends Component {
	constructor(props) { //constructing the properties

		super(props); //this makes Component work

		this.state = { //this is an object literal
			black: true, //this should always be a comma not a semi-colon 
		}

		this.onClick = this.onClick.bind(this);
	}

	onClick () { //this is the method
		this.setState({ black: !this.state.black }); //setting the state
	}

	render () { //this is a method
		return (
			<div
				onClick={ this.onClick }
				style={{
					height: '200px',
					width: '200px',
					borderWidth: '5px', 
					borderColor: this.state.black ? 'black' : this.props.color,
					borderStyle: 'solid',
					backgroundColor: 'pink',
				}}> 
			</div>
		);
	}
};

Square.defaultProps = {
    backgroundColor: 'hotpink',
};


export default Square;
