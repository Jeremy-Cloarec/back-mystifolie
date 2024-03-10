import { Activity } from '../../db/sequelize';

export default function findActivitie(app) {
    app.get('/mystifolie/activites/:id', async (req, res) => {

        try {
            const activity = await Activity.findByPk(req.params.id)
            const message = 'Une activité a bien été trouvée'
            res.json({ message, data: activity })
           
        } catch (error) {
            console.log('Oups ! Unable to retrieve activity from the database', error);
            res.status(500).send('Internal Server Error');
        }
    });
}