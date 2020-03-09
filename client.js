$(document).ready(onReady);

function onReady() {
    console.log('You got this!!');

    //buttons to submit and delete
    $('#btn-add').on('click', submitClick);
}

//button function to add employee info from input fields
function submitClick() {
    console.log('In submitClick');

    //prevent refresh in forms
    event.preventDefault();

    //assign variables to HTML input fields
    let firstName = $('#First-Name').val();
    let lastName = $('#Last-Name').val();
    let employeeId = $('#Employee-ID').val();
    let title = $('#Title').val();
    let annualSalary = $('#Annual-Salary').val();

    console.log('get inputs', firstName, lastName, employeeId, title, annualSalary);

    //call function to add employee info to an array
    addEmployee(firstName, lastName, employeeId, title, annualSalary);
    console.log('All emplyees', employeeList);

    //call function to append to DOM
    appendEntryToDom();
    monthlyCost();

    //clear fields on DOM
    $('#First-Name').val('');
    $('#Last-Name').val('');
    $('#Employee-ID').val('');
    $('#Title').val('');
    $('#Annual-Salary').val('');

}

//deletes row from table
$(document).on("click", '#del-Button', function () {
    $(this).closest('tr').remove();
    // deleteFromArray();
});

//function to add employee to an array
function addEmployee(firstName, lastName, employeeId, title, annualSalary) {
    console.log('in addEmployee');
    let employee = { firstName, lastName, employeeId, title, annualSalary }
    console.log('new employee', employee);
    employeeList.push(employee);
}


//array
let employeeList = [];


console.log('list of emplyee info', employeeList);

//function to append to DOM
function appendEntryToDom() {
    console.log('in appendEntryToDom');
    //reference table in HTML
    let tableEntry = $('#myTable');

    //empty tableEntry
    tableEntry.empty();

    //for loop to go through array and append to DOM
    for (item of employeeList) {
        let $td = $(`
        <tr>
        <td>${item.firstName}</td>
        <td>${item.lastName}</td>
        <td>${item.employeeId}</td>
        <td>${item.title}</td>
        <td>${item.annualSalary}</td>
        <td><button id=del-Button>Delete</button></td>
        </tr>`
        );
        tableEntry.append($td);
    }
}

//delete object from array 
function deleteFromArray() {
    console.log('in deleteFromArray');
}

//function to calculate monthly costs
function monthlyCost() {
    let budget = 0;
    for (let i = 0; i < employeeList.length; i++) {
        budget += Number(employeeList[i].annualSalary / 12);
    }
    if (budget > 20000) {
        $('#budgetAmount').css("background-color", "red");
    }
    let el = $('#budgetAmount');
    el.empty();
    el.append(Number(budget).toFixed(2));
}

