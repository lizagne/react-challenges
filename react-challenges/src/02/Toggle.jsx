// Create <ToggleText initial="Hello" alternate="World"> component. It should consist of a <p> and a <button>Toggle</button>. When the <button> is clicked the text of the <p> tag should alternate between initial and alternate.


import React, { Component } from "react";


class Toggle extends Component {
	constructor(props) { //constructing the properties

		super(props); //this makes Component work

		this.state = { //this is an object literal
			toggle: true, //this should always be a comma not a semi-colon 
		}

		this.onClick = this.onClick.bind(this);
	}

	onClick () { //this is the method
		this.setState({ toggle: !this.state.toggle }); //setting the state
	}

	render () { //this is a method
		return (
			<button
				onClick={ this.onClick }>
				{ this.state.toggle ? this.props.initial : this.props.alternate }
			</button>
		);
	}
};



export default Toggle;
