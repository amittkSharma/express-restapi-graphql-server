"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const graphqlHttp = require("express-graphql");
const compression = require("compression");
const cors = require("cors");
const path = require("path");
const api_1 = require("./api/api");
const schema_1 = require("./graph-ql/schema");
exports.app = express();
exports.app.disable('etag').disable('x-powered-by'); // Improves performance
exports.app.set('json replacer', (key, value) => value instanceof Set ? Array.from(value) : value);
if (process.env['NODE_ENV'] !== 'production') {
    exports.app.set('json spaces', 2);
}
exports.app.use(cors());
exports.app.use(compression());
exports.app.use('/graphql', graphqlHttp({
    schema: schema_1.schema,
    rootValue: schema_1.resolvers,
    graphiql: true
}));
exports.app.use('/api', api_1.api);
exports.app.use(express.static(path.join(__dirname, 'public')));
// app.all('/*', (req, res) => res.sendFile(__dirname + '/public/index.html'))
//# sourceMappingURL=app.js.map