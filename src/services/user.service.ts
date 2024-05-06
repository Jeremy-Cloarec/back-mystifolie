import { User } from '../databases/sequelize'
import { CreateUserDTO } from '../dtos/user.dto/createUser.dto';
import { UpdateUserDTO } from '../dtos/user.dto/updateUser.dto';

export class UserService {
    static async getAllUsers() {
        try {
            return await User.findAll();
        } catch (error) {
            throw new Error('Unable to retrieve user from the database');
        }
    }
    static async getUserById(id: number) {
        try {
            const user = await User.findByPk(id);

            if (!user) {
                throw new Error('User not found');
            }
            return user;

        } catch (error) {
            throw new Error('Oups ! Unable to retrieve user from the database');
        }
    }

    static async createUser(userData: CreateUserDTO) {
        try {
            return await User.create(userData);
        } catch (error) {
            throw new Error('Unable to create user in the database');
        }
    }

    static async updateUser(id: number, updatedData: UpdateUserDTO) {
        try {
            const user = await User.findByPk(id);

            if (!user) {
                throw new Error('User not found');
            }

            await user.update(updatedData);
            return user;
        } catch (error) {
            throw new Error('Unable to update user in the database');
        }
    }

    static async deleteUser(id: number) {
        try {
            User
            const user = await User.findByPk(id);

            if (!user) {
                throw new Error('User not found');
            }

            await user.destroy();

        } catch (error) {
            throw new Error('Unable to delete user from the database');
        }
    }
}