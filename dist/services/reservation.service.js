"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationService = void 0;
const sequelize_1 = require("../databases/sequelize");
class ReservationService {
    static async createReservation(reservationData) {
        try {
            // Validation des données de réservation (à implémenter)
            // Création d'une nouvelle réservation dans la base de données
            const newReservation = await sequelize_1.AssocClientActivity.create(reservationData);
            return newReservation;
        }
        catch (error) {
            throw new Error('Unable to create reservation');
        }
    }
}
exports.ReservationService = ReservationService;
//# sourceMappingURL=reservation.service.js.map