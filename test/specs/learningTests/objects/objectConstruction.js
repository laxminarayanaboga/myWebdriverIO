
const greeting = 'Hello, World!';

function Person(firstName, lastName) {
    if (!new.target) {
        return new Person(firstName, lastName);
    }
    this.firstName = firstName;
    this.lastName = lastName;
}

describe('Object usage example', () => {
    it('Object usage example', () => {
        let p1 = new Person('Harry', 'Potter');
        let p2 = new Person('James', 'Bond');
        expect(p1.firstName).toEqual('Harry');

        expect(p2.firstName).toEqual('James');

    })
})