const Manager = require("../lib/Manager")

test("check to see if office number is correct", () => {
    const manager = new Manager('Leah Nelson', '2', 'LeahGOAT@yahoo.com', 'Manager', '444-4444')

   expect(manager.officeNumber).toEqual(expect.any(String));
});

test("check to make sure role is manager", () => {
    const manager = new Manager('Leah Nelson', '2', 'LeahGOAT@yahoo.com', 'Manager', '444-4444')

    expect(manager.getRole()).toEqual("Manager");
})