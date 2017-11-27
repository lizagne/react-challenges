import React from "react";

import Header from "./Header" //importing the header
import Paragraph from "./Paragraph"
import Square from "./Square"
import People from "./People"

// we use className to add classes for Bootstrap styling
const Stuff = () => (
	<div>
	    <Header />
	    <Paragraph />
	    <Square />
	    <People />
	</div>
);

export default Stuff;