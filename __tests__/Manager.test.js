const Manager = require('../lib/Manager')

describe('Manager', () => {
    describe('getName', () => {
        it('should give you the name of the employee', () => {
            const officeNumber = '1';
            const result = new Manager().getOffice(officeNumber);
            expect(result).toEqual(Manager.officeNumber)
        });
    });
})