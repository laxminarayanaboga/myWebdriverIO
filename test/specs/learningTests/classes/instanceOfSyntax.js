// instanceOfSyntax.js

class Person {
    constructor(name) {
        this.name = name;
    }
}

class Employee extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
}

describe('instanceof syntax', () => {
    it('instanceof syntax', () => {
        let harryPotter = new Employee('Harry Potter', 12345);

        expect(harryPotter instanceof Employee).toEqual(true);
        expect(harryPotter instanceof Person).toEqual(true);
        expect(harryPotter instanceof Object).toEqual(true);
    })
})