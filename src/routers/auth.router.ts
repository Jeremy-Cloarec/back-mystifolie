import { Router } from "express";
import AuthController from '../controllers/auth.controller'
import { authenticateJWT } from '../middlewares/auth.middlewares'

const router = Router();

router.post('/login', AuthController.login)
router.post('/register', AuthController.register)

router.get('/protected-route', authenticateJWT, (req, res) => {
    res.send('This is a protected route');
});

export default router