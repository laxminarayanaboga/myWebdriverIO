// promiseExample.js

describe('Async call simulation', () => {
    it('DB call simulation and resolving by promise', async () => {
        let success = true;
        function getUsers() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (success) {
                        resolve([
                            { username: 'john', email: 'john@test.com' },
                            { username: 'jane', email: 'jane@test.com' },
                        ]);
                    } else {
                        reject('Failed to get the user list');
                    }
                }, 1000);
            });
        }

        let allUsers;
        getUsers()
            .then((users) => { allUsers = users })
            .catch((error) => { console.log(error) })
            .finally(() => { console.log('Executed finally block') });

        expect(allUsers.length).toEqual(2);



    })
})