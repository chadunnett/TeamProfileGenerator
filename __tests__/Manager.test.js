const Manager = require('../lib/Manager')

xdescribe('Manager', () => {
    describe('getName', () => {
        it('should give you the name of the employee', () => {
            const name = 'Frank';
            const result = new Manager().getName(name);
            expect(result).toEqual(Manager.name)
        });
    });
})