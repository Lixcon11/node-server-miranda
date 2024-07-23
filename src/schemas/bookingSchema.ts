import { Schema, model } from 'mongoose';
import { BookingState } from '../types/DataState';

const contactSchema = new Schema<BookingState>({
    _id: { type: Number, required: true },
    name: { type: String, required: true },
    orderDate: { type: String, required: true },
    checkInDate: { type: String, required: true },
    checkOutDate: { type: String, required: true },
    specialRequest: { type: String, required: true },
    room: { type: Object, required: true },
    status: { type: String, required: true },
},
{
    versionKey: false
})

const Booking = model('Booking', contactSchema);

export { Booking }