import Message from '../../src/class/Message'

describe('Constructer', () => {
    test('Irregal Test', () => {
        expect(() => {
            new Message()
        }).toThrow()
    })
    test('Regal Test', () => {
        expect(() => {
            new Message(1)
        }).not.toThrow()
    })
})