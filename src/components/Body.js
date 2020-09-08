import React, { useContext } from "react";
import "../style/Style.css";
import Row from "./Row"

function Body() {
    const { empData } = useContext(EmpContext);
    return (
        <tbody className="">
            {empData.length >= 1 ? empData.map(empRec => (
                <Row empData={empRec} />
            )) : <tr></tr>}
        </tbody>
    )
};

export default Body;
