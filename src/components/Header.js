mport React from "react";
import "../style/Style.css";
import Column from "./Column";

function Header() {
    const columns = require("../database/columnNames");;
    return (
        <thead className=" ">
            <tr >
                {columns.map(column => (
                    <Column column={column} />
                ))}
            </tr>
        </thead>
    )
};

export default Header;

