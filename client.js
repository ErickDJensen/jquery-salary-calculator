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
    let employeeId = $('#Employee-ID').val();
    let title = $('#Title').val();
    let annualSalary = $('#Annual-Salary').val();

    console.log('get inputs', firstName, lastName, employeeId, title, annualSalary);

    addEmployee(firstName, lastName, employeeId, title, annualSalary);
    console.log('All emplyees', employeeList);
    
    

    appendEntryToDom();

    $('#First-Name').val('');
    $('#Last-Name').val('');
    $('#Employee-ID').val('');
    $('#Title').val('');
    $('#Annual-Salary').val('');
    
}

function addEmployee(firstName, lastName, employeeId, title, annualSalary){
    console.log('in addEmployee');
    let employee = {firstName, lastName, employeeId, title, annualSalary }
    console.log('new employee', employee);
    employeeList.push(employee); 
}



let employeeList = [];

employeeList.push({firstName:'Bob', lastName:'Williams', employeeId:1234, title:'Doctor', annualSalary:100000});

console.log('list of emplyee info', employeeList);


function appendEntryToDom(){
    console.log('in appendEntryToDom');
    
    let tableEntry = $('#myTable');

    tableEntry.empty();

    for(item of employeeList){
        let $td=$(`<tr><td>${item.firstName}</td><td>${item.lastName}</td><td>${item.employeeId}</td><td>${item.title}</td><td>${item.annualSalary}</td></tr>`);
    tableEntry.append($td);
    }
}

// $('#myTable').append('<tr><td>firstName</td><td>lastName</td>...</tr>');
// ${pet.name}