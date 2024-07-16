import "dotenv/config";
import express from "express"
import roomsController from "./controllers/roomsController";

const app = express()

app.use("/rooms", roomsController)

//app.use("/bookings", bookingsController)

//app.use("/users", usersController)

//app.use("/contacts", contactsController)

/*
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
    console.error(err);
    return res.status(500).json({error: true, message: "Application error"})
})*/


export { app }