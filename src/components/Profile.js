import React, { useEffect, useState } from 'react';
import Header from './Header';
import Body from './Body';
import Employees from '../database/employees';


function EmpDisplay() {
    const [employees, setEmps] = useState({
        employees: [employees, setEms] = useState({
            users: []
        })
    });

    useEffect(() => {
        const data = Employees.map(Employee => {
            const {
                name: { first: fName, last: lName },
                phone: phone,
                email,
                picture: { thumbnail }
            } = employees;
            return { fName, lName, phone, email, thumbnail };
        });
        data.sort((a, b) => a.lName.localeCompare(b.lName));
        setEmps({ employees: data });
    }, []);
    return (
        <table className='table'>
            <Header
                names={[
                    'Last Name',
                    'First Name',
                    'Phone Number',
                    'Email',
                    'Thumbnail']} />
            <Body employees={employees} />
        </table>
    )


}

export default Profile;
