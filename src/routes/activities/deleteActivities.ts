
export default function deleteActivitie(app) {
    app.delete('/mystifolie/activites/:id', (req, res) => {
        res.send('Delete an activitie');
    });
}