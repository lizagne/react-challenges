//Create a component <Square> that displays a square <div> that is 200×200px and has a red background. You'll need to look at the React docs and how to use the style attribute.




import React from "react";

// we use className to add classes for Bootstrap styling

const squareStyle = {
	backgroundColor: 'red',
	width: 200,
	height: 200,
}

const Square = () => (
	<div style={squareStyle} />
);

export default Square;



