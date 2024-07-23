import express, { Request, Response, Router } from "express";
import { Data } from "../services/DataService";
import { IdState } from "../types/DataState";
import bcrypt from 'bcrypt';

const singularize = (plural: string): string => {
    return plural.endsWith('s') ? plural.slice(0, -1) : plural;
};

const dataController = <T extends IdState>(service: Data<T>, name: string): Router => {
    const router = express.Router();
    const singularName = singularize(name);

    router.get("/", async (_req: Request, res: Response) => {
        const items = await service.fetchAll();
        return res.json({ [name]: items });
    });

    router.post("/", async (req: Request, res: Response) => {
        const input = req.body;
        if(input.password) {
            input.password = await bcrypt.hash(input.password, 10);
        }
        const newItem = await service.create(input);
        return res.json({ [singularName]: newItem });
    });

    router.get("/:id", async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        const item = await service.getById(id);
        return res.json({ [singularName]: item });
    });

    router.patch("/:id", async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        const input = { ...req.body, _id: id };
        const updatedItem = await service.update(input);
        return res.json({ [singularName]: updatedItem });
    });

    router.delete("/:id", async (req: Request, res: Response) => {
        const id = parseInt(req.params.id); 
        await service.delete(id);
        return res.json({ success: true });
    });

    return router;
};

export default dataController;