import React from "react";
import './style.css'

function Jumbotron() {
    return (
        <div className="jumbotron mb-0 px-3 py-5 rounded-0">
            <div className="jumbotron-info border rounded p-2">
                <h1 className="display-4">Employee Directory</h1>
                <p className="lead">
                    Keep track of your employees and quickly search for someone. Click the
                    table headers to sort it.
        </p>
            </div>
        </div>
    );
}

export default Jumbotron;