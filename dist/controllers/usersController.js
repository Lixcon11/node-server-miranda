"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersController = void 0;
const createController_1 = require("../utils/createController");
const userSchema_1 = require("../models/userSchema");
const usersController = () => (0, createController_1.createController)("users", userSchema_1.User);
exports.usersController = usersController;
