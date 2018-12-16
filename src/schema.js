var {
    buildSchema
} = require('graphql')

// Mutationsはたぶん静的でない、くらいの意味合い？
var schema = buildSchema(`
  type Query {
    getMessage(id: ID!): Message
    hello: String
    rollDice(numDice: Int!, numSides: Int): [Int]
    getDie(numSides: Int): RandomDie
  }

  type Message {
    id: ID!
    content: String
    author: String
  }

  input MessageInput {
    content: String
    author: String
  }

  type Mutation {
    createMessage(input: MessageInput): Message
    updateMessage(id: ID!, input: MessageInput): Message
  }

  type RandomDie {
    numSides: Int!
    rollOnce: Int!
    roll(numRolls: Int!): [Int]
  }`)

export default schema