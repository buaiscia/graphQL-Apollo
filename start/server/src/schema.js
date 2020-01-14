const { gql } = require('apollo-server'); //graphql is included in apollo

// declare the schema in graphql -->  practice schema-first development and agree on a schema before you begin implementing your API.
const typeDfs = gql`
            # types are objects -> most of the definitions in a GraphQL schema are object types. Each field has a type of its own
            # A field's type can be either an object type or a scalar type. A scalar type is a primitive (like ID, String, Boolean, or Int) that resolves to a single value
            # An exclamation point (!) after a declared field's type means "this field's value can never be null."

    type Launch { 
        id: ID!
        site: String
        mission: Mission
        rocket: Rocket
        isBooked: Boolean!
    }

    type Rocket {
        id: ID!
        name: String
        type: String
    }

    type User {
        id: ID!
        email: String!
        trips: [Launch]!
    }
            # If a declared field's type is in [Square Brackets], it's an array of the specified type. If an array has an exclamation point after it, the array cannot be null, but it can be empty.

    type Mission {
        name: String
        missionPatch(size: Patchsize): String
    }

    enum Patchsize {
        SMALL
        LARGE
    }
`;

module.exports = typeDfs; 