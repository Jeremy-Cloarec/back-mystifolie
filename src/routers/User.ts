import { Router } from "express";
import { UserController } from '../controllers/UserController'

const router = Router();

router.get('/', UserController.getAll)
router.get('/:id', UserController.get)
router.post('/', UserController.post)
router.put('/:id', UserController.put)
router.delete('/:id', UserController.delete)

export default router