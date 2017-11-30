//Create a <List> component that consists of a <ul>, an <input>, and a <button>Add</button>. When you click the "Add" button, whatever is in the <input> should get added to the <ul>.

import React, { Component } from "react"; //calling react

class List extends Component { //calling the component
	
	constructor(props) { //constructing the intial states
	        super(props);//super props has to be called as otherwise this.state etc doesn't work
	        this.state = { items: [], value: "" }; //set the initial value to an empty string, no space so that it starts with no characters
	        
            this.update = this.update.bind(this); 
            this.submit = this.submit.bind(this); 
	    }

	update(e) {
    // e.target is the DOM element the event fired on
    // input elements have a value property that represents their current value
    this.setState({ value: e.target.value }); 
	}

    submit(e) {
    e.preventDefault(e); //prevents the default action of the browser
    if (!this.state.value.length) { //if it's not the length of the word then return nothing
      return;
    }
    const newItem = { //create a new variable which holds the new state of the word
      value: this.state.value,
    };
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      value: ''
    }));
    }

	render() {
        return (
            <div> {/*wrapping the form*/}

                <h3>{ this.props.label }</h3> {/*picking up the label props from the parent App*/}

                <form onSubmit={this.submit}>

                <input onChange={ this.update } value={ this.state.value } className="form-control" /> {/*this is taking the current state so whatever is typed into the input with the value */}

                <button onClick={ this.state.items }>Add</button> 
                
                <ul> 
                {this.state.items.map(item => (
          			<li key={item}>{item.value}</li>
        		))}
                </ul>

                </form>

            </div>
        );
    }
}

export default List;

