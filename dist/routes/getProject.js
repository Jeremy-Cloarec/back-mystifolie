"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getProject(app) {
    app.get('/mystifolie', (req, res) => {
        res.send("You are on the Mystifolie project !");
    });
}
exports.default = getProject;
//# sourceMappingURL=getProject.js.map