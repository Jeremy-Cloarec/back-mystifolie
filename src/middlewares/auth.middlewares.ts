import { Request, Response, NextFunction } from 'express';
import authService from '../services/auth.service';

interface CustomRequest extends Request {
    user?: any; // Define the 'user' property with any type
}

export const authenticateJWT = (req: CustomRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        const user = authService.verifyToken(token);
        if (user) {
            req.user = user;
            next();
        } else {
            res.sendStatus(403); // Forbidden
        }
    } else {
        res.sendStatus(401); // Unauthorized
    }
};
