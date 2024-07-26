"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createController = void 0;
const app_1 = require("../app");
const dataController_1 = __importDefault(require("./dataController"));
const DataService_1 = require("../services/DataService");
const createController = (name, model) => {
    const service = new DataService_1.Data(model);
    app_1.app.use(`/${name}`, (0, dataController_1.default)(service, name));
};
exports.createController = createController;
