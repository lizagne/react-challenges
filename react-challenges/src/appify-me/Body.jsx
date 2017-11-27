import React from "react";


import Header from "./Header"
import Aside from "./Aside"
import Main from "./Main"
import Paragraph2 from "./Paragraph2"
import Items from "./Items"

// we use className to add classes for Bootstrap styling
const Body = () => (
    <body className="container">
        <Header />
		<Aside />
		<Main />
		<Paragrah2 />
		<Items />
    </body>
);

export default Body;