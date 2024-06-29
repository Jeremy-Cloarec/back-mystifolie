"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const router = (0, express_1.Router)();
router.get('/', user_controller_1.UserController.getAll);
router.get('/:id', user_controller_1.UserController.get);
router.post('/', user_controller_1.UserController.post);
router.put('/:id', user_controller_1.UserController.put);
router.delete('/:id', user_controller_1.UserController.delete);
exports.default = router;
//# sourceMappingURL=user.router.js.map