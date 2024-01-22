import { Request, Response } from 'express';
import UserService from '../Service/userService';
import hashPassword from '../auth/bcrypt';

export default class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    public async findAll(_req: Request, res: Response): Promise<Response> {
        const users = await this.userService.findAll();
        return res.status(200).json(users);
    }

    public async create(req: Request, res: Response): Promise<Response> {
        const createUser = await this.userService.create(req.body)

        if (!createUser) return res.status(400).json({message: 'Email already registered'})

        return res.status(201).json(createUser);
    }

    public async login(req: Request, res: Response): Promise<Response> {
        const userLogin = await this.userService.login(req.body);
        const { message } = userLogin;
        if (message === 'ERROR') {
            return res.status(401).json({message: 'Email not found'})
        }

        if (message === 'UNAUTHORIZED') {
            return res.status(401).json({message: 'Invalid password'})
        }

        return res.status(201).json({token: message});
    }

    public async update(req: Request, res: Response): Promise<Response | void> {
        const { username, email, password } = req.body;
        const { id } = req.body.token;
        let infosUser = {username, email, password};
        if (password) {
            infosUser = {username, email, password: hashPassword(password)}
        }
        const changeUser = await this.userService.update(infosUser, id);

        if (changeUser.message === "ERROR") {
            return res.status(500).json({message: "Error update"})
        }

        return res.status(200).json(changeUser);

    }

}
