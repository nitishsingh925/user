const { buildSchema } = require("graphql");

module.exports = buildSchema(`
  type User {
    id: ID!
    name: String!
    email: String!
    age: Int!
  }

  input UserInput {
    name: String!
    email: String!
    age: Int!
  }

  type Query {
    getUsers: [User!]!
    getUser(id: ID!): User
  }

  type Mutation {
    createUser(userInput: UserInput): User
    updateUser(id: ID!, userInput: UserInput): User
    deleteUser(id: ID!): User
  }
`);
