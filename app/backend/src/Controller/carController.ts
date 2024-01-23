import { Request, Response } from "express";
import CarService from "../Service/carService";

export default class CarController {
    private carService: CarService;

    constructor() {
        this.carService = new CarService()
    }

    public async findAll(req: Request, res: Response): Promise<Response> {
        const getCars = await this.carService.findAll();
        return res.status(200).json(getCars);
    }

    public async update(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const updateCar = await this.carService.update(id, req.body);

        return res.status(200).json(updateCar);
    }

}