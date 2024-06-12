import { Column, DataType, Model, Table, AutoIncrement, PrimaryKey, HasMany, Unique } from 'sequelize-typescript';
import { AssocClientActivity } from './assoc_client_activity.model';

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
    
}