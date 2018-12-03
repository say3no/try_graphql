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
    test('regal arg of constructor', () => {
        expect(() => {
            new RandomDie(34)
        }).not.toThrow('RandomDie require number arg as numSide for constructor')
    })
})

describe('rollOnce() Testing', () => {
    let die
    beforeEach(() => {
        die = new RandomDie(100)
    })
    test('Regular', () => {
        expect(typeof die.rollOnce()).toBe('number')
        const output = die.rollOnce()
        expect(output).toBeGreaterThanOrEqual(1)
        expect(output).toBeLessThanOrEqual(100)
    })
})

describe('roll() Testing', () => {
    let die
    beforeEach(() => {
        die = new RandomDie(100)
    })
    test('Irregular', () => {
        expect(() => {
            die.roll({
                numRolls: 'a'
            })
        }).toThrow('RandomDie.numRolls() require number { numRolls: number }') // Array
    })
    test('Regular', () => {
        expect(typeof die.roll({
            numRolls: 2
        })).toBe('object') // Array
        const output = die.roll({
            numRolls: 10
        })
        expect(output.length).toBe(10)
        output.forEach(ele => {
            expect(typeof ele).toBe('number')
        })
    })
})