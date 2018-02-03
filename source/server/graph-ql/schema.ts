import { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLID } from 'graphql'

// // GraphQL schema
// export const schema = buildSchema(`
//     type Query {
//         message: String
//     }
// `);

// // Root resolver
// export const resolvers = {
//     message: () => 'Hello Jane'
// };

const messageType = new GraphQLObjectType({
    name: 'Message',
    description: '',
    fields: {
        id: {
            type: GraphQLID,
            description: 'Id of the message',
        },
        name: {
            type: GraphQLString,
            description: 'Message string',
        }
    }
})

const queryType = new GraphQLObjectType({
    name: 'QueryType',
    description: 'The root query type',
    fields: {
        video: {
            type: GraphQLString,
            resolve: () => new Promise((resolve) => {
                resolve({
                    id:'video 1',
                    name: 'hello video world'
                })
            })
        },
        message: {
            type: messageType,
            resolve: () => new Promise((resolve) => {
                resolve({
                    id:'Message 1',
                    name: 'hello message world'
                })
            })
        }
    }
})

// defines the capability of graphql server, whether query, mutation or subscription is allowed.
export const schema = new GraphQLSchema({
    query: queryType
})