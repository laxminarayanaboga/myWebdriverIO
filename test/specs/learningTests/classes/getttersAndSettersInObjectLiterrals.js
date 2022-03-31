//getttersAndSettersInObjectLiterrals.js

let meeting = {
    attendees: [],
    add(attendee) {
        console.log('adding attendee: ' + attendee);
        this.attendees.push(attendee);
        return this;
    },

    get latest() {
        let count = this.attendees.length;
        return count == 0 ? undefined : this.attendees[count - 1];
    }
};

describe('getters and setters in object literal', () => {
    it('getters and setters in object literal', () => {
        meeting.add('Harry').add('Lilly').add('James');
        expect(meeting.latest).toEqual('James')
    })
})