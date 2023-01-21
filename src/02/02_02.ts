export type StreetType = {
    title: string
}


export type AdddresType = {
    number: number
    street: StreetType
}


export type HouseType = {
    id?: number
    buildedAt: number
    repaired: boolean
    address: AdddresType
}



export type CityType = {
    title: string
    houses: Array<HouseType>
    govermentBuilding: GovermentBuildingType[]

    citizensNumber: number
}

export type  GovermentBuildingType = {
    type: string
    budget: number
    staffCouter: number
    address: AddressType
}

type AddressType = {
    street: StreetADDType
}
export type  StreetADDType = {
   title: string
}
