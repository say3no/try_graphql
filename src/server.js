var express = require('express')
var graphqlHTTP = require('express-graphql')
import schema from './schema'
import resolver from './resolver'

var app = express()
app.use('/', graphqlHTTP({
    schema: schema,
    rootValue: resolver,
    grapghiql: true,
}))

app.listen(4000)
console.log('Running a GraphQL API server at localhost:4000')