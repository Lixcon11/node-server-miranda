import { IdState } from "./IdState";

type Amenitie = 
    | "AC" 
    | "Breakfast" 
    | "Cleaning" 
    | "Grocery" 
    | "Shop Near"
    | "Wifi"
    | "Kitchen"
    | "Shower"
    | "Single Bed"
    | "Towels";

type RoomType = 
    | "Single Bed"
    | "Double Bed"
    | "Double Superior"
    | "Suite";


type RoomState = IdState & {
    roomNumber: string;
    description: string;
    photos: string[];
    roomType: RoomType;
    amenities: Amenitie[];
    price: number;
    discount: number;
    status: "Available" | "Booked";
}
/*
type BookingState = IdObject & {
    name: string;
    orderDate: string;
    checkInDate: string;
    checkOutDate: string;
    specialRequest: string;
    room: RoomState;
    status: "Check In" | "Check Out" | "In Progress";
}

type ContactState = IdObject & {
    name: string;
    date: string;
    email: string;
    phone: string;
    subject: string;
    comment: string;
    status: "Published" | "Archived"
}

type UserState = IdObject & {
    name: string;
    photo: string;
    email: string;
    phone: string;
    date: string;
    job: string;
    description: string;
    status: "Active" | "Inactive";
    password: string;
}*/


export { RoomState }