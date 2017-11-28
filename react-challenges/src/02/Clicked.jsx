//- Create a `<Clicked>` component. It should initially display "Not clicked" in a `<p>`. Once it's been clicked it should change to "Clicked".

//- Setting up our **initial state**
//- Using `this.state` in our JSX
//- Updating `this.state` when events are fired

import React, { Component } from 'react';

class Clicked extends Component { 
	constructor(props) { 

		super(props);	

		this.onClick = this.onClick.bind(this);
 
		this.state = { //this is a object literal
	        clicked : false,
	    }
	}

	onClick () { //this is the method
		this.setState({ clicked : true }); //value
	}

	render () { //this is a method
		return (
			<div 
				className="jumbotron"
				onClick={ this.onClick }>
				{ this.state.clicked ? <p>Clicked</p> : <p>Not Clicked</p> } {/*this is the state*/}
			</div>	
		);
	}
};

export default Clicked;