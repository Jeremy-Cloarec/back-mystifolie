import { User } from '../databases/sequelize';
import { CreateUserDTO } from '../dtos/user.dto/createUser.dto';
import { UpdateUserDTO } from '../dtos/user.dto/updateUser.dto';
export declare class UserService {
    static getAllUsers(): Promise<User[]>;
    static getUserById(id: number): Promise<User>;
    static createUser(userData: CreateUserDTO): Promise<User>;
    static updateUser(id: number, updatedData: UpdateUserDTO): Promise<User>;
    static deleteUser(id: number): Promise<void>;
}
