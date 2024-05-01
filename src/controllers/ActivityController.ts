import { Activity } from '../db/sequelize';

export const ActivityController = {
    getAll: async (req, res) => {
        try {
            const activities = await Activity.findAll();
            console.log(activities); // Log the retrieved activities
            res.json(activities);
        } catch (error) {
            console.log('Oups ! Unable to retrieve activities from the database', error);
            res.status(500).send('Internal Server Error');
        }
    },
    get: async (req, res) => {
        try {
            const activity = await Activity.findByPk(req.params.id)

            if (!activity) {
                return res.status(404).json({ message: 'Activity not found' });
            }

            const message = `The activity whith ID ${activity.id_activite} has been found!`
            res.json({ message, data: activity })

        } catch (error) {
            console.log('Oups ! Unable to retrieve activity from the database', error);
            res.status(500).send('Internal Server Error');
        }
    },
    post: async (req, res) => {
        try {
            const activity = await Activity.create(req.body)
            const message = `L'activité' ${req.body.nom} a bien été créé`
            console.log(req.body);

            res.json({ message, data: activity })

        } catch (error) {
            console.log('Oups ! Unable to post activity in the database', error);
            res.status(500).send('Internal Server Error');
        }
    },
    put: async (req, res) => {
        try {
            const activity = await Activity.findByPk(req.params.id)
            if (!activity) {
                return res.status(404).json({ message: 'Activity not found' });
            }

            await activity.update(req.body)


            const message = `The activity whith ID ${activity.id} has been updated !`
            res.json({ message, data: activity })

        } catch (error) {
            console.log('Oups ! Unable to retrieve activity from the database', error);
            res.status(500).send('Internal Server Error');
        }
    },
    delete: async (req, res) => {
        try {
            const activity = await Activity.findByPk(req.params.id)
            if (!activity) {
                return res.status(404).json({ message: 'Activity not found' });
            }

            await activity.destroy();

            const message = `The activity has been destroyed`
            res.json({ message })

        } catch (error) {
            console.log('Failed to delete activity from the database', error);
            res.status(500).send('Internal Server Error');
        }
    }
}