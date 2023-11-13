import {Router} from 'express';
const participanteRoutes = Router();

import * as controller from '../controllers/participante.controller';

participanteRoutes.get('/', controller.getParticipantes);
participanteRoutes.post('/', controller.createParticipante);
participanteRoutes.get('/:id', controller.deleteParticipante);
participanteRoutes.put('/:id', controller.updateParticipante);
participanteRoutes.delete('/:id', controller.deleteParticipante);

export const PREFIX = '/participante';
export const ROUTER = participanteRoutes;