"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const readJson = require("read-package-json");
exports.api = express.Router();
exports.api.get('/version', getVersion);
function getVersion(req, res) {
    readJson('./package.json', console.error, false, (er, data) => {
        if (er) {
            console.error(`There was an error reading the file ${er}`);
        }
        res.json({ version: data.version, node: process.version });
    });
}
//# sourceMappingURL=api.js.map