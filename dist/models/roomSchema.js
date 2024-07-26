"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Room = void 0;
const mongoose_1 = require("mongoose");
const roomSchema = new mongoose_1.Schema({
    _id: { type: Number, required: true },
    roomNumber: { type: String, required: true },
    description: { type: String, required: true },
    photos: { type: [String], required: true },
    roomType: { type: String, required: true },
    amenities: { type: [String], required: true },
    price: { type: Number, required: true },
    discount: { type: Number, required: true },
    status: { type: String, required: true }
}, {
    versionKey: false
});
const Room = (0, mongoose_1.model)('Room', roomSchema);
exports.Room = Room;
