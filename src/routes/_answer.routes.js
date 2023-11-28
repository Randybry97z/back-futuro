import {Router} from 'express';
const answerRoutes = Router();
import { verifyToken } from '../middlewares';

import * as controller from '../controllers/answer.controller';

answerRoutes.get('/', controller.getAnswers);
answerRoutes.get('/participant/:id', controller.getAnswersByParticipant);
answerRoutes.post('/', controller.createAnswer);
answerRoutes.get('/:id', [verifyToken], controller.getAnswer);
answerRoutes.put('/:id', [verifyToken], controller.updateAnswer);
answerRoutes.delete('/:id', [verifyToken], controller.deleteAnswer);
answerRoutes.post('/save-answers',  controller.createAnswers);

export const PREFIX = '/answer';
export const ROUTER = answerRoutes;