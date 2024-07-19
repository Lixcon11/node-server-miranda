import { IdState } from "../types/DataState";

class Data<T extends IdState> {
    private data: T[];

    constructor(initialData: T[]) {
        this.data = initialData;
    }

    fetchAll(): T[] {
        return this.data;
    }

    getById(id: number): T {
        const item = this.data.find(d => d.id === id);
        if (!item) {
            throw new Error(`Item with id ${id} not found`);
        }
        return item;
    }

    create(item: T): T {
        const newItem = { ...item, id: this.generateNewId() };
        this.data.push(newItem);
        return newItem;
    }

    update(item: Partial<T> & { id: number }): T {
        const index = this.data.findIndex(d => d.id === item.id);
        if (index === -1) {
            throw new Error(`Item with id ${item.id} not found`);
        }
        this.data[index] = { ...this.data[index], ...item };
        return this.data[index];
    }

    delete(id: number): void {
        const index = this.data.findIndex(d => d.id === id);
        if (index === -1) {
            throw new Error(`Item with id ${id} not found`);
        }
        this.data.splice(index, 1);
    }

    private generateNewId(): number {
        const idList = this.data.map(obj => obj.id).sort((a, b) => a - b);
        let newId: number = 1;
        for (let id of idList) {
            if (id === newId) {
                newId++;
            } else {
                break;
            }
        }
        return newId;
    }
}

export { Data }