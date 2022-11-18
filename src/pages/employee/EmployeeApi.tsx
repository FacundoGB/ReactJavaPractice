import EmployeeInterface from "./Employee";

export function searchEmployee() { 

if(!localStorage['employeeList']) {
    localStorage['employeeList'] = '[]';
}
    let employeeList = localStorage['employeeList'];
    employeeList = JSON.parse(employeeList);  
    return employeeList;
}
export function removeEmployee(id: string) {
    let employees = searchEmployee();
    let index = employees.findIndex((employees:EmployeeInterface) => employees.id == id);
    employees.splice(index, 1);
    localStorage['employeeList'] = JSON.stringify(employees);
    
}

export function saveEmployee(employee:EmployeeInterface) { 
    let employeeList = searchEmployee(); //array with clients
    if(employee.id) {
        //edit - search by id & replace
        let index = employeeList.findIndex((e:EmployeeInterface) => e.id == employee.id);
        
        if(index >=0) {
            employeeList[index] = employee;
        }
    }else {
        //new - generates id & does a push to the array
        employee.id = String(Math.round(Math.random()*10000));
        employeeList.push(employee);
    }
    localStorage['employeeList'] = JSON.stringify(employeeList); //we transform it into a string
}

export function searchEmployeeById(id:string) {
    let employeeList = searchEmployee();
    return employeeList.find((employee: any) => employee.id == id);
}
