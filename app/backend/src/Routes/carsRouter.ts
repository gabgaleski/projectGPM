import { Request, Response, Router } from 'express'
import CarController from '../Controller/carController';
import ValidateUser from '../middleware/validateUser';
import ValidateCar from '../middleware/validateCar';

const router = Router();
const carController = new CarController();

router.get('/', (req: Request, res: Response) => carController.findAll(req, res));
router.get('/:id', (req: Request, res: Response) => carController.findOne(req, res))

router.put('/:id',
ValidateUser.validateToken,
ValidateUser.adminUser,
(req: Request, res: Response) => carController.update(req, res));

router.post('/',
ValidateUser.validateToken,
ValidateUser.adminUser,
ValidateCar.validateFields,
(req: Request, res: Response) => carController.create(req, res))

export default router;