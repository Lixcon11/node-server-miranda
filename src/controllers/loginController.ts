import express, { Request, Response } from "express";
import jwt from 'jsonwebtoken';

const router = express.Router();

const users = [
    { id: 1, email: "hi@mark.com", password: "youaretearingapartlisa" }
];

router.post('/', (req: Request, res: Response) => {
    const { email, password } = req.body;
    const user = users.find(user => user.email === email);

    if (!user || user.password !== password) {
        return res.status(400).json({ error: "Data invalid" });
    }

    const token = jwt.sign({ userId: user.id, email: user.email }, process.env.TOKEN_SECRET as string);
    return res.json({ token });
});

export default router;