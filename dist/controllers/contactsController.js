"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactsController = void 0;
const createController_1 = require("../utils/createController");
const contactSchema_1 = require("../models/contactSchema");
const contactsController = () => (0, createController_1.createController)("contacts", contactSchema_1.Contact);
exports.contactsController = contactsController;
