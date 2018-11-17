var express = require('express');
var graphqlHTTP = require('express-graphql');
var {
    buildSchema
} = require('graphql');

var resolve = {
        hello: () => {
            return 'Hello world!';
        },
        getDie: function(args) {
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
        }
    }
    // Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
    rollDice(numDice: Int!, numSides: Int): [Int]
    getDie(numSides: Int): RandomDie
}

type RandomDie {
  numSides: Int!
  rollOnce: Int!
  roll(numRolls: Int!): [Int]
}`);


var app = express();

app.use('/', graphqlHTTP({
    schema: schema,
    rootValue: resolve,
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

/*// Run the GraphQL query '{ hello }' and print out the response
graphql(schema, '{ hello }', root).then((response) => {
  console.log(response);
});
*/