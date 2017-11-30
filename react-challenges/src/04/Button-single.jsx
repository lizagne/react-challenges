import React, { Component } from "react";

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = { selected: false };
        this.clicked = this.clicked.bind(this);
    }

    clicked() {
        this.setState({ selected: !this.state.selected });
    }

    render() {
        let className = "btn " + (this.state.selected ? "btn-danger" : "btn-primary");
        let { name } = this.props;
        return <button className={ className } onClick={ this.clicked }>{ name }</button>;
    }
}

export default Button;