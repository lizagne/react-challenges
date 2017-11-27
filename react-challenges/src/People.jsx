//Create a component <People> that displays a list of names in a <ul>. The names should comes from an array.

//Challenge2: Update your <People> component so that it can accept an array of names with a names prop. If no names are passed in it should display: "Nothing to see here"

import React from "react";

const People = props => (
    <div>
	    <ul>
	    	{ props.names.map(i => (
	    		<li key={ i }>
	    			{ i }
	    		</li>
	    	)) }
	    </ul>
	</div>
);

People.defaultProps = {
    message: "Nothing to see here",
};



export default People

