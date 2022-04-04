// applyExample.js

var greeting = 'hi';
var messager = {
    greeting: 'Hello'
}

describe('Basic usage - apply', () => {
    it('Basic usage - apply', () => {
        function add(x, y) {
            return x + y;
        }

        let result = add(10, 20);
        expect(result).toEqual(30);

        let resultAsapply = add.apply(this, [10, 20]);
        expect(resultAsapply).toEqual(30);
    })

    it('var scope usage - apply', () => {
        function say(name) {
            return `${this.greeting} ${name}`
        }

        // let resultAsapply = say.apply(this, 'Harry');
        // expect(resultAsapply).toEqual('hi Harry');

        let resultAsapplyWithVariableScope = say.apply(messager, ['Harry']);
        expect(resultAsapplyWithVariableScope).toEqual('Hello Harry');
    })

    it('power of apply with car as example', () => {
        const vehicle = {
            name: 'vehicle',
            start() {
                return `Start the ${this.name}`
            },
            stop() {
                return `Stop the ${this.name}`
            },
            speedUp() {
                return `SpeedUp the ${this.name}`
            }
        }

        const car = {
            name: 'car',
            drive() {
                return `Drive the ${this.name}`
            }
        }

        const aircraft = {
            name: 'aircraft',
            fly() {
                return `Fly the ${this.name}`
            }
        }

        expect(vehicle.start.apply(car)).toEqual('Start the car');
        expect(vehicle.stop.apply(car)).toEqual('Stop the car');
        expect(vehicle.speedUp.apply(car)).toEqual('SpeedUp the car');
        expect(car.drive.apply(car)).toEqual('Drive the car');

        expect(vehicle.start.apply(aircraft)).toEqual('Start the aircraft');
        expect(vehicle.stop.apply(aircraft)).toEqual('Stop the aircraft');
        expect(vehicle.speedUp.apply(aircraft)).toEqual('SpeedUp the aircraft');
        expect(aircraft.fly.apply(aircraft)).toEqual('Fly the aircraft');
    })

    it('power of apply with Array filter as example', () => {
        function isOdd(number) {
            return number % 2;
        }
        function getOddNumbers() {
            return Array.prototype.filter.apply(arguments, [isOdd]);
        }
        let result = getOddNumbers(2, 33, 55, 44);
        expect(result).toEqual([33, 55]);

    })

})