"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userModel_1 = __importDefault(require("../database/models/userModel"));
const bcrypt_1 = __importDefault(require("../auth/bcrypt"));
class UserService {
    async findAll() {
        return await userModel_1.default.findAll();
    }
    async create(user) {
        const defaultRole = 'USER';
        const { password, username, email } = user;
        const criptoPassword = (0, bcrypt_1.default)(password);
        const request = { username, email, password: criptoPassword, role: defaultRole };
        const newUser = await userModel_1.default.create(request);
        return newUser;
    }
}
exports.default = UserService;
