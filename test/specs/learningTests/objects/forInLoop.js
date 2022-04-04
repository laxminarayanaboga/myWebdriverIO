
describe('for in loop examples', () => {
    it('for in loop in objects', () => {
        var person = {
            firstName: 'John',
            lastName: 'Doe',
            ssn: '299-24-2351'
        };

        for (var prop in person) {
            console.log(prop + ':' + person[prop]);
        }
    });

    it('for in loop in objects inheritance', () => {
        var decoration = {
            color: 'red'
        };

        var circle = Object.create(decoration);
        circle.radius = 10;

        for (const prop in circle) {
            console.log(prop);
        }
    });

    it('for in loop in objects inheritance & its own properties', () => {
        var decoration = {
            color: 'red'
        };

        var circle = Object.create(decoration);
        circle.radius = 10;

        for (const prop in circle) {
            if (circle.hasOwnProperty(prop)) {
                console.log(prop);
            }
        }
    });

    it('for in loop in arrays', () => {
        let items = [10, 20, 30];
        let total = 0;

        for (let item in items) {
            total = total + items[item];
        }
        expect(total).toEqual(60);
    });

    it('for each loop in arrays', () => {
        let items = [10, 20, 30];
        let total = 0;

        for (let item of items) {
            total = total + item;
        }
        expect(total).toEqual(60);
    });
})