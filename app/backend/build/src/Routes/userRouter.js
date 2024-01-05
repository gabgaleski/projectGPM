"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = __importDefault(require("../Controller/userController"));
const router = (0, express_1.Router)();
const userController = new userController_1.default();
router.get('/', (req, res) => userController.findAll(req, res));
router.post('/', (req, res) => userController.create(req, res));
exports.default = router;
