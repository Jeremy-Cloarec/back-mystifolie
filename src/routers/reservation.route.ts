import { Router } from "express";
import { ReservationController } from '../controllers/reservation.controller'

const router = Router();

router.post('/', ReservationController.createReservation);

export default router