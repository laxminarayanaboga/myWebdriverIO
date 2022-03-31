// classPrivateVariableAndFunctions.js

class Person {
    #firstName;
    #lastName;
    constructor(firstName, lastName) {
        this.#firstName = firstName;
        this.#lastName = lastName;
    }
    getFullName(format = true) {
        return format ? this.#firstLast() : this.#lastFirst();
    }

    #firstLast() {
        return `${this.#firstName} ${this.#lastName}`;
    }
    #lastFirst() {
        return `${this.#lastName}, ${this.#firstName}`;
    }
}

describe('class private variables and functions syntax', () => {
    it('class private variables and functions syntax', () => {
        let harryPotter = new Person('Harry', 'Potter');

        expect(harryPotter.getFullName()).toEqual('Harry Potter');
        expect(harryPotter.getFullName(false)).toEqual('Potter, Harry');
    })
})
