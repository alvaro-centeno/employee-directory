import React from 'react'

function Body(props) {

    const { employees } = props.employees;
    const empInfo = employees.map(employee => {
        return (
            <tr>
                <td className="border-right">{employee.fName}</td>
                <td className="border-right">{employee.lName}</td>
                <td className="border-right">{employee.position}</td>
                <td className="border-right">{employee.email}</td>
                <td className="border-right">
                    <img src={employee.thumbnail} alt='employeePicture' />
                </td>
            </tr>
        )
    })

    return (
        <div>
            <tbody>{empInfo}</tbody>
        </div>
    )
}

export default Body
