import { Router } from "express";
import { Response, Request } from "express";
import RentalCarController from "../Controller/rentalCarController";
import ValidateUser from "../middleware/validateUser";

const router = Router();
const rentalCarController = new RentalCarController();

router.get('/',
(req: Request, res: Response) => rentalCarController.findAll(req, res));

router.post('/:carId',
ValidateUser.validateToken,
(req: Request, res: Response) => rentalCarController.create(req, res))

export default router;