import { Column, DataType, AutoIncrement, Model, PrimaryKey, Table, HasMany } from 'sequelize-typescript';
import { AssocClientActivity } from './assoc_client_activity.model';

@Table({ tableName: 'Activity' })
export class Activity extends Model<Activity> {

    @HasMany(() => AssocClientActivity)
    assocClientActivities: AssocClientActivity[];

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id_activity!: number;

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


