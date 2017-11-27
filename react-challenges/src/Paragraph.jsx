// Update your <Paragraph> component so that it can accept a message prop, which it will display between the <p> tags. If no message is provided it should just display "Hello, world".



import React from "react";

// we use className to add classes for Bootstrap styling
// const Paragraph = props => (
//     <p> { props.message } </p>
// );


//Update your <Paragraph> component so that it uses children instead of the message prop

const Paragraph = ({ children }) => (
    <div>
        <p>
            { children }
            { " " }
        </p>
    </div>
);

// Paragraph.defaultProps = {
//     message: "Hello, world",
// };

export default Paragraph;




