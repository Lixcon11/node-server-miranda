"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const { Room } = require("../services/Room");
router.get("/rooms", (res) => {
    const rooms = Room.fetchRooms();
    return res.json({ rooms });
});
router.post("/rooms", (req, res) => {
    const input = req.body;
    //Create room
    return res.json({ room: {} });
});
router.get("/room/:id", (req, res) => {
    const id = req.params.id;
    const room = Room.getRoom(id);
    return res.json({ room });
});
router.patch("/room/:id", (req, res) => {
    const id = req.params.id;
    const room = Room.getRoom(id);
    //Update room
    return res.json({ room });
});
router.patch("/room/:id", (req, res) => {
    const id = req.params.id;
    const room = Room.getRoom(id);
    //Delete room
    return res.json({ success: true });
});
module.exports = router;
