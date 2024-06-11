"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationController = void 0;
const reservation_service_1 = require("../services/reservation.service");
exports.ReservationController = {
    createReservation: async (req, res) => {
        try {
            const reservationData = req.body;
            const reservation = await reservation_service_1.ReservationService.createReservation(reservationData);
            const message = `L'activité a été réservée avec succès`;
            res.json({ message, reservation });
        }
        catch (error) {
            console.log(error);
            res.status(500).send('Erreur interne du serveur');
        }
    },
};
//# sourceMappingURL=reservation.controller.js.map