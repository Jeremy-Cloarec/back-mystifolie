import { Activity } from '../../db/sequelize';

export default function findActivitie(app) {
    app.get('/mystifolie/activites/:id', async (req, res) => {

        try {
            const activity = await Activity.findByPk(req.params.id)

            if (!activity) {
                return res.status(404).json({ message: 'Activity not found' });
            }

            const message = `The activity whith ID ${activity.id} has been found!`
            res.json({ message, data: activity })

        } catch (error) {
            console.log('Oups ! Unable to retrieve activity from the database', error);
            res.status(500).send('Internal Server Error');
        }
    });
}