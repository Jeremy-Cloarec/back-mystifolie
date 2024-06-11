"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const sequelize_1 = require("../databases/sequelize");
class UserService {
    static async getAllUsers() {
        try {
            return await sequelize_1.User.findAll();
        }
        catch (error) {
            throw new Error('Unable to retrieve user from the database');
        }
    }
    static async getUserById(id) {
        try {
            const user = await sequelize_1.User.findByPk(id);
            if (!user) {
                throw new Error('User not found');
            }
            return user;
        }
        catch (error) {
            throw new Error('Oups ! Unable to retrieve user from the database');
        }
    }
    static async createUser(userData) {
        try {
            return await sequelize_1.User.create(userData);
        }
        catch (error) {
            throw new Error('Unable to create user in the database');
        }
    }
    static async updateUser(id, updatedData) {
        try {
            const user = await sequelize_1.User.findByPk(id);
            if (!user) {
                throw new Error('User not found');
            }
            await user.update(updatedData);
            return user;
        }
        catch (error) {
            throw new Error('Unable to update user in the database');
        }
    }
    static async deleteUser(id) {
        try {
            sequelize_1.User;
            const user = await sequelize_1.User.findByPk(id);
            if (!user) {
                throw new Error('User not found');
            }
            await user.destroy();
        }
        catch (error) {
            throw new Error('Unable to delete user from the database');
        }
    }
}
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map