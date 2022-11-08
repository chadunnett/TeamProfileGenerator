const Employee = require('../lib/Employee')
const employee = new Employee('Frank', 1, 'email')

describe('Employee', () => {
    describe('getName', () => {
        it('should give you the name of the employee', () => {
            const name = 'Frank';
            const result = new Employee('Frank', 1, 'email').getName(name);
            expect(result).toEqual(name)
        });
    });
    describe('getId', () => {
        it('should give you the id of the employee', () => {
            const id = '1';
            const result = employee.getId(id);
            expect(result).toEqual('1')
        });
    });
    describe('getEmail', () => {
        it('should give you the email of the employee', () => {
            const email = 'email';
            const result = employee.getEmail(email);
            expect(result).toEqual('email')
        });
    });
})