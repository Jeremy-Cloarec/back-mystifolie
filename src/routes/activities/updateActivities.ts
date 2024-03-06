
export default function updateActivitie(app) {
    app.put('mystifolie/activities/:id', (req, res) => {
        res.send('Update an activitie');
    });
}