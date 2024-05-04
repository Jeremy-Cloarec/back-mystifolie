import { Request, Response } from 'express'
import { ActivityService } from '../services/ActivityService'

export const ActivityController = {
    getAll: async (req: Request, res: Response) => {
        try {
            const activity = await ActivityService.getAllActivities();
            res.json(activity);

        } catch (error) {
            console.log(error);
            res.status(500).send('Internal Server Error');
        }
    },
    get: async (req: Request, res: Response) => {
        try {
            const activityId = Number(req.params.id);
            const activity = await ActivityService.getActivityById(activityId);

            const message = `The activity with ID ${activity.id_activite} has been found!`;
            res.status(200).json({ message, data: activity });
        } catch (error) {
            console.log('Oups ! Unable to retrieve activity from the service', error);
            res.status(404).json({ message: 'Activity not found' });
        }
    },
    post: async (req: Request, res: Response) => {
        try {
            const activity = await ActivityService.createActivity(req.body);
            const message = `L'activité' ${req.body.nom} a bien été créé`
            console.log(req.body);

            res.json({ message, data: activity })

        } catch (error) {
            console.log(error);
            res.status(500).send('Internal Server Error');
        }
    },
    put: async (req: Request, res: Response) => {
        try {
            const activity = await ActivityService.updateActivity(Number(req.params.id), req.body)

            if (!activity) {
                return res.status(404).json({ message: 'Activity not found' });
            }

            const message = `The activity whith ID ${activity.id} has been updated !`
            res.json({ message, data: activity })

        } catch (error) {
            console.log(error);
            res.status(500).send('Internal Server Error');
        }
    },
    delete: async (req: Request, res: Response) => {
        try {
            const activity = await ActivityService.deleteActivity(Number(req.params.id))
            if (!activity) {
                return res.status(404).json({ message: 'Activity not found' });
            }

            const message = `The activity has been destroyed`
            res.json({ message })

        } catch (error) {
            console.log(error);
            res.status(500).send('Internal Server Error');
        }
    }
}