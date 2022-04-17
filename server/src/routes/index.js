import {Router} from 'express';
import taskRouter from './task.routes';

const router = new Router();

router.use('/task', taskRouter);



export default router;