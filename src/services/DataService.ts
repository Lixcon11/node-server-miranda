import { Model } from 'mongoose';
import { DataState } from "../types/DataState";

class Data<T extends DataState> {
    private model: Model<T>;

    constructor(model: Model<T>) {
        this.model = model;
    }

    async fetchAll(): Promise<T[]> {
        return this.model.find().exec();
    }

    async getById(id: string): Promise<T | null> {
        return this.model.findById(id).exec();
    }
    async create(item: T): Promise<T> {
        const newItem = new this.model(item);
        const savedItem = await newItem.save();
        return savedItem.toObject() as T;
    }

    async update(item: Partial<T> & { _id: string }): Promise<T | null> {
        return this.model.findByIdAndUpdate(item._id, item, { new: true }).exec();
    }

    async delete(id: string): Promise<void> {
        await this.model.findByIdAndDelete(id).exec();
    }
}

export { Data }