// Write your solution in this file!
let employee = {
    name: "John",
    streetAddress: '334',
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value 
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const { [key]: deletedProperty, ...updatedEmployee } = employee;
    return updatedEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    if (employee.hasOwnProperty(key)) {
        delete employee[key];
    }
    return employee;
}
