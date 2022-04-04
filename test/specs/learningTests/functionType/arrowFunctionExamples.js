// arrowFunctionExamples.js

describe('arrow function examples', () => {
    it('simple addition', () => {
        let add = function (x, y) {
            return x + y;
        }
        let arrowAdd = (x, y) => x + y;

        expect(add(10, 20)).toEqual(30);
        expect(arrowAdd(10, 20)).toEqual(30);
    });

    it('Numbers sort', () => {
        let numbers = [4, 2, 6];
        numbers.sort(function (a, b) {
            return b - a;
        })
        expect(numbers).toEqual([6, 4, 2]);

        // achive the say with neat code

        let numbers2 = [4, 2, 6];
        numbers2.sort((a, b) => b - a);
        expect(numbers2).toEqual([6, 4, 2]);
    });

    it('convert array of string to array of string lengths', () => {

        let names = ['Harry', 'Albus Percival Wulfric Brian Dumbledore', 'mcgonagall'];
        let lenths = names.map(function (name) {
            return name.length
        });
        expect(lenths).toEqual([5, 39, 10]);

        // achive the say with a neat and classy code

        let names2 = ['Harry', 'Albus Percival Wulfric Brian Dumbledore', 'mcgonagall'];
        let lenths2 = names2.map(name => name.length);
        expect(lenths2).toEqual([5, 39, 10]);


    });

    // it('simple addition', () => { });

    // it('simple addition', () => { });

    // it('simple addition', () => { });
})