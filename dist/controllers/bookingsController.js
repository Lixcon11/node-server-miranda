"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingsController = void 0;
const createController_1 = require("../utils/createController");
const bookingSchema_1 = require("../models/bookingSchema");
const bookingsController = () => (0, createController_1.createController)("bookings", bookingSchema_1.Booking);
exports.bookingsController = bookingsController;
