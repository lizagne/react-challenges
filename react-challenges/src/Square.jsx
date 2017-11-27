//Create a component <Square> that displays a square <div> that is 200×200px and has a red background. You'll need to look at the React docs and how to use the style attribute.

//challenge 2: 
//Update your <Square> component so that it can accept a colour prop, which will change the background colour of the square. Also add a default value for colour.

import React from "react";

const squareStyle = {
	backgroundColor: 'red',
	width: 200,
	height: 200,
}

const Square = props => (
	<div style={squareStyle} />
);


const Square = ({ backgroundColor, width, height  }) => (
	<div style=

);

export default Square;



//Destructuring props: 
import React from "react";

const Figure = ({ caption, src }) => (
    <figure className="panel panel-default">
        <div className="panel-body">
            <img className="img-thumbnail" alt={ caption } src={ src } />
        </div>
        <figcaption className="panel-footer">{ caption }</figcaption>
    </figure>
);

export default Figure;