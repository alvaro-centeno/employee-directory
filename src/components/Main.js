import React, { useState, useEffect } from 'react';
import Form from '../components/Form';
import Employee from '../components/Employee';
import Employees from '../database/employees'

let empData = Employees.map(employee => {
    let {
        name: { first: fName, last: lName },
        phone,
        email,
        picture: { thumbnail }
    } = employee;
    return { fName, lName, phone, email, thumbnail };
});

empData.sort((a, b) => a.lName.localeCompare(b.lName));
const initialState = empData;

function Main() {
    const [employees, setEmps] = useState([]);

    const submit = empData => {
        const { search, category } = empData;
        const allEmps = initialState;
        if (search) {
            const empFilter = allEmps.filter(employee => employee[category].toString().toLowerCase().includes(search));
            setEmps(empFilter);
        } else {
            setEmps(initialState);
        }
    };

    useEffect(() => {
        setEmps(initialState);
    }, []);
    return (
        <div className="col-12">
            <Form submit={submit} />
            <Employee employees={employees} />
        </div>
    );
}

export default Main;
