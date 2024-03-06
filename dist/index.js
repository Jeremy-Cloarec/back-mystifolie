"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const findActivities_1 = tslib_1.__importDefault(require("./routes/activities/findActivities"));
const findAllActivities_1 = tslib_1.__importDefault(require("./routes/activities/findAllActivities"));
const createActivitie_1 = tslib_1.__importDefault(require("./routes/activities/createActivitie"));
const updateActivities_1 = tslib_1.__importDefault(require("./routes/activities/updateActivities"));
const deleteActivities_1 = tslib_1.__importDefault(require("./routes/activities/deleteActivities"));
//Importing project dependancies
const dotenv = tslib_1.__importStar(require("dotenv"));
const express_1 = tslib_1.__importDefault(require("express"));
const cors_1 = tslib_1.__importDefault(require("cors"));
const helmet_1 = tslib_1.__importDefault(require("helmet"));
//Importing .env validation
const validateEnv_1 = tslib_1.__importDefault(require("./utils/validateEnv"));
//App Variables 
dotenv.config();
(0, validateEnv_1.default)();
//intializing the express app 
const app = (0, express_1.default)();
//using the dependancies
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Routes 
(0, findActivities_1.default)(app);
(0, findAllActivities_1.default)(app);
(0, createActivitie_1.default)(app);
(0, updateActivities_1.default)(app);
(0, deleteActivities_1.default)(app);
//exporting app
module.exports = app;
//# sourceMappingURL=index.js.map