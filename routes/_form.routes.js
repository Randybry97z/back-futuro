import {Router} from 'express';
const formRoutes = Router();
import { hasPermissions, verifyToken } from '../middlewares';

import * as controller from '../controllers/form.controller';

formRoutes.get('/', [verifyToken], controller.getForms);
formRoutes.post('/', [hasPermissions], controller.createForm);
formRoutes.get('/:id', [verifyToken], controller.getForm);
formRoutes.put('/:id', [hasPermissions], controller.updateForm);
formRoutes.delete('/:id', [hasPermissions], controller.deleteForm);

export const PREFIX = '/form';
export const ROUTER = formRoutes;