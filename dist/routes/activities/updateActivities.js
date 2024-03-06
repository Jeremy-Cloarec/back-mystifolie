"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function updateActivitie(app) {
    app.put('mystifolie/activities/:id', (req, res) => {
        res.send('Update an activitie');
    });
}
exports.default = updateActivitie;
//# sourceMappingURL=updateActivities.js.map