import { app } from "../app";
import dataController from "./dataController";
import { Model, Document } from "mongoose";
import { IdState } from "../types/DataState";
import { Data } from "../services/DataService";

const createController = <T extends IdState & Document>(name: string, model: Model<T>) => {
    const service = new Data<T>(model);
    app.use(`/${name}`, dataController(service, name));
};

export { createController };