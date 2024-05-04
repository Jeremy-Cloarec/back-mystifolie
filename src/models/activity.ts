import { Column, DataType, AutoIncrement, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({ tableName: 'Activity' })
export class Activity extends Model<Activity> {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id_activite!: number;

    @Column(DataType.STRING)
    nom!: string;

    @Column(DataType.INTEGER)
    min_personne!: number;

    @Column(DataType.INTEGER)
    max_personne!: number;

    @Column(DataType.INTEGER)
    prix_par_personne!: number;

    @Column(DataType.TEXT)
    description!: string;
}


