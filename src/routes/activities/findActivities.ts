
export default function findActivitie(app) {
    app.get('mystifolie/activities/:id', (req, res) => {
        res.send('Find an activitie');
    });
}
