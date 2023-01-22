

// export const usersArray = ['Aleks', 'Ben', 'Grek', 'Vik']


export const usersObj = {
    '0': 'Aleks',
    '1': 'Ben',
    '2': 'Grek',
    '3': 'Vik',
}


type UsersType = {
    [key: string]: {id: number, name: string}
}


 const users: UsersType = {
    '101': {id: 101, name: 'Aleks'},
    '654': {id: 654, name: 'Ben'},
    '897651': {id: 897651, name: 'Grek'},
    '22': {id: 22, name: 'Vik'},
}

// users[1]
let user = {id: 5487, name: 'Red'}
users[user.id] = user



export const usersArray = [
    {id: 101, name: 'Aleks'},
    {id: 654, name: 'Ben'},
    {id: 897651, name: 'Grek'},
    {id: 22, name: 'Vik'},
]
let newUsers = [...usersArray,user]