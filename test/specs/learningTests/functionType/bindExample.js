// bindExample.js

var greeting = 'hi';
var messager = {
    greeting: 'Hello'
}

describe('Basic usage - call', () => {


    it('power of BIND with vehicle example', () => {
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
            },
            flyAtSpeed(speed){
                return `Flying ${this.name} at ${speed} mph`
            }
        }

        let flyingCar = aircraft.fly.bind(car);
        expect(flyingCar()).toEqual('Fly the car');

        let flyingCarAtSpecificSpeed = aircraft.flyAtSpeed.bind(car, 20);
        expect(flyingCarAtSpecificSpeed(20)).toEqual('Flying car at 20 mph');
    })



})