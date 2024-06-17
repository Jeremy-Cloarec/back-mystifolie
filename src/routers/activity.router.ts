import { Router } from "express";
import { ActivityController } from '../controllers/activity.controller'

const authenticateJWT = require('../middlewares/auth.middlewares')

const router = Router();

router.get('/', ActivityController.getAll)
router.get('/:id', ActivityController.get)
router.post('/', ActivityController.post)
router.put('/:id', ActivityController.put)
router.delete('/:id', ActivityController.delete)

router.get('/protected-route', authenticateJWT, (req, res) => {
    res.send('This is a protected route');
});

export default router