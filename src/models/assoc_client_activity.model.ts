import { Column, DataType, Model, Table, ForeignKey, BelongsTo, BelongsToMany, PrimaryKey } from 'sequelize-typescript';
import { Activity } from './activity.model';
import { User } from './user.model';

@Table({ tableName: 'assoc_client_activity' })
export class AssocClientActivity extends Model<AssocClientActivity> {
    @PrimaryKey
    @ForeignKey(() => User)
    @Column(DataType.INTEGER)
    id_user!: number;

    @PrimaryKey
    @ForeignKey(() => Activity)
    @Column(DataType.INTEGER)
    id_activity!: number;

    @Column(DataType.INTEGER)
    nombre_participants!: number;

    @Column(DataType.DATE)
    date_reservation!: Date;

    @BelongsTo(() => User)
    user!: User;

    @BelongsTo(() => Activity)
    activity!: Activity;
}
