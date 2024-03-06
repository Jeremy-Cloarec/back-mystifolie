"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createActivitie(app) {
    app.post('mystifolie/activities', (req, res) => {
        res.send('Create an activitie');
    });
}
exports.default = createActivitie;
//# sourceMappingURL=createActivitie.js.map