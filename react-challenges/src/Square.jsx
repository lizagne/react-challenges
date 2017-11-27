//Create a component <Square> that displays a square <div> that is 200×200px and has a red background. You'll need to look at the React docs and how to use the style attribute.

//challenge 2: 
//Update your <Square> component so that it can accept a colour prop, which will change the background colour of the square. Also add a default value for colour.

import React from "react";

const Square = ({ color }) => (
	<div style={{
		height: '200px',
		width: '200px',
		border: '5px solid green',
		background: color,
	}}> 
	</div>

);

Square.defaultProps = {
    backgroundColor: 'blue',
};


export default Square;
