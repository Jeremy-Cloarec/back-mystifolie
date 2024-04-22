"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("../../db/sequelize");
function deleteActivitie(app) {
    app.delete('/mystifolie/activites/:id', async (req, res) => {
        try {
            const activity = await sequelize_1.Activity.findByPk(req.params.id);
            if (!activity) {
                return res.status(404).json({ message: 'Activity not found' });
            }
            await activity.destroy();
            const message = `The activity has been destroyed`;
            res.json({ message });
        }
        catch (error) {
            console.log('Failed to delete activity from the database', error);
            res.status(500).send('Internal Server Error');
        }
    });
}
exports.default = deleteActivitie;
//# sourceMappingURL=deleteActivities.js.map