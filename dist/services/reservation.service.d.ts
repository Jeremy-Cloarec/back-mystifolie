import { AssocClientActivity } from '../databases/sequelize';
import { ReservationDTO } from '../dtos/reservation.dto/reservation.dto';
export declare class ReservationService {
    static createReservation(reservationData: ReservationDTO): Promise<AssocClientActivity>;
}
