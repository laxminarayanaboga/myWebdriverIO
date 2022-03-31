// classInheritance.js

class Car {
    constructor(enginePower) {
        this.enginePower = enginePower;
    }
    accelerate(timeInSeconds) {
        let speed = this.enginePower * timeInSeconds;
        return speed;
    }
}

class Honda extends Car {
    constructor(enginePower) {
        super(enginePower);
        this.brand = 'Honda';
    }
}

class Toyota extends Car {
    constructor(enginePower, modelName) {
        super(enginePower);
        this.modelName = modelName;
        this.brand = 'Toyota';
    }
}

describe('class inheritance', () => {
    it('class inheritance', () => {
        let hondaCar = new Honda(20);
        let toyotaCar = new Toyota(20, 'Yaris');

        expect(hondaCar.brand).toEqual('Honda');
        expect(hondaCar.modelName).toEqual(undefined);
        expect(hondaCar.accelerate(2)).toEqual(40);

        expect(toyotaCar.brand).toEqual('Toyota');
        expect(toyotaCar.modelName).toEqual('Yaris');
        expect(toyotaCar.accelerate(2)).toEqual(40);
    })
})