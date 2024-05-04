import {Column, DataType, Model,  Table } from 'sequelize-typescript';

@Table({ tableName: 'User' })
export class User extends Model<User> {

    @Column(DataType.INTEGER)
    id_client!: number;

    @Column(DataType.STRING)
    nom!: string;

    @Column(DataType.STRING)
    mdp!: string;

    @Column(DataType.STRING)
    mail!: string;
}