import { Request, Response } from 'express';
import UserService from '../Service/userService';

export default class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    public async findAll(req: Request, res: Response) {
        const users = await this.userService.findAll();
        return res.status(200).json(users);
    }

}