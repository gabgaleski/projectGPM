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

}