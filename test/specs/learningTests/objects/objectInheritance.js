
var decoration = {
    color: 'red'
}

var circle = Object.create(decoration);
circle.radius = 10;

describe('Object Property Inheritance Example', () => {
    it('Object Property Inheritance Example', () => {
        for (const prop in circle) {
            console.log(prop + ': ' + circle[prop]);
        }
    })
})