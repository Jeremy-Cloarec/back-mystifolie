import { Request, Response } from 'express';
import authService from '../services/auth.service';
import { CreateUserDTO } from '../dtos/user.dto/createUser.dto';

class AuthController {
    public async register(req: Request, res: Response): Promise<Response> {
        try {
            const createUserDTO: CreateUserDTO = req.body;
            const user = await authService.register(createUserDTO);
            return res.status(201).json(user);

        } catch (error) {
            console.error('Error in register controller:', error); 
            if (error.message === 'Email already in use') {
                return res.status(400).json({ message: error.message });
            }
            return res.status(500).json({ message: error.message });
        }
    }

    public async login(req: Request, res: Response): Promise<Response> {
        try {
            const createUserDTO: CreateUserDTO = req.body;
            const result = await authService.login(createUserDTO);
            if (!result) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
}

export default new AuthController();
