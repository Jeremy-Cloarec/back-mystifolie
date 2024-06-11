import { Model } from 'sequelize-typescript';
import { AssocClientActivity } from './assoc_client_activity.model';
export declare class Activity extends Model<Activity> {
    assocClientActivities: AssocClientActivity[];
    id_activity: number;
    nom: string;
    min_personne: number;
    max_personne: number;
    prix_par_personne: number;
    description: string;
}
