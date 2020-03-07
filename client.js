$(document).ready(onReady);

function onReady(){
console.log('You got this!!');

$('#btn-add').on('click', handleClick);
}

function handleClick(){
    console.log('In handleClick');
    
    event.preventDefault();

    let firstName = $('#First-Name').val();
    let lastName = $('#Last-Name').val();
    let EmployeeId = $('#Employee-ID').val();
    let title = $('#Title').val();
    let annualSalary = $('#Annual-Salary').val();

    console.log('get inputs', firstName, lastName, EmployeeId, title, annualSalary);

    addEmployee(firstName, lastName, EmployeeId, title, annualSalary);
    console.log('All emplyees', employeeList);
    
    

    appendEntryToDom();

    $('#First-Name').val('');
    $('#Last-Name').val('');
    $('#Employee-ID').val('');
    $('#Title').val('');
    $('#Annual-Salary').val('');
    
}

function addEmployee(firstName, lastName, EmployeeId, title, annualSalary){
    console.log('in addEmployee');
    let employee = {firstName, lastName, EmployeeId, title, annualSalary }
    console.log('new employee', employee);
    employeeList.push(employee); 
}



let employeeList = [];

employeeList.push({firstName:'Bob', lastName:'Williams', EmployeeId:1234, title:'Doctor', annualSalary:100000});

console.log('list of emplyee info', employeeList);


function appendEntryToDom(){
    console.log('in appendEntryToDom');
    
    let tableEntry = $('#TableFirstName');

    tableEntry.empty();

    for(item of employeeList){
        let tableItem=$(`<td>${item.firstName}</td>`);
    tableEntry.append(tableItem);
    }
}