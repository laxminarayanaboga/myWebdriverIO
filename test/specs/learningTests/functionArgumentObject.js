
function genericAdd() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

describe('function arguments object usage example', () => {
    it('function arguments object usage example', () => {
        expect(genericAdd(1, 2)).toEqual(3);
        expect(genericAdd(11, 22, 33)).toEqual(66);
        expect(genericAdd()).toEqual(0);
    })
})