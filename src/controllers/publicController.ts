import express, { Request, Response } from "express";

const router = express.Router();

router.get('/', (_req: Request, res: Response) => {
    const hotelName = "Hotel Miranda"; // Replace with your actual hotel name
    const endpoints = [
        { path: "/rooms", method: "GET", description: "List all rooms" },
        { path: "/rooms", method: "POST", description: "Create a new room" },
        { path: "/room/:id", method: "GET", description: "Get a room by ID" },
        { path: "/room/:id", method: "PATCH", description: "Update a room by ID" },
        { path: "/room/:id", method: "DELETE", description: "Delete a room by ID" },
        { path: "/login", method: "POST", description: "Login to get a token" }
    ];

    res.json({
        hotelName,
        endpoints
    });
});

export default router;