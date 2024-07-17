import express, { Request, Response } from "express"
import { Room } from "../services/Room";
const router = express.Router()

router.get("/", (_req: Request,res: Response) => {
    const rooms = Room.fetchRooms()
    return res.json({ rooms })
})

router.post("/", (_req: Request, res: Response) => {
    //const input = req.body;
    //Create room
    return res.json({room: {}})
})

router.get("/:id", (req: Request, res: Response) => {
    const id =parseInt(req.params.id);
    const room = Room.getRoom(id);
    return res.json({room})
})

router.patch("/:id", (req: Request, res: Response) => {
    const id =parseInt(req.params.id);
    const room = Room.getRoom(id);
    //Update room
    return res.json({room})
})

router.patch("/:id", (_req: Request, res: Response) => {
    //const id =parseInt(req.params.id);
    //const room = Room.getRoom(id);
    //Delete room
    return res.json({success: true})
})

export default router;