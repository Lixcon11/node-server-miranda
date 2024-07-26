"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Data = void 0;
class Data {
    constructor(model) {
        this.model = model;
    }
    fetchAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.find().exec();
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.findById(id).exec();
        });
    }
    create(item) {
        return __awaiter(this, void 0, void 0, function* () {
            const newId = yield this.generateNewId();
            const newItem = new this.model(Object.assign(Object.assign({}, item), { _id: newId }));
            return newItem.save();
        });
    }
    update(item) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.findByIdAndUpdate(item._id, item, { new: true }).exec();
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.model.findByIdAndDelete(id).exec();
        });
    }
    generateNewId() {
        return __awaiter(this, void 0, void 0, function* () {
            const usedIds = yield this.model.find({}, '_id').exec();
            const usedIdSet = new Set(usedIds.map(doc => doc._id));
            let newId = 1;
            while (usedIdSet.has(newId)) {
                newId++;
            }
            return newId;
        });
    }
}
exports.Data = Data;
