import { Request, Response, NextFunction } from "express";

export default class ValidateCar {
    static validateFields(req: Request, res: Response, next: NextFunction): Response | void {
        const { name, value, brand, carDetails, description} = req.body;

        if (!name || !value || !brand || !description || !carDetails) {
            return res.status(400).json({message: "All fields must be filled"})
        }

        const { year, capacity, gear } = carDetails;
        
        if (!year || !capacity || !gear) {
            return res.status(400).json({message: "Car Details missing fields"})
        }

        next()
    }
}