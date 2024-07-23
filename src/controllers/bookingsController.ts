import { createController } from "../utils/createController"
import { Booking } from "../schemas/bookingSchema";

const bookingsController = () => createController("bookings", Booking)

export { bookingsController }