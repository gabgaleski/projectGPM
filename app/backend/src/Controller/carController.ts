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
        try {
            const { id } = req.params;
            const updateCar = await this.carService.update(id, req.body);
    
            return res.status(200).json(updateCar);
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    public async create(req: Request, res: Response): Promise<Response> {
        try {
            const createCar = await this.carService.create(req.body);
            return res.status(201).json(createCar);
        } catch (error) {
            return res.status(400).json(error)
        }
    }

}