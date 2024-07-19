import express, { Request, Response, Router } from "express";
import { Data } from "../services/DataService";
import { IdState } from "../types/DataState";

const singularize = (plural: string): string => {
    return plural.endsWith('s') ? plural.slice(0, -1) : plural;
};

const dataController = <T extends IdState>(service: Data<T>, name: string): Router => {
    const router = express.Router();
    const singularName = singularize(name);

    router.get("/", (_req: Request, res: Response) => {
        const items = service.fetchAll();
        return res.json({ [name]: items });
    });

    router.post("/", (req: Request, res: Response) => {
        const input = req.body;
        const newItem = service.create(input);
        return res.json({ [singularName]: newItem });
    });

    router.get("/:id", (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        const item = service.getById(id);
        return res.json({ [singularName]: item });
    });

    router.patch("/:id", (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        const input = { ...req.body, id };
        const updatedItem = service.update(input);
        return res.json({ [singularName]: updatedItem });
    });

    router.delete("/:id", (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        service.delete(id);
        return res.json({ success: true });
    });

    return router;
};

export default dataController;