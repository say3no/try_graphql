import {
    test,
    except
} from 'jest'

test('first test of schema.test.js', () => {
    except(true).toBe(true)
})