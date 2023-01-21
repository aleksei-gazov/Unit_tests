import {
    addMoneyToBudget,
    repairHouse,
    toFireStaff,
    toHireStaff
} from '../03/03';
import {CityType} from '../02/02_02';


let city: CityType;

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                id: 1,
                buildedAt: 2012, repaired: false, address: {
                    number: 100,
                    street: {
                        title: 'While street'
                    }
                }
            },
            {
                id: 2,
                buildedAt: 2008, repaired: false, address: {
                    number: 100,
                    street: {
                        title: 'Happy street'
                    }
                }
            },
            {
                id: 3,
                buildedAt: 2009, repaired: false, address: {
                    number: 100,
                    street: {
                        title: 'Happy street'
                    }
                }
            },
        ],
        govermentBuilding: [
            {
                type: 'HOSOITAL',
                budget: 200000,
                staffCouter: 200,
                address: {
                    street: {
                        title: 'Central Str'
                    }
                }
            },
            {
                type: 'FIRE-STATION', budget: 500000, staffCouter: 1000,
                address: {
                    street: {
                        title: 'South Str'
                    }
                }
            },

        ],
        citizensNumber: 100000
    }
})


test('Budget should be changed for HOSPITAL', () => {

    addMoneyToBudget(city.govermentBuilding[0], 100000)
    expect(city.govermentBuilding[0].budget).toBe(300000);
    expect(city.govermentBuilding[1].budget).toBe(500000);
})
test('Budget should be changed for FIRE-STATION', () => {
    addMoneyToBudget(city.govermentBuilding[1], -100000);
    expect(city.govermentBuilding[1].budget).toBe(400000);
})


test('House should be repared', () => {
    repairHouse(city.houses[1]);
    expect(city.houses[1].repaired).toBeTruthy();
})

test('staf should be increased', () => {
    toFireStaff(city.govermentBuilding[0], 20)

    expect(city.govermentBuilding[0].staffCouter).toBe(180)
})
test('House should be increased', () => {
    toHireStaff(city.govermentBuilding[0], 20)

    expect(city.govermentBuilding[0].staffCouter).toBe(220)
})