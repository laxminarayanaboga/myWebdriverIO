// objectAndFactoryFunction.js

// To create a generic person object, you can go with constructor Prototype aproach. 
// Or you can go with Facotry Function approach. 
// Facotry Function approach can be done in 2 ways

describe('Factory Function approach', () => {
    it('Factory Function approach - ineffecient way', () => {
        function createPerson(firstName, lastName) {
            return {
                firstName: firstName,
                lastName: lastName,
                getFullName() {
                    return firstName + ' ' + lastName;
                }
            }
        }

        let person1 = createPerson('John', 'Doe');
        let person2 = createPerson('Jane', 'Doe');

        expect(person1.getFullName()).toEqual('John Doe');
        expect(person2.getFullName()).toEqual('Jane Doe');
    });

    // in the above example, each person has it own fullname function copy. To avoid this, go with below approach.  
    it('Factory Function approach - effecient way', () => {
        var personActions = {
            getFullName() {
                return this.firstName + ' ' + this.lastName;
            }
        }

        function createPerson(firstName, lastName) {
            let person = Object.create(personActions);
            person.firstName = firstName;
            person.lastName = lastName;
            return person;
        }

        let person1 = createPerson('John', 'Doe');
        let person2 = createPerson('Jane', 'Doe');

        expect(person1.getFullName()).toEqual('John Doe');
        expect(person2.getFullName()).toEqual('Jane Doe');
    })
})

