import { Request, Response } from "express";
import RentalCarService from "../Service/rentalCarService";

export default class RentalCarController {
    private rentalCarService: RentalCarService

    constructor() {
        this.rentalCarService = new RentalCarService;
    }

    public async findAll(_req: Request, res: Response): Promise<Response> {
        const getAll = await this.rentalCarService.findAll();

        return res.status(200).json(getAll);
    }

    public async create(req: Request, res: Response): Promise<Response> {
        try {
            const { carId } = req.params;
            const { id } = req.body.token;
            const create = await this.rentalCarService.create(carId, id, req.body);
    
            if (create.message !== "SUCCESS") {
                return res.status(400).json(create);
            }
    
            return res.status(201).json(create);
        } catch (error) {
            return res.status(500).json({message: "ERROR"})
        }
    }

    public async findCarsByUser(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.body.token;
            const data = await this.rentalCarService.findCarsByUser(Number(id));
            if (!data) return res.status(401).json({message: "Not Found"})
            return res.status(200).json(data)
        } catch (error) {
            return res.status(500).json({message: "ERROR"})
        }
    }

}