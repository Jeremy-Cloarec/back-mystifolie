import { AssocClientActivity } from '../databases/sequelize';
import { ReservationDTO } from '../dtos/reservation.dto/reservation.dto';

export class ReservationService {
    static async createReservation(reservationData: ReservationDTO) {
        try {
            // Validation des données de réservation (à implémenter)

            // Création d'une nouvelle réservation dans la base de données
            const newReservation = await AssocClientActivity.create(reservationData);

            return newReservation;
            
        } catch (error) {
            throw new Error('Unable to create reservation');
        }
    }
}