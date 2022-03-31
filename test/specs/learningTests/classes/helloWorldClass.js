
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.constructor.numberOfPersonsCreated++;
    }
    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }

    static createAnonymous(gender) {
        let anonymousFirstName = gender == 'male' ? 'James' : 'Lilly';
        let anonymousLastName = 'Potter';
        return new Person(anonymousFirstName, anonymousLastName);
    }

    static numberOfPersonsCreated = 0;
}

describe('Basic class syntax', () => {
    it('basic class syntax', () => {
        let harryPotter = new Person('Harry', 'Potter');
        let jamesBond = new Person('James', 'Bond');
        let randomPerson = Person.createAnonymous('male');

        expect(harryPotter.getFullName()).toEqual('Harry Potter');
        expect(jamesBond.getFullName()).toEqual('James Bond');
        expect(randomPerson.getFullName()).toEqual('James Potter');

        expect(Person.numberOfPersonsCreated).toEqual(3);

        expect(harryPotter instanceof Person).toEqual(true);
        expect(harryPotter instanceof Object).toEqual(true);
    })
})