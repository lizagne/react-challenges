//Challenge 2: Update your <Header> component so that it can accept a text prop, which it will display between the <h1> tags



import React from "react";

// we use className to add classes for Bootstrap styling
const Header = props => (
    <header className="page-header">
        <h1> { props.title } </h1>
    </header>
);

export default Header;


