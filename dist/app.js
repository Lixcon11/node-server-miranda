"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const roomsController = require("./controllers/roomsController");
const app = (0, express_1.default)();
exports.app = app;
app.use("/rooms", roomsController);
