const Engineer = require("../lib/Engineer")

test("creates engineer object", () => {
    const engineer = new Engineer('Burt Macklin', '2', 'BurtMacklin@fbi.com', 'engineer', 'GitUser123')
    expect(engineer.github) .toEqual(expect.any(String));
})

test("getGithub() should return \"GitUser123\"", () => {
    const engineer = new Engineer ('Burt Macklin', '2', 'BurtMacklin@fbi.com', 'engineer', 'GitUser123')
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
})

test("getRole() should return 'Engineer'", () => {
    const engineer = new Engineer('Burt Macklin', '2', 'BurtMacklin@fbi.com', 'engineer', 'GitUser123')

    expect(engineer.getRole()).toBe('Engineer');
})