import {Router} from 'express';
const historyRoutes = Router();
import { verifyToken } from '../middlewares';

import * as controller from '../controllers/institucionalizationhistory.controller';

historyRoutes.get('/', [verifyToken], controller.getInstitutionalizationHistories);
historyRoutes.post('/', [verifyToken], controller.createInstitutionalizationHistory);
historyRoutes.get('/:id', [verifyToken], controller.getInstitutionalizationHistory);
historyRoutes.put('/:id', [verifyToken], controller.updateInstitutionalizationHistory);
historyRoutes.delete('/:id', [verifyToken], controller.deleteInstitutionalizationHistory);

export const PREFIX = '/institucionalization_history';
export const ROUTER = historyRoutes;