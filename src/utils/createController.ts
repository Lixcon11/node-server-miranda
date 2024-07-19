import { app } from "../app"
import dataController from "./dataController";
import { Data } from "../services/DataService";
import { IdState } from "../types/DataState";

const createController = <T extends IdState>(name: string, data: T[]) => {
    const service = new Data<T>(data);
    app.use(`/${name}`, dataController(service, name));
}

export { createController }