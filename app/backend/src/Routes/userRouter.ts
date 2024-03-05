import { Request, Response, Router } from 'express';
import UserController from '../Controller/userController';
import ValidateUser from '../middleware/validateUser';

const router = Router();
const userController = new UserController();

router.get('/',
ValidateUser.validateToken,
(req: Request, res: Response) => userController.findOne(req, res));

router.put('/',
ValidateUser.validateToken,
(req: Request, res: Response) => userController.update(req, res));

router.post('/',
ValidateUser.createUser,
(req: Request, res: Response) => userController.create(req, res));

router.delete('/',
ValidateUser.validateToken,
(req: Request, res: Response) => userController.delete(req, res))

export default router;