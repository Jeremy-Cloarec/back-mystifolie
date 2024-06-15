import bcrypt from 'bcrypt';
import { User } from '../models/user.model';
import { CreateUserDTO } from '../dtos/user.dto/createUser.dto';
import { log } from 'console';

class AuthService {
    public async register(createUserDTO: CreateUserDTO): Promise<User | null> {
        const { nom, mdp, mail } = createUserDTO;

        // Check if user already exists
        const existingUser = await User.findOne({ where: { mail } });
        if (existingUser) {
            console.log('Email already in use');
            
            throw new Error('Email already in use');
        }

        const hashedPassword = await bcrypt.hash(mdp, 10);
        const user = await User.create({ nom, mdp: hashedPassword, mail });
        return user;
    }

    public async login(CreateUserDTO: CreateUserDTO): Promise<User | null> {
        const { mail, mdp } = CreateUserDTO;
        const user = await User.findOne({ where: { mail } });
        if (user && (await bcrypt.compare(mdp, user.mdp))) {
            return user;
        }
        return null;
    }
}

export default new AuthService();
