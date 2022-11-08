const Intern = require('../lib/Intern')
const Employee = require('../lib/Employee')

describe('Intern', () => {
    describe('getSchool', () => {
        it('should give you the school of the intern', () => {
            const school = 'school';
            const result = new Intern('Frank',1,'Frank').getSchool(school);
            expect(result).toEqual(Intern.school)
        });
    });
})