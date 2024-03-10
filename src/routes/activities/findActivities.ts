import { Activity } from '../../db/sequelize'


export default function findActivitie(app) {
    app.get('/mystifolie/activities/:id', async (req, res) => {
        try {
            const activity = await Activity.findByPk(req.params.id);
            console.log(activity); // Log the retrieved activities
            res.json(activity)

        } catch (error) {
            console.log('Oups ! Unable to retrieve activities from the database', error);
            res.status(500).send('Internal Server Error');
        }

    });
}
