import {Router} from 'express';
const questionRoutes = Router();
import { hasPermissions } from '../middlewares';

import * as controller from '../controllers/question.controller';

questionRoutes.get('/', [hasPermissions], controller.getQuestions);
questionRoutes.post('/', [hasPermissions], controller.createQuestion);
questionRoutes.get('/:id', [hasPermissions], controller.getQuestion);
questionRoutes.put('/:id', [hasPermissions], controller.updateQuestion);
questionRoutes.delete('/:id', [hasPermissions], controller.deleteQuestion);

export const PREFIX = '/question';
export const ROUTER = questionRoutes;