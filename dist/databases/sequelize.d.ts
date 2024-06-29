import { Activity } from '../models/activity.model';
import { User } from '../models/user.model';
import { AssocClientActivity } from '../models/assoc_client_activity.model';
export declare function ConnectionDB(): Promise<void>;
export declare function SynchroniseDB(): Promise<void>;
export { Activity, User, AssocClientActivity };
