"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const activities_1 = require("../../json/activities");
function findActivitie(app) {
    app.get('/mystifolie/activities/:id', (req, res) => {
        const { id } = req.params;
        const user = activities_1.data.find(user => user.user_id === id);
        if (user) {
            res.json(user);
            console.log(user);
        }
    });
}
exports.default = findActivitie;
//# sourceMappingURL=findActivities.js.map