//Create a component <Squares> that displays two of your <Square> components. The first <Square>s border colour should always be the opposite of the second one. 

import React, { Component } from "react"; //calling components from React

class Square extends Component { //creating a class and extending the Components
    
    // use the selected prop
    render() {

    	let { selected, onClick } = this.props;

        return <div
				onClick={ onClick }
				style={{
					height: '200px',
					width: '200px',
					borderWidth: '5px', 
					borderColor: selected ? 'black' : 'red',
					borderStyle: 'solid',
					backgroundColor: 'pink',
				}}> 
				</div>
    }
}


export default Square;
