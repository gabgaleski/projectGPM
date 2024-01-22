import { Router } from "express";
import { Response, Request } from "express";
import RentalCarController from "../Controller/rentalCarController";

const router = Router();
const rentalCarController = new RentalCarController();

router.get('/',
(req: Request, res: Response) => rentalCarController.findAll(req, res));

export default router;