"use strict";
/*
import { createController } from "../utils/createController"
import { RoomState } from "../types/DataState";
import roomsData from "../data/roomsData.json"

const roomsController = () => createController<RoomState>("rooms", roomsData as RoomState[])

export { roomsController }*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.roomsController = void 0;
const createController_1 = require("../utils/createController");
const roomSchema_1 = require("../models/roomSchema");
const roomsController = () => (0, createController_1.createController)("rooms", roomSchema_1.Room);
exports.roomsController = roomsController;
