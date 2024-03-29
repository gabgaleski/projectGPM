import { Router } from 'express'
import userRouter from './userRouter'
import carsRouter from './carsRouter'
import rentalCarRouter from './rentalCarRouter';
import loginRouter from './loginRouter';

const router = Router();

router.use('/users', userRouter);
router.use('/cars', carsRouter);
router.use('/rental-cars', rentalCarRouter);
router.use('/login', loginRouter);

export default router;