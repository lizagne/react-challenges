import React, { Component } from "react"; //calling components from React

class Button extends Component { //creating a class and extending the Components


    
    // use the selected prop
    render() {
        let { name, selected, onClick } = this.props;
        let className = "btn " + (selected ? "btn-danger" : "btn-primary"); //this is asking if the button is selected then change the class to btn-danger, if not to button primary.

        return <button className={ className } onClick={ onClick }>{ name }</button>;
    }
}


export default Button;