
function square(x) {
    return x * x;
}

function increaseAge(person) {
    person.age += 1;
}

describe('Pass By Value example', () => {
    it('Premitive example', () => {
        let y = 3;
        let result = square(y);

        expect(result).toEqual(9);

        expect(y).toEqual(3);
    })

    it('Object example', () => {
        let person = {
            name: 'ABCD',
            age: 25
        };

        expect(person.age).toEqual(25);
        increaseAge(person);
        expect(person.age).toEqual(26);

    })
})