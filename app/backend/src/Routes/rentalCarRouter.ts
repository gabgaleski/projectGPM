import { Router } from "express";
import { Response, Request } from "express";
import RentalCarController from "../Controller/rentalCarController";
import ValidateUser from "../middleware/validateUser";
import ValidateRentalCar from "../middleware/validateRentalCar";

const router = Router();
const rentalCarController = new RentalCarController();

router.get('/',
ValidateUser.validateToken,
ValidateUser.adminUser,
(req: Request, res: Response) => rentalCarController.findAll(req, res));

router.post('/:carId',
ValidateUser.validateToken,
ValidateUser.adminUser,
ValidateRentalCar.validateFields,
(req: Request, res: Response) => rentalCarController.create(req, res))

export default router;