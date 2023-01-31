const Employee = require("../lib/Employee.js")

test("creating employee object", () => {
  // setup 
  const employee = new Employee('Ron Swanson', '1', 'RonSwanny@yahoo.com', 'Employee')

  expect(employee.name).toEqual(expect.any(String));

  expect(employee.id).toEqual(expect.any(String))

  expect(employee.email).toEqual(expect.any(String));
});

// need a few more tests

test("if getName() returns the name", () => {
    const employee = new Employee('Ron Swanson', '1', 'RonSwanny@yahoo.com', 'Employee')

    expect(employee.getName()).toEqual(expect.any(String))
})

test("if getId() returns the ID", () => {
    const employee = new Employee('Ron Swanson', '1', 'RonSwanny@yahoo.com', 'Employee')

    expect(employee.getId()).toEqual(expect.any(String))
} )

test("if getEmail() returns the email", () => {
    const employee = new Employee('Ron Swanson', '1', 'RonSwanny@yahoo.com', 'Employee')

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
} )

test("if getRole() returns the role", () => {
    const employee = new Employee('Ron Swanson', '1', 'RonSwanny@yahoo.com', 'Employee')

    expect(employee.getRole()).toEqual("Employee");
})

