
function operate(operation, a, b) {
    return operation(a, b)
}
function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function div(a, b) {
    return a / b;
}
function mul(a, b) {
    return a * b;
}

describe('JavaScript Functions are First-Class Citizens', () => {
    it('JavaScript Functions are First-Class Citizens', () => {
        expect(operate(add, 10, 5)).toEqual(15);
        expect(operate(sub, 10, 5)).toEqual(5);
        expect(operate(div, 10, 5)).toEqual(2);
        expect(operate(mul, 10, 5)).toEqual(50);
    })
})