import { Activity } from '../../db/sequelize';

export default function findActivitie(app) {
    app.get('/mystifolie/activities/:id', async (req, res) => {

        try {
            const activity = await Activity.findByPk(req.params.id); // 
            console.log(activity); // Log the retrieved activity
            res.json(activity); // Renvoie l'activité sous forme de réponse JSON

        } catch (error) {
            console.log('Oups ! Unable to retrieve activity from the database', error);
            res.status(500).send('Internal Server Error');
        }
    });
}