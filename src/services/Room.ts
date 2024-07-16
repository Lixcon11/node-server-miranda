import { RoomState } from "../types/RoomsState";
import roomsData from "../data/roomsData.json"

let typedRoomsData: RoomState[] = roomsData as RoomState[];

class Room {
    static fetchRooms(): RoomState[] {
        return typedRoomsData;
    }

    static getRoom(id: number): RoomState {
        const room = typedRoomsData.find(r => r.id === id);
        if (!room) {
            throw new Error(`Room with id ${id} not found`);
        }
        return room;
    }

    static createRoom(room: RoomState) {
        typedRoomsData.push(room)
    }

    static updateRoom(room: Partial<RoomState>) {
        const idList = typedRoomsData.map(obj => obj.id).sort((a, b) => a - b);
        let newId: number = 1;
        for (let id of idList) {
            if(id === newId) {
                newId++;
            } 
            else {
                break;
            }
        }

        const newRoom: RoomState = {
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

        typedRoomsData.push(newRoom)
    }

    static deleteRoom(id: number) {
        const newData = typedRoomsData.filter(r => r.id !== id);

        if (!newData) {
            throw new Error(`Room with id ${id} not found`);
        }
        typedRoomsData = newData
    }

}

export { Room }