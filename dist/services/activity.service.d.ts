import { Activity } from '../databases/sequelize';
import { CreateActivityDTO } from '../dtos/activity.dto/createActivity.dto';
import { UpdateActivityDTO } from '../dtos/activity.dto/updateActivity.dto';
export declare class ActivityService {
    static getAllActivities(): Promise<Activity[]>;
    static getActivityById(id: number): Promise<Activity>;
    static createActivity(activityData: CreateActivityDTO): Promise<Activity>;
    static updateActivity(id: number, updatedData: UpdateActivityDTO): Promise<Activity>;
    static deleteActivity(id: number): Promise<void>;
}
