const ages = [18,20,22,1,100,90,14]

const predicate = (age: number)=> {
    return age > 90;
}

const oldAges = [100] //>90

type CoureType = {
    title: string
    price: number
}

const courses =[
    {title: "CSS", price: 110},
    {title: "JS", price: 200},
    {title: "React", price: 150}
]
// <160
const chipPredicate = (curse: CoureType) => {
    return curse.price < 160
}


const chipCourses = [
    {title: "CSS", price: 110},
    {title: "React", price: 150}
]
