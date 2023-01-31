const Intern = require("../lib/Intern")

test("check to see if intern is object", () => {
    const intern = new Intern("Peter Griffin", "5", "PeterHatesChicken@famguy.com", "Intern", "Boston College")

    expect(intern.school).toEqual(expect.any(String));
})

test("getSchool() should return Peter's college", () => {
    const intern = new Intern("Peter Griffin", "5", "PeterHatesChicken@famguy.com", "Intern", "Boston College")

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test("getRole() should return role of Intern", () => {
    const intern = new Intern("Peter Griffin", "5", "PeterHatesChicken@famguy.com", "Intern", "Boston College")

    expect(intern.getRole()).toEqual("Intern")
})