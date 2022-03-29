
describe('JavaScript Arithmetic Operators on Objects', () => {
    it('ValueOf -> Arithmetic Operators on Objects', () => {
        let energy = {
            valueOf() {
                return 100;
            },
            toString() {
                return 50;
            }
        }
        expect(energy + 10).toEqual(110);

        expect(energy - 10).toEqual(90);

        expect(energy * 10).toEqual(1000);

        expect(energy / 10).toEqual(10);
    });

    it('toString -> Arithmetic Operators on Objects', () => {
        let energy = {

            toString() {
                return 50;
            }
        }
        expect(energy + 10).toEqual(60);

        expect(energy - 10).toEqual(40);

        expect(energy * 10).toEqual(500);

        expect(energy / 10).toEqual(5);
    })


})