import { Request, Response, NextFunction } from "express";
import JWT from "../auth/JTW";

const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;


export default class ValidateUser {

    static createUser(req: Request, res: Response,next: NextFunction): Response | void {
        const { username, email, password } = req.body;
        const minPassword = 6;

        if (!username || !email || !password) {
            return res.status(400).json({message: 'Invalid Fields'})
        }

        if (!regex.test(email) || password.length < minPassword) {
            return res.status(401).json({message: 'Invalid email or password'})
        }
        next();
    }

    static loginUser(req: Request,res: Response, next: NextFunction): Response | void {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({message: 'Invalid Fields'})
        }

        if (!regex.test(email)) {
            return res.status(400).json({message: 'Invalid email format'})
        }

        next()
    }

    static extractBarear = (token: string): string => (
        token.includes(' ') ? token.split(' ')[1] : token
    );

    static validateToken(req: Request, res: Response, next: NextFunction): Response | void {
        const { authorization } = req.headers;

        if (!authorization) {
            return res.status(401).json({message: "UNAUTHORIZED"});
        }

        const formatedToken = ValidateUser.extractBarear(authorization);

        const tokenValidate = JWT.verify(formatedToken);

        if (tokenValidate === 'Token must be a valid token') {
            return res.status(401).json({ message: tokenValidate })
        }

        req.body.token = tokenValidate;

        next()

    }

    static adminUser(req: Request, res: Response, next: NextFunction): Response | void {
        try {
            const { role } = req.body.token;
            if (role !== "ADMIN") {
                return res.status(401).json({message:"Only ADMIN"});
            }

            next()
        } catch (error) {
            return res.status(400).json({error});
        }
    }

}