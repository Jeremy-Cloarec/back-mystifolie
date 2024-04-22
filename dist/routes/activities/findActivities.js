"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("../../db/sequelize");
function findActivitie(app) {
    app.get('/mystifolie/activites/:id', async (req, res) => {
        try {
            const activity = await sequelize_1.Activity.findByPk(req.params.id);
            if (!activity) {
                return res.status(404).json({ message: 'Activity not found' });
            }
            const message = `The activity whith ID ${activity.id} has been found!`;
            res.json({ message, data: activity });
        }
        catch (error) {
            console.log('Oups ! Unable to retrieve activity from the database', error);
            res.status(500).send('Internal Server Error');
        }
    });
}
exports.default = findActivitie;
//# sourceMappingURL=findActivities.js.map