import React from "react";

// we use className to add classes for Bootstrap styling
const Items = () => (
    <div className="col-md-8">
        <ul className="list-group">
            <li className="list-group-item">Item 1</li>
            <li className="list-group-item">Item 2</li>
            <li className="list-group-item">Item 3</li>
            <li className="list-group-item">Item 4</li>
        </ul>

        <ul className="pagination">
            <li><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
        </ul>
    </div>
);

export default Items; 




