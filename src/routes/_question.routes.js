import {Router} from 'express';
const questionRoutes = Router();
import { hasPermissions, verifyToken } from '../middlewares';

import * as controller from '../controllers/question.controller';

questionRoutes.get('/', [hasPermissions], controller.getQuestions);
questionRoutes.get('/form_participant/:form_id/:participant_id/:date', [verifyToken], controller.getQuestionsByFormByParticipant);
questionRoutes.post('/', [hasPermissions], controller.createQuestion);
questionRoutes.get('/:id', [hasPermissions], controller.getQuestion);
questionRoutes.put('/:id', [hasPermissions], controller.updateQuestion);
questionRoutes.delete('/:id', [hasPermissions], controller.deleteQuestion);

export const PREFIX = '/question';
export const ROUTER = questionRoutes;