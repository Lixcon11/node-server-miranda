import "dotenv/config";
import express, { NextFunction, Request, Response } from "express"
const roomsController = require("./controllers/roomsController")

const app = express()
const port = 3000

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