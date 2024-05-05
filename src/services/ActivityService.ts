import { Activity } from '../databases/sequelize'
import { CreateActivityDTO } from '../dtos/activityModel/CreateActivityDTO';
import { UpdateActivityDTO } from '../dtos/activityModel/UpdateActivityDTO';

export class ActivityService {
    static async getAllActivities() {
        try {
            return await Activity.findAll();
        } catch (error) {
            throw new Error('Unable to retrieve activity from the database');
        }
    }
    static async getActivityById(id: number) {
        try {
            const activity = await Activity.findByPk(id);

            if (!activity) {
                throw new Error('Activity not found');
            }

            return activity;

        } catch (error) {
            throw new Error('Oups ! Unable to retrieve activity from the database');
        }
    }

    static async createActivity(activityData: CreateActivityDTO) {
        try {
            return await Activity.create(activityData);
        } catch (error) {
            throw new Error('Unable to create activity in the database');
        }
    }

    static async updateActivity(id: number, updatedData: UpdateActivityDTO) {
        try {
            const activity = await Activity.findByPk(id);

            if (!activity) {
                throw new Error('Activity not found');
            }

            await activity.update(updatedData);
            return activity;
        } catch (error) {
            throw new Error('Unable to update activity in the database');
        }
    }

    static async deleteActivity(id: number) {
        try {
            const activity = await Activity.findByPk(id);

            if (!activity) {
                throw new Error('Activity not found');
            }

            await activity.destroy();

        } catch (error) {
            throw new Error('Unable to delete activity from the database');
        }
    }
}