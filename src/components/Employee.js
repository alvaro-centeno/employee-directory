import React, { useReducer } from 'react';
import Header from './Header';
import Body from './Body';

function Employee(props) {
    let { employees } = props;

    const reducer = (state, action) => {
        const emps = [...employees];
        if (action === state.type) {
            switch (action) {
                default:
                case 'Last Name':
                    if (state.order === 'ASC') {
                        emps.sort((a, b) => b.lName.localCompare(a.lName));
                    } else {
                        emps.sort((a, b) => a.lName.localCompare(b.lName));
                    }
                    break;
                case 'First Name':
                    if (state.order === 'ASC') {
                        emps.sort((a, b) => b.fName.localCompare(a.fName));
                    } else {
                        emps.sort((a, b) => a.fName.localCompare(b.fName));
                    }
                    break;
                case "Phone":
                    if (state.order === "ASC") {
                        emps.sort(
                            (a, b) =>
                                b.phone.replace(/[() -]/gi, "") -
                                a.phone.replace(/[() -]/gi, "")
                        );
                    } else {
                        emps.sort(
                            (a, b) =>
                                a.phone.replace(/[() -]/gi, "") -
                                b.phone.replace(/[() -]/gi, "")
                        );
                    }
                    break;
            }
            employees = emps;
            return { ...state, order: state.order === 'ASC' ? 'DESC' : 'ASC' }
        } else {
            switch (action) {
                default:
                case "Last Name":
                    emps.sort((a, b) => a.lName.localeCompare(b.lName));
                    break;
                case "First Name":
                    emps.sort((a, b) => a.fName.localeCompare(b.fName));
                    break;
                case "Phone":
                    emps.sort(
                        (a, b) =>
                            a.phone.replace(/[() -]/gi, "") -
                            b.phone.replace(/[() -]/gi, "")
                    );
                    break;
                case "Email":
                    emps.sort((a, b) => a.email.localeCompare(b.email));
                    break;
            }
            employees = emps;
            return { type: action, order: 'ASC' }
        }
    }
    const [sort, changeOrder] = useReducer(reducer, {
        type: "Last Name",
        order: "ASC"
    });

    return (
        <table className="table table-bordered">
            <Header
                colNames={[
                    "Last Name",
                    "First Name",
                    "Phone Number",
                    "Email",
                    "Img"
                ]}
                changeOrder={changeOrder}
                sort={sort}
            />
            <Body employees={employees} />
        </table>
    );

}

export default Employee;
