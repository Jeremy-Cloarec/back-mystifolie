import { Column, DataType, Model, Table, AutoIncrement, PrimaryKey, HasMany, Unique, BeforeBulkCreate } from 'sequelize-typescript';
import { AssocClientActivity } from './assoc_client_activity.model';
import bcrypt from 'bcrypt';

@Table({ tableName: 'User' })
export class User extends Model<User> {

    @HasMany(() => AssocClientActivity)
    assocClientActivities: AssocClientActivity[];

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id_user!: number;

    @Column(DataType.STRING)
    nom!: string;

    @Column(DataType.STRING)
    mdp!: string;

    @Unique
    @Column(DataType.STRING)
    mail!: string;
    
    @BeforeBulkCreate
    static async hashPasswords(users: User[]) {
        const saltRounds = 10;
        for (const user of users) {
            if (user.mdp) {
                user.mdp = await bcrypt.hash(user.mdp, saltRounds);
            }
        }
    }
}