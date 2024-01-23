import { Request, Response, Router } from 'express'
import CarController from '../Controller/carController';
import ValidateUser from '../middleware/validateUser';

const router = Router();
const carController = new CarController();

router.get('/', (req: Request, res: Response) => carController.findAll(req, res));
router.put('/:id',
ValidateUser.validateToken,
(req: Request, res: Response) => carController.update(req, res));

export default router;