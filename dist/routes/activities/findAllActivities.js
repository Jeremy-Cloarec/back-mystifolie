"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const activities_1 = require("../../json/activities");
function findAllActivitie(app) {
    app.get('/mystifolie/activites', (req, res) => {
        res.json(activities_1.data);
        console.log(activities_1.data);
    });
}
exports.default = findAllActivitie;
//# sourceMappingURL=findAllActivities.js.map