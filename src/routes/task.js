import { Router } from 'express';
const router = Router();

import { getTasks, createTask, getTask, deleteTask } from '../controllers/task.controller';

router.post('/', createTask);
router.get('/', getTasks);
router.get('/:id', getTask);
router.delete('/:id', deleteTask);

export default router;