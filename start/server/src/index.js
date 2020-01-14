const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema'); // create the object with the schema

const server = new ApolloServer({ typeDefs }); // pass the schema into the server