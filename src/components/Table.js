import React from "react";
import "../style/Style.css";
import Header from "./Header";
import Body from "./Body"

function Table() {
    return (

        <div className="row ">
            <div className="col tableFixHead" >
                <table className="table "  >
                    <Header />
                    <Body />
                </table>
            </div>

        </div>

    )
};

export default Table;
