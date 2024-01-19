import { Request, Response, Router } from "express";
import UserController from "../Controller/userController";
import ValidateUser from "../middleware/validateUser";

const router = Router();
const userController = new UserController();

router.post('/',
ValidateUser.loginUser,
(req: Request, res: Response) => userController.login(req, res))

export default router;