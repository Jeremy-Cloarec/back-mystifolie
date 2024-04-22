"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("../../db/sequelize");
function createActivitie(app) {
    app.post('/mystifolie/activites', async (req, res) => {
        try {
            const activity = await sequelize_1.Activity.create(req.body);
            const message = `L'activité' ${req.body.name} a bien été créé`;
            res.json({ message, data: activity });
        }
        catch (error) {
            console.log('Oups ! Unable to post activity in the database', error);
            res.status(500).send('Internal Server Error');
        }
    });
}
exports.default = createActivitie;
//# sourceMappingURL=createActivitie.js.map