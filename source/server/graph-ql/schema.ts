import { buildSchema } from 'graphql'

// GraphQL schema
export const schema = buildSchema(`
    type Query {
        message: String
    }
`);

// Root resolver
export const resolvers = {
    message: () => 'Hello World!!!!'
};
