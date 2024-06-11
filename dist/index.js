"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
// Importing projet route
const getProject_router_1 = tslib_1.__importDefault(require("./routers/getProject.router"));
//Importing project dependancies
const dotenv = tslib_1.__importStar(require("dotenv"));
const express_1 = tslib_1.__importDefault(require("express"));
const serve_favicon_1 = tslib_1.__importDefault(require("serve-favicon"));
const cors_1 = tslib_1.__importDefault(require("cors"));
const helmet_1 = tslib_1.__importDefault(require("helmet"));
//Importing routes
const activity_router_1 = tslib_1.__importDefault(require("./routers/activity.router"));
const user_router_1 = tslib_1.__importDefault(require("./routers/user.router"));
const reservation_route_1 = tslib_1.__importDefault(require("./routers/reservation.route"));
//Importing DB
const sequelize_1 = require("./databases/sequelize");
//Path for the favicon
const path_1 = tslib_1.__importDefault(require("path"));
//App Variables 
dotenv.config();
//Intializing the express app 
const app = (0, express_1.default)();
//Initializing db
(0, sequelize_1.ConnectionDB)();
// Synchronize db
(0, sequelize_1.SynchroniseDB)();
//using the dependancies
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, serve_favicon_1.default)(path_1.default.join(__dirname, 'favicon.ico')));
// Routes 
app.use('/activity/', activity_router_1.default);
app.use('/user/', user_router_1.default);
app.use('/reservation/', reservation_route_1.default);
// project
(0, getProject_router_1.default)(app);
//exporting app
module.exports = app;
//# sourceMappingURL=index.js.map