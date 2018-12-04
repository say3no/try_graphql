import Message from '../../src/class/Message'

describe('Constructer', () => {
    test('Irregal Test', () => {
        expect(() => {
            new Message()
        }).toThrow()
    })
    test('Regal Test', () => {
        expect(() => {
            new Message(1, {
                content: 'aa',
                author: 'sayn3o'
            })
        }).not.toThrow()
    })
})

describe('Attribute', () => {
    const id = 1
    const content = 'hoge'
    const author = 'say3no'
    const mes = new Message(id, {
        content: content,
        author: author
    })
    test('Regal Test', () => {
        expect(mes.id).toBe(id)
        expect(mes.content).toBe(content)
        expect(mes.author).toBe(author)
    })
})