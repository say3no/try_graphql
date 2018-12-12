import resolver from '../src/resolver'

test('first test of resolver.test.js', () => {
    expect(true).toBe(true)
})

test('hello()', () => {
    expect(resolver.hello()).toBe('Hello world!')
})

// RandomDieクラスを呼ぶ
describe('getDie()', () => {
    const args = {
        numSides: 100
    }
    test('Regular', () => {
        const die = resolver.getDie(args)
        expect(typeof die).toBe('object')
        expect(typeof die.numSide).toBe('number')
        expect(die.numSide).toBe(100)
    })

    test('Irregular', () => {
        expect(() => {
            resolver.getDie()
        }).toThrow()
    })
})

// DBのmockが必要になる??
describe('Message CRUD', () => {
    const content = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
    const author = 'say3no'
    const retCreateMessage = resolver.createMessage({
        input: {
            content: content,
            author: author
        }
    })

    test('Regular', () => {
        expect(typeof retCreateMessage).toBe('object') // Message class
        expect(retCreateMessage.id).toBe('123456')
        expect(retCreateMessage.content).toBe(content)
        expect(retCreateMessage.author).toBe(author)
    })
})


// Aftereachで、contentを作成する？