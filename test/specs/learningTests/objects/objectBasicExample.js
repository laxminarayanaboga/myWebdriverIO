
const greeting = 'Hello, World!';
describe('Object usage example', () => {
    it('Object usage example', () => {
        let person = {
            firstName: 'Harry',
            lastName: 'Potter',
            greet: function () {
                return greeting;
            },
            getFullName: function () {
                return this.firstName + ' ' + this.lastName;
            }
        };
        expect(person.getFullName()).toEqual('Harry Potter');
        expect(person.greet()).toEqual(greeting);

    })
})