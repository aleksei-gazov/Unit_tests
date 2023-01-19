export type ManType = {
    name: string
    age: number
}



const people: Array<ManType>= [
    {name: "Andrey Ivanov", age: 7},
    {name: "Vavan Rog", age: 74},
    {name: "Lysia Pipa", age: 67}
]

const transformator = (man: ManType) => ({
    stack: ['css', 'html', 'js', 'tdd', 'react'],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1],
})


const devs = [
    {
        stack: ['css', 'html', 'js', 'tdd', 'react'],
        firstName: "Andrey" , lastName: 'Ivanov'
    },
    {
        stack: ['css', 'html', 'js', 'tdd', 'react'],
        firstName: "Vavan" , lastName: 'Rog'
    },
    {
        stack: ['css', 'html', 'js', 'tdd', 'react'],
        firstName: "Lysia" , lastName: 'Pipa'
    },
]

//  let d1 = transformator(people[0])
//  let d2 = transformator(people[1])
//  let d3 = transformator(people[3])

const devs2 = [
    transformator(people[0]),
    transformator(people[1]),
    transformator(people[2])
]

const devs3 = people.map(transformator)
const devs4 = people.map(man => ({
    stack: ['css', 'html', 'js', 'tdd', 'react'],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1],
}))


const messages = people.map(m => `Hello ${m.name.split(' ')[0]}. Welcom to Mogilev`)

export  const createGretingMessage = (people:  Array<ManType>) => {
    return people.map(m=> `Hello ${m.name.split(' ')[0]}. Welcom to Mogilev`)
}
