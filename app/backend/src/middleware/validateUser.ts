import { Request, Response, NextFunction } from "express";

export default class ValidateUser {

    static createUser(req: Request, res: Response, next: NextFunction): Response | void {
        const { username, email, password } = req.body;
        const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
        const minPassword = 6;

        if (!username || !email || !password) {
            return res.status(400).json({message: 'Invalid Fields'})
        }

        if (!regex.test(email) || password.length < minPassword) {
            return res.status(401).json({message: 'Invalid email or password'})
        }
        next();
    }

}