"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Room = void 0;
const roomsData_json_1 = __importDefault(require("../data/roomsData.json"));
let typedRoomsData = roomsData_json_1.default;
class Room {
    static fetchRooms() {
        return typedRoomsData;
    }
    static getRoom(id) {
        const room = typedRoomsData.find(r => r.id === id);
        if (!room) {
            throw new Error(`Room with id ${id} not found`);
        }
        return room;
    }
    static createRoom(room) {
        typedRoomsData.push(room);
    }
    static updateRoom(room) {
        const idList = typedRoomsData.map(obj => obj.id).sort((a, b) => a - b);
        let newId = 1;
        for (let id of idList) {
            if (id === newId) {
                newId++;
            }
            else {
                break;
            }
        }
        const newRoom = {
            id: newId,
            roomNumber: room.roomNumber || "default room number",
            description: room.description || "default description",
            photos: room.photos || [],
            roomType: room.roomType || "Single Bed",
            amenities: room.amenities || [],
            price: room.price || 0,
            discount: room.discount || 0,
            status: room.status || "Available"
        };
        typedRoomsData.push(newRoom);
    }
    static deleteRoom(id) {
        const newData = typedRoomsData.filter(r => r.id !== id);
        if (!newData) {
            throw new Error(`Room with id ${id} not found`);
        }
        typedRoomsData = newData;
    }
}
exports.Room = Room;
