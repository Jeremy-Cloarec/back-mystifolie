import { Request, Response } from 'express'
import { ActivityService } from '../services/activity.service'
import { CreateActivityDTO } from '../dtos/activity.dto/createActivity.dto'
import { UpdateActivityDTO } from '../dtos/activity.dto/updateActivity.dto'

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

            const message = `The activity with ID ${activity.id_activity} has been found!`;
            res.status(200).json({ message, data: activity });

        } catch (error) {
            console.log('Oups ! Unable to retrieve activity from the service', error);
            res.status(404).json({ message: 'Activity not found' });
        }
    },
    post: async (req: Request, res: Response) => {
        try {
            const createActivityDTO: CreateActivityDTO = req.body;
            const activity = await ActivityService.createActivity(createActivityDTO);
            const message = `L'activité' ${createActivityDTO.nom} a bien été créé`

            res.json({ message, data: activity })

        } catch (error) {
            console.log(error);
            res.status(500).send('Internal Server Error');
        }
    },
    put: async (req: Request, res: Response) => {
        try {
            const updateActivityDTO: UpdateActivityDTO = req.body;
            const activity = await ActivityService.updateActivity(Number(req.params.id), updateActivityDTO)

            const message = `The activity whith ID ${activity.id} has been updated !`
            res.json({ message, data: activity })

        } catch (error) {
            console.log(error);
            res.status(500).send('Internal Server Error');
        }
    },
    delete: async (req: Request, res: Response) => {
        try {
            await ActivityService.deleteActivity(Number(req.params.id))
            const message = `The activity has been destroyed`
            res.json({ message })

        } catch (error) {
            console.log(error);
            res.status(404).json({ message: 'Activity not found' });
        }
    }
}
