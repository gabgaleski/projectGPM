import { Request, Response } from 'express';
import UserService from '../Service/userService';
import hashPassword from '../auth/bcrypt';

export default class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    public async findOne(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.body.token;
            const users = await this.userService.findOne(Number(id));
            if (!users) return res.status(404).json({message: "User not found"})
            return res.status(200).json(users);
        } catch (error) {
            return res.status(500).json({message: "ERROR"});
        }
    }

    public async create(req: Request, res: Response): Promise<Response> {
        try {
            const createUser = await this.userService.create(req.body)
            if (!createUser) {
                return res.status(409).json({message: 'Email already registered'})
            }
            
            return res.status(201).json({message: "User Created"});
        } catch (error) {
            return res.status(500).json({message: "ERROR"})
        }
    }

    public async login(req: Request, res: Response): Promise<Response> {
        try {
            const userLogin = await this.userService.login(req.body);
            const { message } = userLogin;
            if (message === 'ERROR') {
                return res.status(401).json({message: 'Email not found'})
            }
    
            if (message === 'UNAUTHORIZED') {
                return res.status(401).json({message: 'Invalid email or password'})
            }
    
            return res.status(201).json({token: message});
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    public async update(req: Request, res: Response): Promise<Response> {
        try {
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
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    public async delete(req: Request, res: Response): Promise<Response> {
        const { id } = req.body.token;
        const deleteAccount = await this.userService.delete(Number(id));

        if (deleteAccount.data === "ERROR") {
            return res.status(400).json({message: "Error"})
        }

        return res.status(200).json({message: "SUCCESS"});
    }

}
