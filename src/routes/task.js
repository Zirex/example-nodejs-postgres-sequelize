import { Router } from 'express';
const router = Router();

import { getTasks, createTask, getTask, deleteTask, updateTask } from '../controllers/task.controller';

router.post('/', createTask);
router.get('/', getTasks);
router.get('/:id', getTask);
router.delete('/:id', deleteTask);
router.put('/:id', updateTask);

export default router;