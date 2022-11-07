const Employee = require('../lib/Employee')

xdescribe('Employee', () => {
    describe('getName', () => {
        it('should give you the name of the employee', () => {
            const name = 'Frank';
            const result = new Employee('Frank,1,Frank').getName(name);
            expect(result).toMatch(Employee.name)
        });
    });
    describe('getId', () => {
        it('should give you the id of the employee', () => {
            const id = 'ID';
            const result = new Employee('Frank,1,Frank').getId(id);
            expect(result).toMatch(Employee.id)
        });
    });
    describe('getEmail', () => {
        it('should give you the email of the employee', () => {
            const email = 'Frank@gmail.com';
            const result = new Employee('Frank,1,Frank@gmail.com').getEmail(email);
            expect(result).toMatch(Employee.email)
        });
    });
})