"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityService = void 0;
const sequelize_1 = require("../databases/sequelize");
class ActivityService {
    static async getAllActivities() {
        try {
            return await sequelize_1.Activity.findAll();
        }
        catch (error) {
            throw new Error('Unable to retrieve activity from the database');
        }
    }
    static async getActivityById(id) {
        try {
            const activity = await sequelize_1.Activity.findByPk(id);
            if (!activity) {
                throw new Error('Activity not found');
            }
            return activity;
        }
        catch (error) {
            throw new Error('Oups ! Unable to retrieve activity from the database');
        }
    }
    static async createActivity(activityData) {
        try {
            return await sequelize_1.Activity.create(activityData);
        }
        catch (error) {
            throw new Error('Unable to create activity in the database');
        }
    }
    static async updateActivity(id, updatedData) {
        try {
            const activity = await sequelize_1.Activity.findByPk(id);
            if (!activity) {
                throw new Error('Activity not found');
            }
            await activity.update(updatedData);
            return activity;
        }
        catch (error) {
            throw new Error('Unable to update activity in the database');
        }
    }
    static async deleteActivity(id) {
        try {
            const activity = await sequelize_1.Activity.findByPk(id);
            if (!activity) {
                throw new Error('Activity not found');
            }
            await activity.destroy();
        }
        catch (error) {
            throw new Error('Unable to delete activity from the database');
        }
    }
}
exports.ActivityService = ActivityService;
//# sourceMappingURL=activity.service.js.map