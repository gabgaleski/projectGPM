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
    async findAll(req, res) {
        const users = await this.userService.findAll();
        return res.status(200).json(users);
    }
}
exports.default = UserController;
