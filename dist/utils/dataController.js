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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const singularize = (plural) => {
    return plural.endsWith('s') ? plural.slice(0, -1) : plural;
};
const dataController = (service, name) => {
    const router = express_1.default.Router();
    const singularName = singularize(name);
    router.get("/", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const items = yield service.fetchAll();
        return res.json({ [name]: items });
    }));
    router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const input = req.body;
        if (input.password) {
            input.password = yield bcryptjs_1.default.hash(input.password, 10);
        }
        const newItem = yield service.create(input);
        return res.json({ [singularName]: newItem });
    }));
    router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const id = parseInt(req.params.id);
        const item = yield service.getById(id);
        return res.json({ [singularName]: item });
    }));
    router.patch("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const id = parseInt(req.params.id);
        const input = Object.assign(Object.assign({}, req.body), { _id: id });
        const updatedItem = yield service.update(input);
        return res.json({ [singularName]: updatedItem });
    }));
    router.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const id = parseInt(req.params.id);
        yield service.delete(id);
        return res.json({ success: true });
    }));
    return router;
};
exports.default = dataController;
