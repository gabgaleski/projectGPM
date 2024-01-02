"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Routes_1 = __importDefault(require("./Routes"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
        this.app.get('/', (req, res) => res.json({ ok: true }));
    }
    routes() {
        this.app.use(Routes_1.default);
    }
    config() {
        this.app.use(express_1.default.json());
    }
    start(port) {
        this.app.listen(port, () => console.log(`Server running on port ${port}`));
    }
}
exports.default = App;
