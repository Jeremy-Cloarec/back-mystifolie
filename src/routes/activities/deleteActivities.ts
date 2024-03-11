import { Activity } from '../../db/sequelize';

export default function deleteActivitie(app) {
    app.delete('/mystifolie/activites/:id', async (req, res) => {
        try {
            const activity = await Activity.findByPk(req.params.id)
            if (!activity) {
                return res.status(404).json({ message: 'Activity not found' });
            }

            await activity.destroy()

            const message = `The activity has been destroyed`
            res.json({ message })

        } catch (error) {
            console.log('Failed to delete activity from the database', error);
            res.status(500).send('Internal Server Error');
        }
    });
}