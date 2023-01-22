import {createGretingMessage} from '../05/05';
import {ManDestType} from './07-destr-ass';




let props: ManDestType
beforeEach(()=> {
    props = {
        name: 'Alex',
        age: 34,
        lessons: [{title: '1'}, {title: '2'}],
        address: {
            street: {
                title: 'Sale'
            }
        }
    }
})

test('a', ()=> {


        // const age = props.age
        // const lessons = props.lessons
    const {age, lessons} = props
    const title = props.address.street.title



    expect(age).toBe(34)
    expect(lessons).toBe(2)
    expect(title).toBe('Sale')


})

test('b', ()=> {


   // const l1 = props.lessons[0]
   // const l2 = props.lessons[1]
    const [l1, l2] = props.lessons


    expect(l1.title).toBe(1)
    expect(l2.title).toBe(2)



})