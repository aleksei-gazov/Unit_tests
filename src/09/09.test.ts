
function  increaseAge(user: UserType) {
    user.age++
}
type UserType = {
    name: string
    age: number
    addres: {
        title: string
    }
}

test('referes type test', ()=> {
    let user: UserType = {
        name: 'Aleks',
        age: 34,
        addres: {
            title: 'Mogilev'
        }
    }

    increaseAge(user)

    expect(user.age).toBe(35)

    const superMan = user

    superMan.age = 1000

    expect(user.age).toBe(1000)

})



test('array test', ()=> {
    let users = [
        {
        name: 'Aleks',
        age: 34,

    },
        {
        name: 'Aleks',
        age: 34
    },
]

    let admins = users
   admins.push({name: "Bed", age: 25})

    expect(users[2]).toEqual({name: "Bed", age: 25})

})


test('value type test', ()=> {
    let usersCount = 100

    let adminsCount= usersCount
    adminsCount = 101

    expect(users[2]).toEqual({name: "Bed", age: 25})

})

test('referes type test 2', ()=> {
    let user: UserType = {
        name: 'Aleks',
        age: 34,
        addres: {
            title: 'Mogilev'
        }
    }
// let addr = user.addres

    let user2: UserType = {
        name: 'Lili',
        age: 31,
        addres: user.addres
    }
user2.addres.title = 'kanary'
    expect(user.addres).toBe(user2.addres)
    expect(user.addres.title).toBe('kanary')

})

