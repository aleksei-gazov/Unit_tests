import {UserType} from './10_01';

function makeHairstyle (u: UserType, power: number) {
    const userCopy = {
        ...u,
        hair: u.hair / power
    }
    return userCopy

}

test('reference type test', ()=> {
    let user: UserType = {
        name: 'Alex',
        hair: 34,
        address: {
            title: 'Mogilev'
        }
    }
   const awesomeUser =  makeHairstyle(user, 2)

    expect(user.hair).toBe(34)
    expect(awesomeUser.hair).toBe(17)
})