const Engineer = require('../lib/Engineer')

xdescribe('Engineer', () => {
    describe('getGithub', () => {
        it('should give you the github of the engineer', () => {
            const github = 'Frank';
            const result = new Engineer().getGithub(github);
            expect(result).toEqual(Engineer.github)
        });
    });
})