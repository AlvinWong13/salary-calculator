// console.log('script.js');

$(document).ready(onReady);

let employees = [];

const totalSalaryMessage = 'Total Monthly Cost of All Employees: $';

let totalSalary = 0;

function onReady() {
  // console.log('Ready Now');

  // Add employee click
  $(document).on('click', '#inputEmployee', onAddEmployee);

  // Add employee delete
  $(document).on('click', '.deleteEmployee', onDeleteEmployee);
}

function onAddEmployee(event) {
  event.preventDefault();
  // console.log('Add Employee');

  // Grab item from DOM
  let firstName = $('#firstNameInput').val();
  let lastName = $('#lastNameInput').val();
  let id = $('#idNumber').val();
  let job = $('#jobTitle').val();
  let salary = $('#salaryInput').val();

  // create employee object
  let employeeInfo = {
    firstName: firstName,
    lastName: lastName,
    id: Number(id),
    job: job,
    salary: Number(salary),
  };
  // console.log('Got Employee', employeeInfo);

  // Push employeeInfo into array of employees
  employees.push(employeeInfo);
  // console.log('employees', employees);

  // render employees to DOM
  employeeData(employees);
  // calculate total salary
  totalSalary += Number(salary);
  // total salary message
  $('#totalSalary').text(totalSalaryMessage + Math.round(totalSalary));
  // change total salary background
  if (totalSalary > 20000) {
    $('h3').css('background', 'Red');
  }

  //clear input
  $('#firstNameInput').val('');
  $('#lastNameInput').val('');
  $('#idNumber').val('');
  $('#jobTitle').val('');
  $('#salaryInput').val('');
}

// delete employee information and salary, remove from total
function onDeleteEmployee() {
  // console.log('Delete employee');
  let currentRow = $(this).closest('tr');
  let removedSalary = currentRow.find('td:eq(4)').text();
  // console.log('removed salary is:', removedSalary);
  totalSalary = totalSalary - removedSalary;
  $('#totalSalary').text(totalSalaryMessage + Math.round(totalSalary));
  $(this).closest('tr').remove();

  if (totalSalary <= 20000) {
    $('h3').css('background', 'Black');
  }
}

// gather employee information and put into table
function employeeData(employeeTable) {
  $('#employeeTable').empty();
  for (let employee of employeeTable) {
    $('#employeeTable').append(`
      <tr>
        <td>${employee.firstName}</td>
        <td>${employee.lastName}</td>
        <td>${employee.id}</td>
        <td>${employee.job}</td>
        <td>${employee.salary}</td>
        <td><button class="deleteEmployee">Delete</button></td>
      </tr>
    `);
  }
}
