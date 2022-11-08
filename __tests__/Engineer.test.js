const Engineer = require('../lib/Engineer')

describe('Engineer', () => {
    describe('getGithub', () => {
        it('should give you the github of the engineer', () => {
            const github = 'Frank';
            const result = new Engineer('Frank', 1, 'email').getGithub(github);
            expect(result).toEqual(Engineer.github)
        });
    });
})