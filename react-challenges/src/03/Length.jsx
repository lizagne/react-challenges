//Create a <Length> component. It should contain an <input> and tell you how many characters have been typed into the <input>.


import React, { Component } from "react"; //calling react


class Length extends Component { //calling the component
	
	constructor(props) { //constructing the intial states
	        super(props);//super props has to be called as otherwise this.state etc doesn't work
	        this.state = { value: "" }; //set the initial value to an empty string, no space so that it starts with no characters

	        this.update = this.update.bind(this); //binding the updates
	    }


	update(e) {
    // e.target is the DOM element the event fired on
    // input elements have a value property that represents their current value
    this.setState({ value: e.target.value }); 
	}

	render() {
        return (
            <div className="form-group"> {/*wrapping the form*/}
                <label>{ this.props.label }</label> {/*picking up the label props from the parent App*/}
                <input onChange={ this.update } value={ this.state.value } className="form-control" /> 
                <p className="help-block">Length: { this.state.value.length } characters</p> {/*the jsx in the middle is collecting the amount of characters*/}
            </div>
        );
    }
}

export default Length;



