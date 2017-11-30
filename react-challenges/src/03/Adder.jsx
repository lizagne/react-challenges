//Create an <Adder> component. It should have a number <input> field and two <button>s, "Add" and "Total". When the "Add" button is pressed the number should be added to a list of numbers on screen. When the "Total" button is pressed the total of all the numbers in the list should be displayed.


import React, { Component } from "react"; //calling react

class Adder extends Component { //calling the component
	
	constructor(props) { //constructing the intial states
	        super(props);//super props has to be called as otherwise this.state etc doesn't work
	        this.state = { numbers: [ ], value: "" }; //set the initial value to an empty string, no space so that it starts with no characters. Limitations of state are that it has to be an object. 
	        
            this.update = this.update.bind(this); 
	    }

	update(e) {
    // e.target is the DOM element the event fired on
    // input elements have a value property that represents their current value
    this.setState({ value: e.target.value }); 
	}

	render() {

		const sum = this.state.numbers.reduce((sum, number) => sum + number, 0);

        return (
            <div className="form-group"> {/*wrapping the form*/}

                <h3>{ this.props.label }</h3> {/*picking up the label props from the parent App*/}

                <form onSubmit={this.submit}>

                <input onChange={ this.update } value={ this.state.value } type="number" /> {/*this is taking the current state so whatever is typed into the input with the value */}

                <button onClick={ this.state.numbers }>Add</button> 

                <button onClick={ this.state.numbers }>Total</button> 
                
              	<p>{ sum }</p>

                </form>

            </div>
        );
    }
}

export default Adder;


