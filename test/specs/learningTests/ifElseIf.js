
function ifElseIfExample(month) {
    let monthName;
    if (month == 1) {
        monthName = 'Jan';
    } else if (month == 2) {
        monthName = 'Feb';
    } else if (month == 3) {
        monthName = 'Mar';
    } else if (month == 4) {
        monthName = 'Apr';
    } else if (month == 5) {
        monthName = 'May';
    } else if (month == 6) {
        monthName = 'Jun';
    } else if (month == 7) {
        monthName = 'Jul';
    } else if (month == 8) {
        monthName = 'Aug';
    } else if (month == 9) {
        monthName = 'Sep';
    } else if (month == 10) {
        monthName = 'Oct';
    } else if (month == 11) {
        monthName = 'Nov';
    } else if (month == 12) {
        monthName = 'Dec';
    } else {
        monthName = 'Invalid month';
    }
    console.log(monthName);
    return monthName;
}

describe('If Else If example', () => {
    it('If Else If Example test', () => {
        expect(ifElseIfExample(1)).toEqual('Jan')
        expect(ifElseIfExample(2)).toEqual('Feb')
        expect(ifElseIfExample(3)).toEqual('Mar')
        expect(ifElseIfExample(4)).toEqual('Apr')
        expect(ifElseIfExample(5)).toEqual('May')
        expect(ifElseIfExample(6)).toEqual('Jun')
        expect(ifElseIfExample(7)).toEqual('Jul')
        expect(ifElseIfExample(8)).toEqual('Aug')
        expect(ifElseIfExample(9)).toEqual('Sep')
        expect(ifElseIfExample(10)).toEqual('Oct')
        expect(ifElseIfExample(11)).toEqual('Nov')
        expect(ifElseIfExample(12)).toEqual('Dec')
        expect(ifElseIfExample()).toEqual('Invalid month')
        expect(ifElseIfExample(55)).toEqual('Invalid month')
    })
})