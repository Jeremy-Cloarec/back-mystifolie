import { Router } from "express";
import { UserController } from '../controllers/user.controller'
import { authenticateJWT } from '../middlewares/auth.middlewares'

const router = Router();

router.get('/', authenticateJWT, UserController.getAll)
router.get('/:id', authenticateJWT, UserController.get)
router.post('/', authenticateJWT, UserController.post)
router.put('/:id', authenticateJWT, UserController.put)
router.delete('/:id', authenticateJWT, UserController.delete)

export default router