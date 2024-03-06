
export default function deleteActivitie(app) {
    app.delete('mystifolie/activities/:id', (req, res) => {
        res.send('Delete an activitie');
    });
}