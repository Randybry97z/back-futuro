import {Router} from 'express';
const companyRoutes = Router();
import { verifyToken } from '../middlewares';

import * as controller from '../controllers/company.controller';

companyRoutes.get('/', controller.getCompanies);
companyRoutes.post('/', [verifyToken], controller.createCompany);
companyRoutes.get('/:id', [verifyToken], controller.getCompany);
companyRoutes.put('/:id', [verifyToken], controller.updateCompany);
companyRoutes.delete('/:id', [verifyToken], controller.deleteCompany);

export const PREFIX = '/company';
export const ROUTER = companyRoutes;