import { Router } from 'express'
import userRouter from './userRouter'
import carsRouter from './carsRouter'

const router = Router();

router.use('/users', userRouter);
router.use('/cars', carsRouter);

export default router;