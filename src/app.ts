import "dotenv/config";
import express, {Request, Response, NextFunction} from "express"
import loginController from "./controllers/loginController";
import { authenticateToken } from "./middleware/auth";
import publicController from "./controllers/publicController";
import { roomsController } from "./controllers/roomsController";
import { bookingsController } from "./controllers/bookingsController";
import { usersController } from "./controllers/usersController";
import { contactsController } from "./controllers/contactsController";

const app = express()

app.use(express.json())

app.use("/login", loginController);
app.use("/info", publicController)

app.use(authenticateToken);

roomsController();
bookingsController();
usersController();
contactsController()

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
    console.error(err);
    return res.status(500).json({error: true, message: "Application error"})
})

export { app }