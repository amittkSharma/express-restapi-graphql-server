"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bunyan = require("bunyan");
const level = (process.env.BUNYAN_LOG_LEVEL || 'info');
exports.log = bunyan.createLogger({
    name: 'server',
    level,
});
// disable logging in unit tests
if (process.env.NODE_ENV === 'test') {
    exports.log.level('fatal');
}
if (!('NODE_ENV' in process.env)) {
    exports.log.level('debug');
}
//# sourceMappingURL=logger.js.map