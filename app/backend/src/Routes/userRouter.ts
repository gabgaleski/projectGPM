import { Request, Response, Router } from 'express';
import UserController from '../Controller/userController';
import ValidateUser from '../middleware/validateUser';

const router = Router();
const userController = new UserController();

router.get('/',
(req: Request, res: Response) => userController.findAll(req, res));

router.put('/',
ValidateUser.validateToken,
(req: Request, res: Response) => userController.update(req, res));
router.post('/',
ValidateUser.createUser,
(req: Request, res: Response) => userController.create(req, res));

export default router;