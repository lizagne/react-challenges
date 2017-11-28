import React from "react";

import Header from "./Header" //importing the header
import Paragraph from "./Paragraph"
import Square from "./Square"
import People from "./People"

let names = ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"];
 
const Stuff = props => (
	<div>
	    <Header subtitle="This is the subtitle"> 
			My Amazing App  
		</Header>

		<Paragraph>
			 In hac habitasse platea dictumst. Aliquam erat volutpat. Ut tincidunt fringilla felis quis porttitor. Ut vel rutrum nisi. Cras rhoncus augue odio, a porta tellus porttitor ac. Sed in augue eget justo congue euismod. Pellentesque magna libero, porta sit amet ultricies rhoncus, convallis eget sapien. Nullam metus sem, lobortis quis turpis ac, aliquam commodo quam. Morbi ullamcorper faucibus lectus in luctus. Sed nec ligula sit amet sapien volutpat gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet sed metus et semper. Nulla rhoncus orci sit amet risus facilisis, id eleifend mi fermentum. 
		</Paragraph>



		{ props.square ? <Square /> : null } 


		<People names={ names }/>
	</div>
);

Square.defaultProps = {
    display: true,
};

export default Stuff;