import React, {useState} from 'react';

export type ManDestType = {
    name: string
    age: number
    lessons: Array<{title:string}>
    address: {
        street: {
            title: string
        }
    }
}


type PropsType = {
    title: string
    man: ManDestType
    food: Array<string>
    car: {model: string}
}

function useAlState(m: string) {
    return [m, function(){}]
}
function useAlState2(m: string) {
    return {
        message:m,
        setMessage: function(){}
    }
}

export const ManComponent: React.FC<PropsType> = ({title, man: {name}, ...props})=> {
    // const {title, man: {name}} = props
    // const {name} = props.man

     const [message, setMessage] = useState<string>('hello')
    // const [message, setMessage] = useAlState('hello')

    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>{name}</div>
        <div>{props.car.model}</div>
    </div>
}