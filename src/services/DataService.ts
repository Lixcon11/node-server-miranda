import { Model, Document } from 'mongoose';
import { IdState } from "../types/DataState";

class Data<T extends IdState & Document> {
    private model: Model<T>;

    constructor(model: Model<T>) {
        this.model = model;
    }

    async fetchAll(): Promise<T[]> {
        return this.model.find().exec();
    }

    async getById(id: number): Promise<T | null> {
        return this.model.findById(id).exec();
    }

    async create(item: Omit<T, '_id'>): Promise<T> {
        const newId = await this.generateNewId();
        const newItem = new this.model({ ...item, _id: newId });
        return newItem.save();
    }

    async update(item: Partial<T> & { _id: number }): Promise<T | null> {
        return this.model.findByIdAndUpdate(item._id, item, { new: true }).exec();
    }

    async delete(id: number): Promise<void> {
        await this.model.findByIdAndDelete(id).exec();
    }

    private async generateNewId(): Promise<number> {
        const usedIds = await this.model.find({}, '_id').exec();
        const usedIdSet = new Set(usedIds.map(doc => doc._id));
    
        let newId = 1;
        while (usedIdSet.has(newId)) {
            newId++;
        }
        return newId;
    }
}

export { Data }