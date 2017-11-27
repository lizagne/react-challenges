import React from "react";

import Paragraph from "./Paragraph"
import Square from "./Square"

// we use className to add classes for Bootstrap styling
const Aside = () => (
    <aside className="col-md-4">

    	<Paragraph />
    	<Square />

    </aside>
);

export default Aside;