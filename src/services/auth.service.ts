import bcrypt from 'bcrypt';
const jwt = require('jsonwebtoken');
import { User } from '../models/user.model';
import { CreateUserDTO } from '../dtos/user.dto/createUser.dto';


class AuthService {
    private secretKey: string = process.env.TOKEN_SECRET;

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

    public async login(CreateUserDTO: CreateUserDTO): Promise<{ user: User; token: string } | null> {
        const { mail, mdp } = CreateUserDTO;
        const user = await User.findOne({ where: { mail } });
        if (user && (await bcrypt.compare(mdp, user.mdp))) {
            const token = jwt.sign({ id: user.id }, this.secretKey, { expiresIn: '1h' });
            return {user, token};
        }
        return null;
    }

    public verifyToken(token: string): any {
        try {
            return jwt.verify(token, this.secretKey);
        } catch (error) {
            return null;
        }
    }
}

export default new AuthService();
