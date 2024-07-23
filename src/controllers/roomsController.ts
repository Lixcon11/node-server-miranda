/*
import { createController } from "../utils/createController"
import { RoomState } from "../types/DataState";
import roomsData from "../data/roomsData.json"

const roomsController = () => createController<RoomState>("rooms", roomsData as RoomState[])

export { roomsController }*/

import { createController } from "../utils/createController"
import { Room } from "../models/roomSchema"

const roomsController = () => createController("rooms", Room);

export { roomsController }