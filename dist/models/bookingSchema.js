"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Booking = void 0;
const mongoose_1 = require("mongoose");
const contactSchema = new mongoose_1.Schema({
    _id: { type: Number, required: true },
    name: { type: String, required: true },
    orderDate: { type: String, required: true },
    checkInDate: { type: String, required: true },
    checkOutDate: { type: String, required: true },
    specialRequest: { type: String, required: true },
    room: { type: Object, required: true },
    status: { type: String, required: true },
}, {
    versionKey: false
});
const Booking = (0, mongoose_1.model)('Booking', contactSchema);
exports.Booking = Booking;
