import { Router } from "express";
import { ActivityController } from '../controllers/activity.controller'

const router = Router();

router.get('/', ActivityController.getAll)
router.get('/:id', ActivityController.get)
router.post('/', ActivityController.post)
router.put('/:id', ActivityController.put)
router.delete('/:id', ActivityController.delete)

export default router