"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const config_1 = require("./config");
const http = require("http");
const logger_1 = require("./utils/logger");
process.on('unhandledRejection', (reason, p) => {
    logger_1.log.error('Unhandled Rejection at: Promise ', p, ' reason: ', reason);
});
const server = http.createServer(app_1.app);
server.listen(config_1.config.serverPort, () => {
    logger_1.log.info('Starting server at port ' + config_1.config.serverPort);
});
//# sourceMappingURL=index.js.map