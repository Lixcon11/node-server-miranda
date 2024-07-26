"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
const mongoose_1 = require("mongoose");
const contactSchema = new mongoose_1.Schema({
    _id: { type: Number, required: true },
    name: { type: String, required: true },
    date: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    subject: { type: String, required: true },
    comment: { type: String, required: true },
    status: { type: String, required: true }
}, {
    versionKey: false
});
const Contact = (0, mongoose_1.model)('Contact', contactSchema);
exports.Contact = Contact;
