
export default function createActivitie(app) {
    app.post('mystifolie/activities', (req, res) => {
        res.send('Create an activitie');
    });
}