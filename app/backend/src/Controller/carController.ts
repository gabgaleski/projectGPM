import { Request, Response } from "express";
import CarService from "../Service/carService";

export default class CarController {
    private carService: CarService;

    constructor() {
        this.carService = new CarService()
    }

    public async findAll(req: Request, res: Response): Promise<Response> {
        const getCar = await this.carService.findAll();
        return res.status(200).json(getCar);
    }

}