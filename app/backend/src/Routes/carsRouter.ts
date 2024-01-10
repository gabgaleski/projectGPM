import { Request, Response, Router } from 'express'
import CarController from '../Controller/carController';

const router = Router();
const carController = new CarController();

router.get('/', (req: Request, res: Response) => carController.findAll(req, res))

export default router;