import RandomDie from '../../src/class/RandomDie'

describe('Constructor Testing', () => {
    test('irregal arg of constructor', () => {
        expect(() => {
            new RandomDie()
        }).toThrow('RandomDie require number arg as numSide for constructor')
        expect(() => {
            new RandomDie('aaa')
        }).toThrow('RandomDie require number arg as numSide for constructor')
        expect(() => {
            new RandomDie({})
        }).toThrow('RandomDie require number arg as numSide for constructor')
    })
})

describe('rollOnce() Testing', () => {
    test('Regulr', () => {
        const die = new RandomDie(100)
        expect(typeof die.rollOnce()).toBe('number')
        const output = die.rollOnce()
        expect(output).toBeGreaterThanOrEqual(1)
        expect(output).toBeLessThanOrEqual(100)
    })
})

describe('roll() Testing', () => {
    const die = new RandomDie(100)
    test('Regulr', () => {
        expect(typeof die.roll({
            numRolls: 2
        })).toBe('object') // Array
    })
})