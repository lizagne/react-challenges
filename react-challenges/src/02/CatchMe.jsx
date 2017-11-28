// Create a <CatchMeIfYouCan jump="100"> component. It should have a <button> that when clicked moves jump pixels down the screen.

import React, { Component } from "react";

class CatchMe extends Component {
	constructor(props) { //constructing the properties

		super(props); //this makes Component work

		this.state = { //this is an object literal
			btn: 0, //this should always be a comma not a semi-colon 
		}

		this.click = this.click.bind(this);
	}

	click () { //this is the method
		this.setState({ btn: this.state.btn + this.props.jump }); //setting the state
	};

	render () { //this is a method
		return (
			<div>
				<button
					style={{
						position: 'relative',
						top: this.state.btn
					}}
					onClick={ this.click }>
					Catch Me If You Can!
				</button>
			</div>
		);
	}
};

export default CatchMe;


//
// $(document).ready($ => {
// //this is the wrapping code for all jQuery


// 	let button = $("#btn");
// 	let top = button.position().top;

	
// 	button.on("click", () => {

// 		button.css({
// 			position: "absolute",
// 			top: top += 50,
// 		})

// 	});


// //end of wrapping code
// });
