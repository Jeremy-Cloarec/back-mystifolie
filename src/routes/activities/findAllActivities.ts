import {Activity} from '../../db/sequelize'

export default function findAllActivitie(app) {
    app.get('/mystifolie/activites', async (req, res) => {
        try {
            const activities = await Activity.findAll();
            console.log(activities); // Log the retrieved activities
            res.json(activities)

        } catch (error) {
            console.log('Oups ! Unable to retrieve activities from the database', error);
            res.status(500).send('Internal Server Error');
        }
    });
}
