
const no = 'You cannot Drive.';
const yes = 'You can Drive.';

function driverAgeValidator(age) {
    return age >= 16 ? yes : no;
}

describe('Tenary Operator Example', () => {
    it('Tenary Operator Example.', () => {
        expect(driverAgeValidator(12)).toEqual(no);
        expect(driverAgeValidator(16)).toEqual(yes);
        expect(driverAgeValidator(17)).toEqual(yes);
        expect(driverAgeValidator(99)).toEqual(yes);
        expect(driverAgeValidator('99')).toEqual(yes);
        expect(driverAgeValidator('12')).toEqual(no);
        expect(driverAgeValidator(0)).toEqual(no);
    })
})