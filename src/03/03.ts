
type  LocalCityType = {
    title: string
    coutriTitle: string
}
type  TechnologiesType = {
    id: number
    title: string
}
type AddressType = {
    stritTitle: string
    city: LocalCityType
}
type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: TechnologiesType[]  //Array<TechnologiesType>

}

const student = {
    id: 1,
    "name": "Aleks",
    age: 34,
    isActive: true,
    address: {
        stritTitle: "Kar 22",
        city: {
            title: "Mogilev",
            coutriTitle: "Belarus"
        }
    },
    technologies: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "CSS"
        },
        {
            id: 3,
            title: "React"
        },
    ]
}
console.log(student.technologies[2].title)
