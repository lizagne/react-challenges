import React from "react";

// we use className to add classes for Bootstrap styling
const squareStyle = {
	backgroundImage: 'url("//78.media.tumblr.com/ea3884f17979500c2406fd4d21891195/tumblr_mr4humiiCH1r4xjo2o1_250.gif")',
	width: 200,
	height: 200,
}

const Square = () => (
	<div style={squareStyle}/>
);

export default Square ;
