"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findActivitie(app) {
    app.get('mystifolie/activities/:id', (req, res) => {
        res.send('Find an activitie');
    });
}
exports.default = findActivitie;
//# sourceMappingURL=findActivities.js.map