
const greeting = 'How are you?'
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
Person.prototype.getFullName = function () {
    return this.firstName + ' ' + this.lastName;
}

Person.prototype.greet = function () {
    return `Hi, I am ${this.getFullName()}. ${greeting}`
}

describe('consuctor and prototype pattern example', () => {
    it('consuctor and prototype pattern example', () => {
        let p1 = new Person('Harry', 'Potter');
        let p2 = new Person('James', 'Bond');
        expect(p1.firstName).toEqual('Harry');
        expect(p1.lastName).toEqual('Potter');
        expect(p1.getFullName()).toEqual('Harry Potter');
        expect(p1.greet()).toEqual('Hi, I am Harry Potter. How are you?')

        expect(p2.firstName).toEqual('James');
        expect(p2.lastName).toEqual('Bond');
        expect(p2.getFullName()).toEqual('James Bond');
        expect(p2.greet()).toEqual('Hi, I am James Bond. How are you?')
    })
})