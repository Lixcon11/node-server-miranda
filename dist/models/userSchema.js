"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    _id: { type: Number, required: true },
    name: { type: String, required: true },
    photo: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    date: { type: String, required: true },
    job: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, required: true },
    password: { type: String, required: true }
}, {
    versionKey: false
});
const User = (0, mongoose_1.model)('User', userSchema);
exports.User = User;
