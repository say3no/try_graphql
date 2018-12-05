import RandomDie from './class/RandomDie'
import Message from './class/Message'

var fakeDatabase = {}
var resolver = {
    hello: () => {
        return 'Hello world!'
    },
    getDie: (args) => {
        return new RandomDie(args.numSides || 6)
    },
    rollDice: ({
        numDice,
        numSides
    }) => {
        var output = []
        for (var i = 0; i < numDice; i++) {
            output.push(1 + Math.floor(Math.random() * (numSides || 6)))
        }
        return output
    },

    createMessage: ({
        input
    }) => {
        var id = '123456'

        fakeDatabase[id] = input
        return new Message(id, input)
    },
    getMessage: ({
        id
    }) => {
        if (!fakeDatabase[id]) {
            throw new Error('no message exists with id ' + id)
        }
        return new Message(id, fakeDatabase[id])
    },
    updateMessage: ({
        id,
        input
    }) => {
        if (!fakeDatabase[id]) {
            throw new Error('no message exists with id ' + id)
        }
        fakeDatabase[id] = input
        return new Message(id, input)
    },

}

export default resolver