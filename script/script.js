console.log('script.js');

$(document).ready(onReady);

let employee = [];
function onReady() {
  console.log('Ready Now');

  // Add employee click
  $(document).on('click', '#inputEmployee', onAddEmployee);
}

function onAddEmployee(event) {
  event.preventDefault();
  console.log('Add Employee');

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
  console.log('Got Employee', employeeInfo);
}
