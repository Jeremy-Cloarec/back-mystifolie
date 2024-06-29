"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityController = void 0;
const activity_service_1 = require("../services/activity.service");
exports.ActivityController = {
    getAll: async (req, res) => {
        try {
            const activity = await activity_service_1.ActivityService.getAllActivities();
            res.json(activity);
        }
        catch (error) {
            console.log(error);
            res.status(500).send('Internal Server Error');
        }
    },
    get: async (req, res) => {
        try {
            const activityId = Number(req.params.id);
            const activity = await activity_service_1.ActivityService.getActivityById(activityId);
            const message = `The activity with ID ${activity.id_activity} has been found!`;
            res.status(200).json({ message, data: activity });
        }
        catch (error) {
            console.log('Oups ! Unable to retrieve activity from the service', error);
            res.status(404).json({ message: 'Activity not found' });
        }
    },
    post: async (req, res) => {
        try {
            const createActivityDTO = req.body;
            const activity = await activity_service_1.ActivityService.createActivity(createActivityDTO);
            const message = `L'activité' ${createActivityDTO.nom} a bien été créé`;
            res.json({ message, data: activity });
        }
        catch (error) {
            console.log(error);
            res.status(500).send('Internal Server Error');
        }
    },
    put: async (req, res) => {
        try {
            const updateActivityDTO = req.body;
            const activity = await activity_service_1.ActivityService.updateActivity(Number(req.params.id), updateActivityDTO);
            const message = `The activity whith ID ${activity.id} has been updated !`;
            res.json({ message, data: activity });
        }
        catch (error) {
            console.log(error);
            res.status(500).send('Internal Server Error');
        }
    },
    delete: async (req, res) => {
        try {
            await activity_service_1.ActivityService.deleteActivity(Number(req.params.id));
            const message = `The activity has been destroyed`;
            res.json({ message });
        }
        catch (error) {
            console.log(error);
            res.status(404).json({ message: 'Activity not found' });
        }
    }
};
//# sourceMappingURL=activity.controller.js.map