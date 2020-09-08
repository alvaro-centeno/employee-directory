import React, { useContext } from "react";
import "../style/Style.css";
import Row from "./Row"
import EmployeeContext from "./utils/EmpContext";

function Body() {
    const { empData } = useContext(EmployeeContext);
    return (
        <tbody className="">
            {empData.length >= 1 ? empData.map(empRec => (
                <Row empData={empRec} />
            )) : <tr></tr>}
        </tbody>
    )
};

export default Body;
