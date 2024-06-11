"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const activity_controller_1 = require("../controllers/activity.controller");
const router = (0, express_1.Router)();
router.get('/', activity_controller_1.ActivityController.getAll);
router.get('/:id', activity_controller_1.ActivityController.get);
router.post('/', activity_controller_1.ActivityController.post);
router.put('/:id', activity_controller_1.ActivityController.put);
router.delete('/:id', activity_controller_1.ActivityController.delete);
exports.default = router;
//# sourceMappingURL=activity.router.js.map