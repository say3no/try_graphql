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
    })
})