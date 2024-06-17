import { Router } from "express";
import { ActivityController } from '../controllers/activity.controller'
import {authenticateJWT} from '../middlewares/auth.middlewares' 

const router = Router();

router.get('/', authenticateJWT, ActivityController.getAll)
router.get('/:id', authenticateJWT, ActivityController.get)
router.post('/', authenticateJWT,ActivityController.post)
router.put('/:id', authenticateJWT, ActivityController.put)
router.delete('/:id',authenticateJWT, ActivityController.delete)

export default router