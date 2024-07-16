import express, { Request, Response } from "express"
const router = express.Router()
const { Room } = require("../services/Room")

router.get("/rooms", (res: Response) => {
    const rooms = Room.fetchRooms()
    return res.json({ rooms })
})

router.post("/rooms", (req: Request, res: Response) => {
    const input = req.body;
    //Create room
    return res.json({room: {}})
})

router.get("/room/:id", (req: Request, res: Response) => {
    const id =req.params.id;
    const room = Room.getRoom(id);
    return res.json({room})
})

router.patch("/room/:id", (req: Request, res: Response) => {
    const id =req.params.id;
    const room = Room.getRoom(id);
    //Update room
    return res.json({room})
})

router.patch("/room/:id", (req: Request, res: Response) => {
    const id =req.params.id;
    const room = Room.getRoom(id);
    //Delete room
    return res.json({success: true})
})

module.exports = router;