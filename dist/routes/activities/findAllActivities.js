const { Activities } = require('../../db/models/activities');
module.exports = (app) => {
    app.get('/mystifolie/activites', (req, res) => {
        Activities.findAll()
            .then(activitie => {
            const message = 'La liste des activités a bien été récupérée';
            res.json({ message, data: activitie });
        });
    });
};
//# sourceMappingURL=findAllActivities.js.map