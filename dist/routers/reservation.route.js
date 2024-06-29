"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reservation_controller_1 = require("../controllers/reservation.controller");
const router = (0, express_1.Router)();
router.post('/', reservation_controller_1.ReservationController.createReservation);
exports.default = router;
//# sourceMappingURL=reservation.route.js.map