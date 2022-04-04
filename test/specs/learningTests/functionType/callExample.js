// callExample.js

var greeting = 'hi';
var messager = {
    greeting: 'Hello'
}

describe('Basic usage - call', () => {
    it('Basic usage - call', () => {
        function add(x, y) {
            return x + y;
        }

        let result = add(10, 20);
        expect(result).toEqual(30);

        let resultAsCall = add.call(this, 10, 20);
        expect(resultAsCall).toEqual(30);
    })

    it('var scope usage - call', () => {
        function say(name) {
            return `${this.greeting} ${name}`
        }

        // let resultAsCall = say.call(this, 'Harry');
        // expect(resultAsCall).toEqual('hi Harry');

        let resultAsCallWithVariableScope = say.call(messager, 'Harry');
        expect(resultAsCallWithVariableScope).toEqual('Hello Harry');
    })

    it('power of CALL with car as example', () => {
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

        expect(vehicle.start.call(car)).toEqual('Start the car');
        expect(vehicle.stop.call(car)).toEqual('Stop the car');
        expect(vehicle.speedUp.call(car)).toEqual('SpeedUp the car');
        expect(car.drive.call(car)).toEqual('Drive the car');

        expect(vehicle.start.call(aircraft)).toEqual('Start the aircraft');
        expect(vehicle.stop.call(aircraft)).toEqual('Stop the aircraft');
        expect(vehicle.speedUp.call(aircraft)).toEqual('SpeedUp the aircraft');
        expect(aircraft.fly.call(aircraft)).toEqual('Fly the aircraft');
    })

    it('power of CALL with Array filter as example', () => {
        function isOdd(number) {
            return number % 2;
        }
        function getOddNumbers() {
            return Array.prototype.filter.call(arguments, isOdd);
        }
        let result = getOddNumbers(2, 33, 55, 44);
        expect(result).toEqual([33, 55]);

    })

})