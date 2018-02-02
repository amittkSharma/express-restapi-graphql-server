"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
// GraphQL schema
exports.schema = graphql_1.buildSchema(`
    type Query {
        message: String
    }
`);
// Root resolver
exports.resolvers = {
    message: () => 'Hello World!!!!'
};
//# sourceMappingURL=schema.js.map