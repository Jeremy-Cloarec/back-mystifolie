import { Request, Response } from 'express'
import { UserService } from '../services/user.service'
import { CreateUserDTO } from '../dtos/user.dto/createUser.dto'
import { UpdateUserDTO } from '../dtos/user.dto/updateUser.dto'

export const UserController = {

    getAll: async (req: Request, res: Response) => {
        try {
            const user = await UserService.getAllUsers();
            res.json(user);

        } catch (error) {
            console.log(error);
            res.status(500).send('Internal Server Error');
        }
    },
    get: async (req: Request, res: Response) => {
        try {
            const userId = Number(req.params.id);
            const user = await UserService.getUserById(userId);

            const message = `The user with ID ${user.id_user} has been found!`;
            res.status(200).json({ message, data: user });

        } catch (error) {
            console.log('Oups ! Unable to retrieve user from the service', error);
            res.status(404).json({ message: 'User not found' });
        }
    },
    post: async (req: Request, res: Response) => {
        try {
            const createUserDTO: CreateUserDTO = req.body;
            const user = await UserService.createUser(createUserDTO);
            const message = `User' ${createUserDTO.nom} has been created`

            res.json({ message, data: user })

        } catch (error) {
            console.log(error);
            res.status(500).send('Internal Server Error');
        }
    },
    put: async (req: Request, res: Response) => {
        try {
            const updateUserDTO: UpdateUserDTO = req.body;
            const user = await UserService.updateUser(Number(req.params.id), updateUserDTO)

            const message = `The user whith ID ${user.id} has been updated !`
            res.json({ message, data: user })

        } catch (error) {
            console.log(error);
            res.status(500).send('Internal Server Error');
        }
    },
    delete: async (req: Request, res: Response) => {
        try {
            await UserService.deleteUser(Number(req.params.id))
            const message = `The user has been destroyed`
            res.json({ message })

        } catch (error) {
            console.log(error);
            res.status(404).json({ message: 'User not found' });
        }
    }
}
