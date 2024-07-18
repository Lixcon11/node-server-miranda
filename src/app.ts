import "dotenv/config";
import express, {Request, Response, NextFunction} from "express"
import roomsController from "./controllers/roomsController";
import loginController from "./controllers/loginController";
import { authenticateToken } from "./middleware/auth";
import publicController from "./controllers/publicController";

const app = express()

app.use(express.json())

app.use("/login", loginController);

app.use("/info", publicController)

app.use(authenticateToken);

app.use("/rooms", roomsController)

//app.use("/bookings", bookingsController)

//app.use("/users", usersController)

//app.use("/contacts", contactsController)


app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
    console.error(err);
    return res.status(500).json({error: true, message: "Application error"})
})


export { app }