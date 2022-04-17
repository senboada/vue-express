import {Router} from 'express';

import validate from '../middlewares/validate.middleware';
import taskValidation from '../validations/task.validation';

import taskController from '../controllers/task.controller';

const router = Router();

router.get('/:id/',validate(taskValidation.show), taskController.show);
router.get('/', taskController.index);
router.post('/',validate(taskValidation.store), taskController.store);
router.put('/:id/',validate(taskValidation.update), taskController.store);

export default router;