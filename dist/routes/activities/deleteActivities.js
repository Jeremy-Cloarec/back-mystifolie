"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function deleteActivitie(app) {
    app.delete('mystifolie/activities/:id', (req, res) => {
        res.send('Delete an activitie');
    });
}
exports.default = deleteActivitie;
//# sourceMappingURL=deleteActivities.js.map