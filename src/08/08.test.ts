

type UsersType = {
    [key: string]: {id: number, name: string}
}

let users: UsersType

beforeEach(()=> {
    users = {
        '101': {id: 101, name: 'Aleks'},
        '654': {id: 654, name: 'Ben'},
        '897651': {id: 897651, name: 'Grek'},
        '22': {id: 22, name: 'Vik'},
    }
})

test('should select corresponding user from obj', ()=> {

    users['22'].name = 'Nadia'
    expect(users['22'].name).toBe('Nadia')
    expect(users['22']).toEqual({id: 22, name: 'Nadia'})

})

test('should delete corresponding user', ()=> {

  delete users['654']

    expect(users['654']).toBe(undefined)

})