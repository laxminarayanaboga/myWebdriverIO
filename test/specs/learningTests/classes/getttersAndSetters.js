// getttersAndSetters.js

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }

    set firstName(newFirstName) {
        newFirstName = this.myTrim(newFirstName);
        this._firstName = newFirstName;
    }

    set lastName(newLastName) {
        newLastName = this.myTrim(newLastName);
        this._lastName = newLastName;
    }

    myTrim(givenString) {
        givenString = givenString.trim();
        if (givenString === '') {
            throw 'Name cannot be empty';
        }
        return givenString;
    }
}


describe('class getter and setter syntax', () => {
    it('class getter and setter syntax', () => {
        let harryPotter = new Person('Harry', 'Potter');
        let jamesBond = new Person('James  ', 'Bond');

        expect(harryPotter.getFullName()).toEqual('Harry Potter');
        expect(harryPotter.firstName).toEqual('Harry');
        expect(harryPotter.lastName).toEqual('Potter');

        expect(jamesBond.getFullName()).toEqual('James Bond');
        expect(jamesBond.firstName).toEqual('James');
        expect(jamesBond.lastName).toEqual('Bond');
    })
})