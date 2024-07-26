"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const loginController_1 = __importDefault(require("./controllers/loginController"));
const auth_1 = require("./middleware/auth");
const publicController_1 = __importDefault(require("./controllers/publicController"));
const roomsController_1 = require("./controllers/roomsController");
const bookingsController_1 = require("./controllers/bookingsController");
const usersController_1 = require("./controllers/usersController");
const contactsController_1 = require("./controllers/contactsController");
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
exports.app = app;
app.use(express_1.default.json());
if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI environment variable is not defined');
}
mongoose_1.default.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));
app.use("/login", loginController_1.default);
app.use("/info", publicController_1.default);
app.use(auth_1.authenticateToken);
(0, roomsController_1.roomsController)();
(0, bookingsController_1.bookingsController)();
(0, usersController_1.usersController)();
(0, contactsController_1.contactsController)();
app.use((err, _req, res, _next) => {
    console.error(err);
    return res.status(500).json({ error: true, message: "Application error" });
});
