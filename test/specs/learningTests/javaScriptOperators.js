

function add(a, b) {
    return a + b;
}

describe('JavaScript Arithmetic Operators - Addition', () => {
    it('Addition: Simple Numbers', async () => {
        let actualSum = add(10, 20);
        let expectedSum = 30;
        expect(actualSum).toEqual(expectedSum);
    });

    it('Addition: flowting numbers', async() => {
        let actualSum = add(9.99, 1.99);
        let expectedSum = 11.98;
        expect(actualSum).toEqual(expectedSum);
    });

    it('Addition: Strings', async() => {
        let actualSum = add('10', '20');
        let expectedSum = '1020';
        expect(actualSum).toEqual(expectedSum);
    })

});


describe('JavaScript Arithmetic Operators - Subtraction', () => {
    it('Subtraction operator', () => {
        let a=10, b=5;
        let expectedResult = 5;
        expect(a-b).toEqual(expectedResult);
    })
});

describe('JavaScript Arithmetic Operators - Multiplication', () => {
    it('Multiplication operator', () => {
        let a=10, b=5;
        let expectedResult = 50;
        expect(a*b).toEqual(expectedResult);
    })
});
describe('JavaScript Arithmetic Operators - Division', () => {
    it('Division operator', () => {
        let a=10, b=5;
        let expectedResult = 2;
        expect(a/b).toEqual(expectedResult);
    })
});