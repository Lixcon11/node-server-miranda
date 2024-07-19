import { createController } from "../utils/createController"
import { BookingState } from "../types/DataState";
import bookingsData from "../data/bookingsData.json"

const bookingsController = () => createController<BookingState>("bookings", bookingsData as BookingState[])

export { bookingsController }