import {Router} from 'express';
const participantRoutes = Router();
import { verifyToken } from '../middlewares';

import * as controller from '../controllers/participante.controller';

participantRoutes.get('/', [verifyToken], controller.getParticipantes);
participantRoutes.get('/byUser/:user_id', [verifyToken], controller.getParticipantesByUser);
participantRoutes.post('/', [verifyToken], controller.createParticipante);
participantRoutes.get('/:id', [verifyToken], controller.getParticipante);
participantRoutes.put('/:id', [verifyToken], controller.updateParticipante);
participantRoutes.delete('/:id', [verifyToken], controller.deleteParticipante);

export const PREFIX = '/participants';
export const ROUTER = participantRoutes;