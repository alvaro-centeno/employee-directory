import React from "react";

const EmployeeContext = React.createContext({
    empData: [],
    handleSort: () => { },
    handleFilter: () => { }
});

export default EmployeeContext;
