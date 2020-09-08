import React, { useState, useContext } from "react";
import "../style/Style.css";
import EmployeeContext from "./utils/empContext";

function Column(props) {
    const [filterSwitch, setFilterSwitch] = useState(false);
    const { handleSort } = useContext(EmployeeContext);
    const [filterVal, setfilterVal] = useState("");

    function filterClick(event) {
        event.preventDefault();
        setFilterSwitch(!filterSwitch);
        if (filterSwitch) { setfilterVal("") };
    }

    function handleInputChange(event) {
        setfilterVal(event.target.value);
    }

    return (
        <th scope="col">{props.column.colDes}
            <div className="btn-group-justified btn-group-sm btn-group-vertical px-2">
                <button type="button" className="btn btn-default" onClick={handleSort} data-colname={props.column.colname} data-sort-order="asc"><i class="far fa-arrow-alt-circle-up"></i>

                </button>
                <button type="button" className="btn btn-default" onClick={handleSort} data-colname={props.column.colname} data-sort-order="des"><i class="far fa-arrow-alt-circle-down"></i>

                </button>
            </div>
            <button type="button" className="btn btn-default" onClick={filterClick} data-colname={props.column.colname} data-filter-switch={filterSwitch}><i class="fas fa-filter"></i></button>
            <input type="text" className={`form-control mt-2 disp-${filterSwitch}`} placeholder={`Enter ${props.column.colDes}`} onChange={handleInputChange} value={filterVal}></input>
        </th>
    );
}

export default Column;