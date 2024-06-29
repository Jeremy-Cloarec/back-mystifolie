"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_service_1 = require("../services/user.service");
exports.UserController = {
    getAll: async (req, res) => {
        try {
            const user = await user_service_1.UserService.getAllUsers();
            res.json(user);
        }
        catch (error) {
            console.log(error);
            res.status(500).send('Internal Server Error');
        }
    },
    get: async (req, res) => {
        try {
            const userId = Number(req.params.id);
            const user = await user_service_1.UserService.getUserById(userId);
            const message = `The user with ID ${user.id_user} has been found!`;
            res.status(200).json({ message, data: user });
        }
        catch (error) {
            console.log('Oups ! Unable to retrieve user from the service', error);
            res.status(404).json({ message: 'User not found' });
        }
    },
    post: async (req, res) => {
        try {
            const createUserDTO = req.body;
            const user = await user_service_1.UserService.createUser(createUserDTO);
            const message = `User' ${createUserDTO.nom} has been created`;
            res.json({ message, data: user });
        }
        catch (error) {
            console.log(error);
            res.status(500).send('Internal Server Error');
        }
    },
    put: async (req, res) => {
        try {
            const updateUserDTO = req.body;
            const user = await user_service_1.UserService.updateUser(Number(req.params.id), updateUserDTO);
            const message = `The user whith ID ${user.id} has been updated !`;
            res.json({ message, data: user });
        }
        catch (error) {
            console.log(error);
            res.status(500).send('Internal Server Error');
        }
    },
    delete: async (req, res) => {
        try {
            await user_service_1.UserService.deleteUser(Number(req.params.id));
            const message = `The user has been destroyed`;
            res.json({ message });
        }
        catch (error) {
            console.log(error);
            res.status(404).json({ message: 'User not found' });
        }
    }
};
//# sourceMappingURL=user.controller.js.map