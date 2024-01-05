"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = __importDefault(require("../Service/userService"));
class UserController {
    constructor() {
        this.userService = new userService_1.default();
    }
    async findAll(_req, res) {
        const users = await this.userService.findAll();
        return res.status(200).json(users);
    }
    async create(req, res) {
        const createUser = await this.userService.create(req.body);
        return res.status(201).json(createUser);
    }
}
exports.default = UserController;
