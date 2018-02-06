"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const video_1 = require("../sampleData/video");
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
const videoType = new graphql_1.GraphQLObjectType({
    name: 'Video',
    description: 'Object for the video',
    fields: {
        id: {
            type: graphql_1.GraphQLID,
            description: 'Video Id',
        },
        name: {
            type: graphql_1.GraphQLString,
            description: 'Name of the video',
        },
        watched: {
            type: graphql_1.GraphQLInt,
            description: 'Number of time video is watched',
        },
    },
});
const messageType = new graphql_1.GraphQLObjectType({
    name: 'Message',
    description: '',
    fields: {
        id: {
            type: graphql_1.GraphQLID,
            description: 'Id of the message',
        },
        messageText: {
            type: graphql_1.GraphQLString,
            description: 'Message string',
        },
    },
});
const queryType = new graphql_1.GraphQLObjectType({
    name: 'QueryType',
    description: 'The root query type',
    fields: {
        videos: {
            type: new graphql_1.GraphQLList(videoType),
            resolve: () => {
                return video_1.videoSampleData.getVideos();
            },
        },
        videoById: {
            type: videoType,
            args: {
                id: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID),
                    description: 'Id of the video',
                },
            },
            resolve: (_, args) => {
                return video_1.videoSampleData.getVideoById(args.id);
            },
        },
        videoByName: {
            type: videoType,
            args: {
                name: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
                    description: 'Name of the video',
                },
            },
            resolve: (_, args) => {
                return video_1.videoSampleData.getVideoByName(args.name);
            },
        },
        message: {
            type: messageType,
            resolve: () => new Promise(resolve => {
                resolve({
                    id: 'Message 1',
                    messageText: 'hello message world',
                });
            }),
        },
    },
});
const mutationType = new graphql_1.GraphQLObjectType({
    name: 'MutationType',
    description: 'The root mutation type',
    fields: {
        createVideo: {
            type: videoType,
            description: 'Creating a new video',
            args: {
                id: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID),
                    description: 'Id of the video',
                },
                name: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
                    description: 'Name of the video',
                },
                watched: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt),
                    description: 'Whether video is watched or not',
                },
            },
            resolve: (_, args) => {
                return video_1.videoSampleData.createVideo(args);
            },
        },
    },
});
// defines the capability of graphql server, whether query, mutation or subscription is allowed.
exports.schema = new graphql_1.GraphQLSchema({
    query: queryType,
    mutation: mutationType,
});
//# sourceMappingURL=schema.js.map