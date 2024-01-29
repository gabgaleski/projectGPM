import {Response, Request, NextFunction } from 'express';

export default class ValidateRentalCar {
    static validateFields(req: Request, res: Response, next: NextFunction): Response | void {
        const { initialDate, finalDate } = req.body;

        if(!initialDate || !finalDate) {
            return res.status(400).json({message: "All fields must be filled"})
        }
        
        next();
    }
}