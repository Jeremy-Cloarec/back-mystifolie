import { Model } from 'sequelize-typescript';
import { Activity } from './activity.model';
import { User } from './user.model';
export declare class AssocClientActivity extends Model<AssocClientActivity> {
    id_user: number;
    id_activity: number;
    nombre_participants: number;
    date_reservation: Date;
    user: User;
    activity: Activity;
}
