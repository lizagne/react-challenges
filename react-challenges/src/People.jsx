//Create a component <People> that displays a list of names in a <ul>. The names should comes from an array.

import React from "react";


let names = ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"];


// we use className to add classes for Bootstrap styling
const People = () => (
    <div>
	    <ul className="people">
	    	{ names.map(i => (
	    		<li key={ i }>
	    			{ i }
	    		</li>
	    	))}
	    </ul>
	</div>
);

export default People

