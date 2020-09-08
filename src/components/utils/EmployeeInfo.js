export default {
    getEmp: function (colname = "", sortOrder = "none") {

        const emps = require("../../database/employees");
        var empsSorted = [];

        if (sortOrder === "asc") {
            empsSorted = emps.slice(0).sort((a, b) => {
                if (a[colname] > b[colname]) {
                    return 1;
                }
                else {
                    return -1;
                };
            })
        }
        else if (sortOrder === "des") {
            empsSorted = emps.slice(0).sort((a, b) => {
                if (a[colname] > b[colname]) return -1;
                else return 1;
            })
        }
        else {
            empsSorted = emps;
        };
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (empsSorted === {}) {
                    reject(new Error("Error"))
                }
                else {
                    resolve(empsSorted);
                }
            }, 1000);
        });
    },
    getFiltered: function (colName = "", filterVal = "") {

        return new Promise((resolve, reject) => {
            if (filterVal !== "") {
                const emps = require("../../database/employees");

                var filterValConv = "";
                if (typeof (filterVal) === "string") {
                    filterValConv = filterVal.toUpperCase();
                }
                else {
                    filterValConv = filterVal;
                }

                const empRecFiltered = emps.slice(0).filter(empRec => {

                    var currentRecVal = toString(empRec[colName]).toUpperCase();
                    if (typeof (empRec[colName]) === "string") {
                        currentRecVal = empRec[colName].toUpperCase();
                    }
                    else {
                        currentRecVal = empRec[colName].toString();
                    }
                    if (currentRecVal === filterValConv) {
                        return true;
                    }
                });

                setTimeout(() => {
                    if (empRecFiltered === {}) {
                        reject(new Error("Error"))
                    }
                    else {
                        resolve(empRecFiltered);
                    }
                }, 500);
            }
            else {
                const emps = require("../../database/employees");
                setTimeout(() => {
                    if (emps === {}) {
                        reject(new Error("Error"))
                    }
                    else {
                        resolve(emps);
                    }
                }, 1000);

            }
        });
    }
};
