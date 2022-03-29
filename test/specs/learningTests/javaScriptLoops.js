
function forLoopExampleSum(number) {
    let sum = 0;
    for (let i = 0; i <= number; i++) {
        sum += i;
    }
    return sum;
}

function whileLoopExampleSum(number) {
    let sum = 0, i = 0;
    while (i <= number) {
        sum += i;
        i++;
    }
    return sum;
}

function doWhilLoopExampleSum(number) {
    let sum = 0, i = 0;
    do {
        sum += i;
        i++;
    } while (i <= number);
    return sum;
}

function recursiveExampleSum(number) {
    if (number <= 0) {
        return 0;
    } else if (number == 1) {
        return 1;
    } else {
        return number + recursiveExampleSum(number - 1);
    }
}

describe('JavaScript Loops test', () => {
    it('for Loop test', () => {
        expect(forLoopExampleSum(4)).toEqual(10);
    });
    it('while Loop test', () => {
        expect(whileLoopExampleSum(4)).toEqual(10);
    });
    it('do while Loop test', () => {
        expect(doWhilLoopExampleSum(4)).toEqual(10);
    });
    it('recursive function example test', () => {
        expect(recursiveExampleSum(4)).toEqual(10);
    });
})