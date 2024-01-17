import { Request, Response } from 'express';
import UserService from '../Service/userService';

export default class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    public async findAll(_req: Request, res: Response) {
        const users = await this.userService.findAll();
        return res.status(200).json(users);
    }

    public async create(req: Request, res: Response) {
        const createUser = await this.userService.create(req.body)

        if (!createUser) return res.status(400).json({message: 'Email already registered'})

        return res.status(201).json(createUser);
    }

}
