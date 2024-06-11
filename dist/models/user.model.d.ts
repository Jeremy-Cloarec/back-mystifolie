import { Model } from 'sequelize-typescript';
import { AssocClientActivity } from './assoc_client_activity.model';
export declare class User extends Model<User> {
    assocClientActivities: AssocClientActivity[];
    id_user: number;
    nom: string;
    mdp: string;
    mail: string;
}
