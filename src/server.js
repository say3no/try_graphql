var express = require('express');
var graphqlHTTP = require('express-graphql');
var {
    buildSchema
} = require('graphql');

var hoge = require('./schema.js').schema;
console.log(hoge);

var schema = buildSchema(`
  input MessageInput {
    content: String
    author: String
  }

  type Message {
    id: ID!
    content: String
    author: String
  }

  type Query {
    getMessage(id: ID!): Message
    hello: String
    rollDice(numDice: Int!, numSides: Int): [Int]
    getDie(numSides: Int): RandomDie
  }

  type Mutation {
    createMessage(input: MessageInput): Message
    updateMessage(id: ID!, input: MessageInput): Message
  }

  type RandomDie {
    numSides: Int!
    rollOnce: Int!
    roll(numRolls: Int!): [Int]
  }`);

class Message {
    constructor(id, {
        content,
        author
    }) {
        this.id = id;
        this.content = content;
        this.author = author;
    }
}

var fakeDatabase = {};

var root = {
    getMessage: ({
        id
    }) => {
        if (!fakeDatabase[id]) {
            throw new Error('no message exists with id ' + id);
        }
        return new Message(id, fakeDatabase[id]);
    },
    createMessage: ({
        input
    }) => {
        var id = '123456';

        fakeDatabase[id] = input;
        return new Message(id, input);
    },
    updateMessage: ({
        id,
        input
    }) => {
        if (!fakeDatabase[id]) {
            throw new Error('no message exists with id ' + id);
        }
        fakeDatabase[id] = input;
        return new Message(id, input);
    },
    hello: () => {
        return 'Hello world!';
    },
    getDie: (args) => {
        return new RandomDie(args.numSides || 6);
    },
    rollDice: ({
        numDice,
        numSides
    }) => {
        var output = [];
        for (var i = 0; i < numDice; i++) {
            output.push(1 + Math.floor(Math.random() * (numSides || 6)));
        }
        return output;
    },
};

var app = express();
app.use('/', graphqlHTTP({
    schema: schema,
    rootValue: root,
    grapghiql: true,
}));

app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000');

class RandomDie {
    constructor(numSide) {
        this.numSide = numSide;
    }

    rollOnce() {
        return 1 + Math.floor(Math.random() * this.numSide);
    }

    roll({
        numRolls
    }) {
        var output = [];
        for (var i = 0; i < numRolls; i++) {
            output.push(this.rollOnce());
        }
        return output;
    }
}