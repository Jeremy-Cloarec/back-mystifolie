import { Column, DataType, Model, Table, AutoIncrement, PrimaryKey } from 'sequelize-typescript';

@Table({ tableName: 'User' })
export class User extends Model<User> {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id_user!: number;

    @Column(DataType.STRING)
    nom!: string;

    @Column(DataType.STRING)
    mdp!: string;

    @Column(DataType.STRING)
    mail!: string;
}