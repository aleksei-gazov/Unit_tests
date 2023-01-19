import { createGretingMessage, ManType } from "./05";


let people: Array<ManType>= [
    {name: "Andrey Ivanov", age: 7},
    {name: "Vavan Rog", age: 74},
    {name: "Lysia Pipa", age: 67}
]

beforeEach( ()=> {
    people = [
        {name: "Andrey Ivanov", age: 7},
        {name: "Vavan Rog", age: 74},
        {name: "Lysia Pipa", age: 67}
    ]
})

test('should be array of greting message', ()=> {

    const messages = createGretingMessage(people)

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe('Hello Andrey. Welcom to Mogilev')
    expect(messages[1]).toBe('Hello Vavan. Welcom to Mogilev')
    expect(messages[2]).toBe('Hello Lysia. Welcom to Mogilev')


})