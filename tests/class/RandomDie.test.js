import RandomDie from '../../src/class/RandomDie'

describe('Constructor Testing', () => {
    test('No arg constructor', () => {
        const no_con = new RandomDie()
        expect(no_con.numSide).toBeUndefined()
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