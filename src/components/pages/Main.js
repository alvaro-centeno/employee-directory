import React, { useEffect, useState } from "react";
import Nav from "../Nav";
import Table from "../Table";
import "../../style/Style.css";
import EmployeeContext from "../utils/empContext";
import EmpInfo from "../utils/EmployeeInfo";

function Main() {
    const [empState, setempState] = useState({
        empData: []
    });

    useEffect(() => {
        renderEmployees();
    }, []);

    function renderEmployees(colName, sortOrder) {
        EmpInfo.getEmp(colName, sortOrder)
            .then((response) => {
                setempState(response);
            })
            .catch(err => console.log(err))
    }

    function handleSort(event) {
        event.preventDefault();
        event.persist();
        renderEmployees(event.currentTarget.dataset.colname, event.currentTarget.dataset.sortOrder);
    };

    function handleFilter(colName, filterVal) {
        EmpInfo.getFiltered(colName, filterVal)
            .then((response) => {
                setempState(response.slice(0));
            })
            .catch(err => console.log(err))
    };

    return (
        <div className="container-fluid ">
            <EmployeeContext.Provider value={{ empData: empState, handleSort: handleSort, handleFilter: handleFilter }}>
                <Nav />
                <Table />
            </EmployeeContext.Provider>

        </div>
    );
}

export default Main;
