import { Request, Response } from 'express';
import { ReservationService } from '../services/reservation.service'
import { ReservationDTO } from '../dtos/reservation.dto/reservation.dto'

export const ReservationController = {
    createReservation: async (req: Request, res: Response) => {
        try {
            const reservationData: ReservationDTO = req.body;
            const reservation = await ReservationService.createReservation( reservationData );
            const message = `L'activité a été réservée avec succès`;

            res.json({ message, reservation });

        } catch (error) {
            console.log(error);
            res.status(500).send('Erreur interne du serveur');
        }
    },
};
