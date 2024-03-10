export default function updateActivitie(app) {
    app.put('/mystifolie/activites/:id', (req, res) => {
        res.send('Update an activitie');
    });
}