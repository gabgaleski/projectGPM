import {Request, Response, Router } from 'express';
import UserController from '../Controller/userController';

const router = Router();
const userController = new UserController();

router.get('/', (req: Request, res: Response) => userController.findAll(req, res));
router.post('/', (req: Request, res: Response) => userController.create(req, res));

export default router;